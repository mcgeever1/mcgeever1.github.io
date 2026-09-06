---
layout: page
title: Cascade
description: A Magic the Gathering browser game that tests your knowledge of card popularity
img: assets/img/Cascade_thumbnail.webp
importance: 4
category: fun
skills: [JavaScript, HTML/CSS]
giscus_comments: false
---

<div style="margin: 0.4rem 0 1.5rem 0;">
  <a href="https://mcgeever1.github.io/mtg-cascade/" target="_blank" title="Live Site" style="margin-right: 0.75rem;"><i class="fa-solid fa-link fa-lg"></i></a>
  <a href="https://github.com/mcgeever1/mtg-cascade" target="_blank" title="GitHub Repo"><i class="fa-brands fa-github fa-lg"></i></a>
</div>
## Summary
Cascade is a zero-dependency browser game (HTML/CSS/JS). It fetches live card popularity data from EDHREC (A MTG Cardbuilding database) and card data (images, text, type) from Scryfall. Difficulty increases as your streak grows by narrowing the gap between the two cards presented. A wrong answer resets your streak and loads a new commander. Best streak is saved to `localStorage`.

*Disclaimer: this project was made with assistance from Claude Code.*

<div style="width: 100%; margin-top: 30px;">
  <img src="{{ '/assets/img/Cascade_thumbnail.webp' | relative_url }}" style="width: 100%; height: auto;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Card art for Eirdu, Carrier of Dawn by Lucas Graciano</span>

<br>
There are **29,000+** unique cards in *Magic the Gathering.* Tethered by the limitations of the format, a commander may have access to anywhere from **~4,000 to 29,000+** depending on their color identity. In reality, the actual number of viable cards is somewhere closer to n < 500, with many of the top ~200 seeing play in the majority of all decks, as they make up the *'staple pool'*, often accompanied by more niche picks suited specifically to their commander's strengths.

A single commander can have 50–200 cards in their pool. Pair selection follows:

$$\binom{n}{2} = \frac{n(n-1)}{2}$$

meaning a 200-card pool generates up to **19,900 possible pairs**.

Most of these are useless at a given the difficulty tier. The interesting part is tuning the model to display compelling matchups.

<div class="row">
  <div class="col-sm">
    {% include figure.liquid loading="eager" path="assets/img/choice.gif" title="gameplay" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Example case where Sterling Grove sees 78.8% of play, significantly more then Karametra's Blessing 6.5% usage, within the card pool of Sythis, Harvet's Hand</span>

<br>

## Difficulty Scaling

Difficulty is determined by your current streak. Each level filters card pairs by an **inclusion ratio** (how close the two cards are in popularity) and a **minimum inclusion floor** (ensuring at least one card is relatively well-known).

| Level | Streak | Ratio Band | Min Inclusion |
|-----------|--------|------------|---:|
| Easy | 0–2 | 2.0× and above | 30% |
| Medium | 3–5 | 1.5× – 2.0× | 15% |
| Hard | 6–9 | 1.25× – 1.5× | 8% |
| Expert | 10–14 | 1.12× – 1.25× | 3% |
| Nightmare | 15+ | 1.0× – 1.12× | none |
{: style="margin-left: auto; margin-right: auto;"}

<br>
<small>Thresholds were calibrated empirically — adjusted until each tier felt meaningfully harder than the last. The numbers were tweaked until Easy felt approachable, Nightmare felt unfair, and everything along the way a discernible step up. </small>

<br>

- **Inclusion Ratio** = `max(inclusionA, inclusionB) / min(inclusionA, inclusionB)`

$$r = \frac{\max(i_A,\ i_B)}{\min(i_A,\ i_B)}$$

<br>

- **Inclusion Floor** = `num_decks / potential_decks` (% of eligible decks running the card)

$$f = \frac{n_{\text{decks}}}{n_{\text{potential}}}$$

<br>

## Shifting rates 
Card inclusion rates shift as the meta of the game evolves. A card that sees 40% play today may drop to 32% next release. The difficulty bands work within this constraint, calibrating as pairs are pulled to keep what feels "Easy" to continue as such regardless of the state of the game. This also avoids the near impossible task of assigning difficulty values card matchups that accounts for the context of what deck it is played in.


<div style="width: 100%; height: 400px; overflow: hidden;">
  <img src="{{ '/assets/img/Andrew_Mar_Avalanche.jpeg' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 66%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Card art for Ride the Avalanche, illustrated by Andrew Mar</span>

## Edge Cases

The game pulls from 1200+ commanders. The popular ones (Atraxa, Ur-Dragon) have deep, well-distributed pools. Niche commanders from older or fringe sets might only have 12 eligible cards total. Because of this a the 6-step fallback was created to address this variance. Some commanders simply can't generate enough distinct pairs and have to be silently dropped mid-session.

**Small card pools — 6-step fallback:**  
1. Find pairs matching exact difficulty band + popularity floor (excluding recent pairings, as well as all cards the player has seen too recently)  
2. Pool exhausted → allow pair repeats, so long as they were not recently shown, retry same constraints  
3. Still struggling to find matchups, relax upper ratio bound (keep lower bound + floor)  
4. If still struggling, relax popularity floor too  
5. Allow recently seen cards  
6. Last resort: drop difficulty lower bound to 1.0x → any valid pair

<p style="text-align: center;">*Minimum pool size is 10 cards. If a commander can't meet this, it's removed from the session.*</p>

**Recent cards window:** Cards shown in the last 2 rounds are excluded from new pairs (prevents immediate repeats). Overridden if the pool is too small.

Preventing immediate card repeats requires a 2-round exclusion window. But in small pools, that window can exhaust valid pairs entirely. The fallback has to override its own anti-repeat logic, which means the player occasionally will see repeats, letting lesser known cards on the edge of being cut stick around to stump players.

**Partner commanders:** Excluded entirely, their EDHREC pools are pair-dependent and don't work solo. 

Partner commanders have split EDHREC pages. The pool for "Tymna + Tana" is different from "Tymna + Kraum." There's no clean solo slug to fetch, so all 58 known partner slugs had to be hardcoded and excluded rather than handled dynamically.

**Mana rocks & lands:** Excluded to keep pairs strategic. 42 mana rocks are hardcoded; lands and mana artifacts are filtered by section header and type.

Nearly every deck runs Sol Ring, Arcane Signet, Command Tower. Without explicit filtering, these would dominate pairs at every difficulty level. The inclusion of lands undercuts the strategic intuition the game rests on.

**Failed commander data:** The commander is dropped from the session pool and won't be retried.


<div style="width: 100%; height: 400px; overflow: hidden;">
  <img src="{{ '/assets/img/Patchwork_Banner.jpg' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 36%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Card art for Patchwork Banner, illustrated by Sarah Finnigan</span>

<br>

## Local Development

No build tools or dependencies. Just serve the files over HTTP.

**Necessary structure:**
```
index.html       # entry point
renderer.js      # all game logic (~800 lines)
styles.css       # styling (~550 lines)
choice.gif       # gameplay demo
```

**APIs used:**
- `https://json.edhrec.com/pages/commanders/{slug}.json` — deck stats
- `https://api.scryfall.com/cards/named?exact={name}` — card data

At startup the app fetches the latest popular commanders from EDHREC. If that fails it falls back to a hardcoded list of 248 commanders. This makes sure the player won't see an error.

**New partner commanders** added to EDHREC must be manually added to `PARTNER_SLUGS` in `renderer.js`. Without this the fetch will fail.

<div style="width: 100%; height: 400px; overflow: hidden;">
  <img src="{{ '/assets/img/Mox_Opal.jpg' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 51%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Card art for Mox Opal, illustrated by Volkan Baga</span>