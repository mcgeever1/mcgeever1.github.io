---
layout: page
title: Simulating bird flock patters with linear algebra
description: Mapping Bird Murmations to xyz vectorspace as a "non-math" friendly approach to linear algebra.
img: assets/img/murmurations_4.avif
thumbnail_position: center 50%
importance: 1
# date: 2026-8-1
category: math
skills: [Math, Coding, Teaching]
giscus_comments: false
---

<div style="margin: 0.4rem 0 1.5rem 0;">
  <a href="https://github.com/mcgeever1/birds" target="_blank" title="GitHub Repo"><i class="fa-brands fa-github fa-lg"></i></a>
</div>


<div style="width: 100%; height: auto; overflow: hidden; margin-top: 30px;">
  <img src="{{ '/assets/img/murmurations_4.avif' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 50%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Søren Solkær / National Geographic</span>

<br>

### Introduction

As I've progressed through math, I've had some trouble explaining the applications of new techniques to those in my life with less of a math background. 

What would I actually do with advanced calculus? What about linear algebra?

Within economics, plenty of use cases immediately come to mind. Speaking with those in my life outside of it, I try to distill it into one or two tangible examples. 

The simpliest answer for calculus has always ben "to build a bridge".  Explaining integrating shapes in 3D space, albeit uninspired from the total beauty of math, gives almost anyone an easily underestandable use for what math allows us to do. 

Linear algebra, equally beautiful and interesting, is slightly harder to de-abstract into layman's terms. My professor found the same problem when I asked in office hours.

The idea for this project came in lecture one day, when I was thinking about how vectors could be used to show movement in 3D space. I spent a couple days bringing it to life for the purpose of showing those in my life without a math background some of the applications of my classes.

<br>

<div style="width: 100%; height: 100%; overflow: hidden;">
  <img src="{{ '/assets/img/murmurations_1.avif' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 51%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Søren Solkær / National Geographic</span>

## Technical 

repo structure:
- flock.py          --- all behavior for the birds
- visualizations.py --- shows bird movement and presentation functions

This is a 3D boids simulation written in python, using Numpy and Matplotlib. Birds are only given local perception, only noticing other birds and boundaries within their viewcone. All group behavior comes from local rules set to mimic bird knowledge (avoid collisions, fly with the flock, stay close). Rendered live, each bird is shown as a small pyramid with its apex acting as the nose. Presentation functions such as speed controls and a highlighting mode are used for presenting.

## Some Applications of Linear Algebra
- bird logic uses dot product to calculate the difference in trajectory between them and all neighbors
- normalizing vectors to avoid birds misapplying too much significance to distant neighbors
- optimization through the use of broadcasting can be achieved given more time

<div style="width: 100%; height: 100%; overflow: hidden;">
  <img src="{{ '/assets/img/Murmurations_2.avif' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 51%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Søren Solkær / National Geographic</span>

### Other notes:
Speed Controls: 
- toggle between '1' (1x), '2' (2x), '3' (3x), and '5' (0.25x) speed
- pause with '0'
- "H" is highlight mode, used to present an intutive understanding of vectors and bird behavior
- panning enabled with mouse

Interest for this project came from The Sibley Guide to Birds by David Sibley.