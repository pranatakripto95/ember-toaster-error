# Ember Toaster Error

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/pranatakripto95/ember-toaster-error/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/pranatakripto95/ember-toaster-error/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

The funniest error message a kitchen toaster would show its owner:

> **Crumb tray full. I am 40% crumbs now.**

37 characters, one line. The error is a real one — "Crumb tray full"
is exactly what a toaster reports — and the joke comes from a place
the obvious puns never go: not bread, not 404, not breakfast, but the
tray underneath, the part of a toaster nobody thinks about. The
appliance quietly reports that it is becoming its own crumbs: deadpan,
one voice, no pun, no error code, nothing explained.

Three candidates were weighed before this one: "Crumb tray full. I am
40% crumbs now." (the pick — real error, freshest angle, shortest at
37 characters), "ERROR: No bread detected. Toasting air out of spite."
(its second half has a voice, but its first half is the cliché every
entry will send), and "ERROR 503: Bread unavailable. Please insert
carbs." (a code joke wearing a toaster costume — it reads like a
server, not a small appliance on a kitchen counter).

## How it works

`main.ts` writes exactly `Crumb tray full. I am 40% crumbs now.` — no
newline, no extra words — to `/output/entry.txt`. It refuses to write
anything that is not one line of 1–120 characters, checked in bytes as
well as characters, then reads the file back and proves it holds
exactly that. No network, no secrets, no dependencies — just Node.

```sh
node main.ts
```

## Entry

Built for the make.fun bounty **The Funniest Toaster Error Message**
(`u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`) as `@pranata`.
