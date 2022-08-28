import { match, P } from "ts-pattern";
import { Env } from "./environment";
import { Lambda, List, TWNumber, Symbol, TWObject, TWObjectType, Void, Zero, Number, One, Bool, True, False } from "./objects";
import { Result, ResultFactory } from "./result";

export function eval_obj(object: TWObject, env: Env): Result<TWObject, string> {
    return match(object[0])
        .with(TWObjectType.Lambda, () => ResultFactory.Result<TWObject>(object))
        .with(TWObjectType.List, () => {
            let l = object as List
            return eval_list(l, env)
        })
        .with(TWObjectType.Symbol, () => {
            let s = object as Symbol
            return eval_symbol(s, env)
        })
        .otherwise(() => ResultFactory.Result<TWObject>(object))
        
}

function eval_list(list: List, env: Env): Result<TWObject, string> {
    let head = list[1][0]
    
    return match(head)
        .with(Symbol("if"), () => eval_if(list, env))
        .with(Symbol("cond"), () => eval_if(list, env))
        .with(Symbol("begin"), () => {
            let result: Result<TWObject, string> = ResultFactory.Result<TWObject>(Void)
            for (let o of list[1].slice(1)) {
                result = eval_obj(o, env)
            }
            return result
        })
        .with(Symbol("define"), () => {
            if (list[1].length !== 3)
                return ResultFactory.StringError(`Syntax error: define is expecting an identifier and an object`)
            let identifier = list[1][1]
            if (identifier[0] != TWObjectType.Symbol)
                return ResultFactory.StringError(`Syntax error: invalid identifier at declare ${identifier[1]}`)
            
            let result = eval_obj(list[1][2], env)
            if (!result.is_successful)
                return result.append_error(`Error defining symbol ${identifier[1]}`)
            env.set(identifier[1], result.unwrap())
            return ResultFactory.Result<TWObject>(Void)
        })
        .with(Symbol("equal?"), () => eval_equal(list, env))
        .with(Symbol("+"), () => eval_list_op<Number>((op1, op2) => ResultFactory.Result(TWNumber(op1[1] + op2[1])), list, env, TWObjectType.Number))
        .with(Symbol("-"), () => eval_list_op<Number>((op1, op2) => ResultFactory.Result(TWNumber(op1[1] - op2[1])), list, env, TWObjectType.Number))
        .with(Symbol("*"), () => eval_list_op<Number>((op1, op2) => ResultFactory.Result(TWNumber(op1[1] * op2[1])), list, env, TWObjectType.Number))
        .with(Symbol("/"), () => eval_binary_op<Number, Number>((op1, op2) => {
            if (op2[1] === 0)
                return ResultFactory.StringError(`Cannot divide by zero`)
            return ResultFactory.Result(TWNumber(op1[1] / op2[1]))
        }, list, env, TWObjectType.Number, TWObjectType.Number))
        .with(Symbol("sqr"), () => {
            if (list[1].length !== 2)
                return ResultFactory.StringError('Expected 1 argument for sqr')
            let obj_res = eval_obj(list[1][1], env)
            if (!obj_res.is_successful)
                return obj_res.append_error(`Error evaluating an argument during 'sqrr' function call.`)
            let obj = obj_res.unwrap()
            if (obj[0] !== TWObjectType.Number)
                return ResultFactory.StringError('Expected Number as an argument for sqr.')
            let num = obj[1]
            return ResultFactory.Result<TWObject>(TWNumber(num * num))
        })
        .with(Symbol("sqrt"), () => {
            if (list[1].length !== 2)
                return ResultFactory.StringError('Expected 1 argument for sqrt.')
            let obj_res = eval_obj(list[1][1], env)
            if (!obj_res.is_successful)
                return obj_res.append_error(`Error evaluating an argument during 'sqrt' function call.`)
            let obj = obj_res.unwrap()

            if (obj[0] !== TWObjectType.Number)
                return ResultFactory.StringError('Expected Number as an argument for sqrt.')
            let num = obj[1]
            if (num < 0)
                return ResultFactory.StringError('Function sqrt requires positive number as an argument')
            return ResultFactory.Result<TWObject>(TWNumber(Math.sqrt(num)))
        })
        .with(Symbol("car"), () => {
            if (list[1].length !== 2)
                return ResultFactory.StringError('Expected 1 argument for car.')
            if (list[1][1][0] === TWObjectType.Void)
                return ResultFactory.StringError('Expected List as an argument for car.')
            let result = eval_obj(list[1][1], env)

            if (!result.is_successful)
                return result.append_error(`Error evaluating an argument during 'car' function call.`)
            let obj = result.unwrap()

            if (obj[0] !== TWObjectType.List)
                return ResultFactory.StringError('Expected List as an argument for car.')
            let obj_list = obj as List
            if (obj_list[1].length < 1)
                return ResultFactory.StringError('Argument for car can not be empty.')
            let left = obj_list[1][0]
            return ResultFactory.Result<TWObject>(left)
        })
        .with(Symbol("cdr"), () => {
            if (list[1].length !== 2)
                return ResultFactory.StringError('Expected 1 argument for cdr.')
            if (list[1][1][0] === TWObjectType.Void)
                return ResultFactory.StringError('Expected List as an argument for cdr.')
            let result = eval_obj(list[1][1], env)

            if (!result.is_successful)
                return result.append_error(`Error evaluating an argument during 'cdr' function call.`)
            let obj = result.unwrap()

            if (obj[0] !== TWObjectType.List)
                return ResultFactory.StringError('Expected List as an argument for cdr.')
            let obj_list = obj as List
            if (obj_list[1].length < 1)
                return ResultFactory.StringError('Argument for cdr can not be empty.')
            
            let right = obj_list[1].slice(1)
            return ResultFactory.Result<TWObject>([TWObjectType.List, right])
        })
        .with(Symbol("lambda"), () => eval_lambda_definition(list, env))
        .with(Symbol("persist-var"), () => {
            let vars_to_persist = list[1].slice(1)
            let objs_to_persist: [string, TWObject][] = []

            for (let v_t_p of vars_to_persist) {
                if (v_t_p[0] !== TWObjectType.Symbol)
                    return ResultFactory.StringError(`Expected symbol of variable to persist.`)
                let smb = eval_symbol(v_t_p, env)
                if (!smb.is_successful)
                    return smb.append_error(`Error persisting symbol ${v_t_p[1]}`)
                objs_to_persist.push([v_t_p[1], smb.unwrap()])
            }

            if (!window.game_data?.world)
                return ResultFactory.StringError(`Game data not found, persistence is tied to game world`)
            
            let k = localStorage.getItem(`${window.game_data?.world}_twlang_stored_env`)
            let items: [string, TWObject][] = JSON.parse(k ?? "")

            items.push(...objs_to_persist)

            localStorage.setItem(`${window.game_data?.world}_twlang_stored_env`, JSON.stringify(items))

            return ResultFactory.Result<TWObject>(Void)
        })
        .with([TWObjectType.Symbol, P._], () => {
            let smb = eval_symbol(head as Symbol, env)
            if (!smb.is_successful || smb.unwrap()[0] !== TWObjectType.Lambda)
                return smb
            return eval_lambda(smb.unwrap() as Lambda, list, env)
        })
        .otherwise(() => {
            let new_list = [TWObjectType.List, []] as List

            for (let el of list[1]) {
                let new_obj = eval_obj(el, env)
                if (!new_obj.is_successful)
                    return new_obj.append_error(`Error evaluating objects in list.`)
                
                if (new_obj.unwrap()[0] !== TWObjectType.Void)
                    new_list[1].push(new_obj.unwrap())
            }

            return ResultFactory.Result(new_list)
    })
}

function eval_if(list: List, env: Env): Result<TWObject, string> {
    if (list[1].length !== 4)
        return ResultFactory.StringError(`Expected if (condition) (true branch) (false branch)`)
    
    let condition = eval_obj(list[1][1], env)
    if (!condition.is_successful)
        return condition.append_error(`Error during evaluating if clause condition`)
    let cond_result = condition.unwrap()
    if (!check_type<Bool>(cond_result, TWObjectType.Bool))
        return ResultFactory.StringError(`Error: if clause condition is not boolean`)
    if (cond_result[1])
        return eval_obj(list[1][2], env)
    return eval_obj(list[1][3], env)
}

function eval_symbol(symbol: Symbol, env: Env): Result<TWObject, string> {
    let obj = env.get(symbol[1])
    if (!obj)
        return ResultFactory.StringError(`Unbound symbol ${symbol[1]}.`)
    return ResultFactory.Result(obj)
}

function eval_lambda(lambda: Lambda, call_list: List, env: Env): Result<TWObject, string> {    
    let lambda_name = call_list[1][1][1] as string
    let lambda_param_objects = call_list[1].slice(1)
    let expected_params = lambda[1][0]
    if (lambda_param_objects.length !== expected_params.length)
        return ResultFactory.StringError(`Lambda ${lambda_name} requires ${expected_params.length} parameters (${expected_params.join(", ")})`)
    
    let lambda_env: Env = new Map(env)
    expected_params.forEach((v, i, arr) => {
        let param_obj = eval_obj(lambda_param_objects[i], env)
        if (!param_obj.is_successful)
            return param_obj.append_error(`Error evaluating an argument during ${lambda_name} function call`)
        lambda_env.set(v, param_obj.unwrap())
    })

    return eval_obj(lambda[1][1], lambda_env)

}

function eval_binary_op<T1 extends TWObject, T2 extends TWObject>(op: (param1: T1, param2: T2) => Result<TWObject, string>, op_list: List, env: Env, obj1_type: TWObjectType, obj2_type: TWObjectType): Result<TWObject, string> {
    if (op_list[1].length !== 3)
        return ResultFactory.StringError(`Expected 2 parameters for operation '${op_list[1][0][1]}'.`)

    let left = eval_obj(op_list[1][1], env)
    let right = eval_obj(op_list[1][2], env)

    if (!left.is_successful)
        return left.append_error(`Error evaluating left operand of ${op_list[1][0][1]}.`)
    if (!right.is_successful)
        return right.append_error(`Error evaluating right operand of ${op_list[1][0][1]}.`)
    
    let left_obj = left.unwrap()
    let right_obj = right.unwrap()

    if (!check_type<T1>(left_obj, obj1_type))
        return ResultFactory.StringError(`Type mismatch in left argument of ${op_list[1][0][1]}`)
    
    if (!check_type<T2>(right_obj, obj2_type))
        return ResultFactory.StringError(`Type mismatch in right argument of ${op_list[1][0][1]}`)
    
    return op(left_obj, right_obj) 
}

function eval_equal(op_list: List, env: Env) {
    if (op_list[1].length !== 3)
        return ResultFactory.StringError(`Expected 2 parameters for operation '${op_list[1][0][1]}'.`)
    
    let left = eval_obj(op_list[1][1], env)
    let right = eval_obj(op_list[1][2], env)

    if (!left.is_successful)
        return left.append_error(`Error evaluating left operand of ${op_list[1][0][1]}.`)
    if (!right.is_successful)
        return right.append_error(`Error evaluating right operand of ${op_list[1][0][1]}.`)
    
    let left_obj = left.unwrap()
    let right_obj = right.unwrap()

    if (left_obj[0] === TWObjectType.List && right_obj[0] === TWObjectType.List)
        //TODO: implement list equality properly, this is quite ugly
        return ResultFactory.Result(JSON.stringify(left_obj) === JSON.stringify(right_obj) ? True : False)

    return ResultFactory.Result((left_obj[0] === right_obj[0] && left_obj[1] === right_obj[1]) ? True : False)
}

function eval_list_op<T extends TWObject>(op: (param1: T, param2: T) => Result<T, string>, op_list: List, env: Env, t_type: TWObjectType): Result<TWObject, string> {
    if (op_list[1].length < 3)
        return ResultFactory.StringError(`Expected at least 2 parameters for operation '${op_list[1][0][1]}'.`)
    
    let params: TWObject[] = []

    for (let x of op_list[1].slice(1)) {
        let result = eval_obj(x, env)
        if (!result.is_successful)
            return result.append_error(`Error evaluating argument in function call '${op_list[1][0][1]}'`)
        
        params.push(result.unwrap())
    }
    
    if (!check_list_t<T>(params, t_type)) {
        return ResultFactory.StringError(`Type mismatch in function call '${op_list[1][0][1]}'.`)
    }
    
    let result: Result<T, string> = ResultFactory.Result<T>(params[0])
    for (let additional of params.slice(1)) {
        result = op(result.unwrap(), additional)
        if (!result.is_successful)
            return result
    }
    return result
        
}

function eval_lambda_definition(list: List, env: Env): Result<Lambda, string> {
    if (list[1].length !== 3) 
        return ResultFactory.StringError(`Syntax error: expected lambda (params) (body)`)
    
    let params = list[1][1]
    if (params[0] != TWObjectType.List)
        return ResultFactory.StringError(`Syntax error: expected lambda (params) (body)`)
    
    let param_names: string[] = []
    for (let param of params[1]) {
        if (param[0] != TWObjectType.Symbol)
            return ResultFactory.StringError(`Syntax error: invalid lambda parameter`)
        param_names.push(param[1])
    }

    let body = list[1][2]
    if (body[0] != TWObjectType.List)
        return ResultFactory.StringError(`Syntax error: invalid lambda body`)
    
    // Copy of the expression tree
    let new_body: TWObject = [TWObjectType.List, body[1]]
    let new_lambda: Lambda = [TWObjectType.Lambda, [param_names, new_body]]

    return ResultFactory.Result(new_lambda)
}

function check_list_t<T extends TWObject>(l: TWObject[], obj_t: TWObjectType): l is T[]  {
    for (let x of l) {
        if (x[0] !== obj_t)
            return false
    }
    return true
}

function check_type<T extends TWObject>(o: TWObject, obj_t: TWObjectType): o is T {
    return o[0] === obj_t
}