# TW Reminders

Widget for countdowns in Tribal Wars.

This script allows you to create own timers with sound notifications. Each timer has an arbitrary name and contains a link to the page, where it was set up. This allows players to have ultimate overview and notifications about timed actions, such as bulding or scavenge being finished or planned attacks, even when the game is in an inactive browser tab.

## Build

`yarn && yarn build`

Generates `dist/main.js` file with transpiled javascript.

## Usage

`javascript: void($.getScript('https://cdn.jsdelivr.net/gh/DSroD/tribal-wars-scripts/Reminders/dist/main.js?raw'))`

Once you run the script, a window with reminders shows up. You can add new reminder or remove old/finished ones.

![Example](/tribal-wars-scripts/img/reminders.png)

If any browser tab has this script running in the time of reminder a sound effect is played.