
export type Result<T, TErr> = TWResult<T> | TWError<TErr>

interface TWError<TErr> {
    error: TErr
    is_successful: false
    append_error: (ne: TErr) => TWError<TErr>
}

interface TWResult<T> {
    result: T
    is_successful: true
    unwrap: () => T
}

export class ResultFactory {
    public static Error<TErr>(error: TErr, appendFunc: (ne: TErr) => TWError<TErr>): Result<never, TErr> {
        return { error: error, is_successful: false, append_error: appendFunc }
    }
    public static Result<T>(result: T): TWResult<T> {
        return { result: result, is_successful: true, unwrap: () => result }
    }

    public static StringError(error: string): TWError<string> {
        return {error: error, is_successful: false, append_error: (str) => ResultFactory.StringError(str + "\n" + error) }
    }
}

export function is_error<TErr>(r: Result<any, TErr>): r is TWError<TErr> {
    return !r.is_successful
}

export function is_successful<T>(r: Result<T, any>): r is TWResult<T> {
    return r.is_successful
}