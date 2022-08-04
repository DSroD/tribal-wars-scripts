# TW Reminders

Widget pro odpočítávání času pro Tribal Wars.

Tento skript umožňuje tvorbu vlastních časovačů se zvukovou notifikací při doběhnutí času. Každý časovač může mít
libovolný název a obsahuje odkaz na stránku, kde byl vytvořen. Umožní tak mít přehled např. o ukončení výroby,
sběru nebo naplánovaných útocích i v moment, kdy je hra v neaktivní záložce prohlížeče.

## Build

`yarn && yarn build`

Vygeneruje `dist/main.js` soubor s transpilovaným kódem.

## Použití

`javascript: void($.getScript('TBD'))`

Po spuštění skriptu se zobrazí okno s časovači, kde lze přidat nový vlastní časovač, případně běžící/doběhlé časovače odstranit.

![Ukázka](/img/reminders.png)

Pokud je v momentě doběhnutí časovače okno časovačů otevřeno v jakémkoliv panelu prohlížeče, dojde k přehrání zvukového efektu.