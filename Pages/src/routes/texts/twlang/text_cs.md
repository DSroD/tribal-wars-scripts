# TWLang

Jednoduchý jazyk inspirovaný jazykem SCHEME. Umožňuje přístup k proměnným ve hře a provádění operací nad nimi s možností definicí vlastních lambda expressions.

## REPL
Skript: `javascript: void($.getScript('TBD'))`
Spuštěním skriptu se zobrazí okno REPL pro TWLang. Kód se evaluuje po stisknutí tlačítka `eval` nebo pomocí klávesové zkratky `Ctrl+Enter`

![Ukázka](/img/twlang_repl.png)

## Typy

Objekty v TWLang mohou mít následující typy:
- `Void` - prázdný typ (`#nil`)
- `Number` - číslo
- `Bool` - true/false
- `String` - textový řetězec
- `Lambda` - lambda expression
- `List` - list objektů (ne nutně stejného typu)

## Syntax

Jazyk kopíruje syntax SCHEME.

### Příklady

- Volání funkce `f` s parametry `1` (: `Number`), `"x"` (: `String`) a `t` (proměnná neznámého typu)  
    
    - `(f 1 "x" t)`


- Definice proměnné pomocí `define`  

    - `(define x 10)`  
    - `(define x (+ 5 6 7 8))`

- Procedurání vyhodnocení pomocí `begin` (výsledkem bude `20`)
    - `(begin
        (define a (sqr 2)) 
        (define b (sqr 4)) 
        (+ a b) 
    )`

- Zavedení lambdy (`x^3` a zadefinování znaku `second` pro lambdu která vrátí druhý element listu)  
    - `(lambda (x) (* x x x))`  
    - `(define second (lambda (list) (car (cdr list))))`


## std

Standardní env obsahuje následující objekty
- `wood` : `Number` - množství dřeva v momentální vesnici
- `iron` : `Number` - množství železa v momentální vesnici
- `stone` : `Number` - množství hlíny v momentální vesnici
- `storage` : `Number` - maximální kapacita skladu v momentální vesnici
- `wood-pm` : `Number` - produkce dřeva za minutu v momentální vesnici
- `iron-pm` : `Number` - produkce železa za minutu v momentální vesnici
- `stone-pm` : `Number` - produkce hlíny za minutu v momentální vesnici
- `popul` : `Number` - populace v momentální vesnici
- `popul-max` : `Number` - maximální populace v momentální vesnici
- `village-name` : `String` - jméno vesnice
- `coords` : `List` : `(Number Number)` - koordináty momentálnní vesnice
- `speed-spear` : `Number` - základní rychlost kopíníka (nezávisle na světě, viz. wiki) (minut za 1 pole)
- `speed-sword` : `Number` - základní rychlost šermíře (minut za 1 pole)
- `speed-axe` : `Number` - základní rychlost sekerníka (minut za 1 pole)
- `speed-archer` : `Number` - základní rychlost lučištníka (minut za 1 pole)
- `speed-spy` : `Number` - základní rychlost špeha (minut za 1 pole)
- `speed-light` : `Number` - základní rychlost lehké kvalerie (minut za 1 pole)
- `speed-marcher` : `Number` - základní rychlost lučištníka na koni (minut za 1 pole)
- `speed-heavy` : `Number` - základní rychlost těžké kvalerie (minut za 1 pole)
- `speed-ram` : `Number` - základní rychlost beranidla (minut za 1 pole)
- `speed-catapult` : `Number` - základní rychlost katapultu (minut za 1 pole)
- `speed-knight` : `Number` - základní rychlost paladina (minut za 1 pole)
- `speed-snob` : `Number` - základní rychlost šlechtice (minut za 1 pole)
- `world-speed` : `Number` - rychlost světa
- `unit-speed` : `Number` - rychlost jednotek

- `+` : `(Number ...) => Number` - sčítání čísel
- `-` : `(Number ...) => Number` - odčítání čísel
- `*` : `(Number ...) => Number` - násobení čísel
- `/` : `(Number Number) => Number` - dělení 2 čísel
- `sqr` : (Number) => Number` - druhá mocnina čísla
- `sqrt` : `(Number) => Number` - druhá odmocnina čísla
- `car` : `List => any` - první element listu
- `cdr` : `List => List` - list bez prvního elementu
- `persist-var` : `any => Void` - uložení proměnné do persisted storage (separátní pro každý svět, umožní přístup k proměnným i po restartu okna s REPL)

## TODO

- if expression
- rozšíření std knihovny a rozšíření herních proměnných
- konstruktory pro list místo implicitního předpokladu listu
- type check funkce
- persist-var namespacing