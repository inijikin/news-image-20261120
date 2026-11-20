# news-image-20261120

[![make.fun](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/inijikin/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/inijikin/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up 20 November 2026's world news: the Shenzhen peace declaration, COP31's final day, the UK–EU reset deal, the EU summoning Russia's envoy, Bitcoin's slide as Anthropic's record IPO drains crypto, and Haiti's troop deal with El Salvador.

`main.ts` (Node 22, standard library only, no network) copies the pre-rendered `entry.png` into the output directory as `entry.png`. The image is rendered from `render.html` with headless Chromium (`node render.mjs`).

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
