---
layout: page
title: Simulating bird flock patters with linear algebra
description: Mapping Bird Murmations to xyz vectorspace as a "non-math" friendly approach to linear algebra.
img: assets/img/Murmurations_1.avif
importance: 1
# date: 2026-8-1
category: math
skills: [Math, Coding, Teaching]
giscus_comments: false
---

<div style="width: 100%; height: 400px; overflow: hidden; margin-top: 30px;">
  <img src="{{ '/assets/img/Murmurations_2.avif' | relative_url }}" style="width: 100%; height: 100%; object-fit: cover; object-position: center 50%;" />
</div>
<span style="font-size: 0.65em; font-weight: normal; font-style: italic;">Søren Solkær / National Geographic</span>

### Introduction

As I've progressed through the math tree, I've had some trouble explaining the applications of new techniques to those in my life with less of a math background. 

What would I actually do with advanced calculus? What would I actually do with linear algebra?

As someone focused in economics, plenty of use cases immediately come to mind. Speaking with those in my life outside of it, I try to distill it into one or two tangible examples. 

The simpliest answer I have been able to use is always "to build a bridge".  Explaining integrating shapes in 3D space, albeit uninspired from the total beauty of math, gives almost anyone an easily underestandable use for what math allows us to do. 

The idea for this project came in lecture one day, when I was thinking about how vectors could be used to show movement in 3D space. I spent a couple days bringing it to life for the purpose of showing those in my life without a math background some of the applications of the feild beyond.

## Technical 

repo structure:
- flock.py <--- all behavior for the birds
- visualizations.py <--- shows bird movement and presentation functions

This is a 3D boids simulation written in python, using Numpy and Matplotlib. Birds are only given local perception, only noticing other birds and boundaries within their viewcone. All group behavior comes from local rules set to mimic bird knowledge (avoid collisions, fly with the flock, stay close). Rendered live, each bird is shown as a small pyramid with its apex acting as the nose. Presentation functions such as speed controls and a highlighting mode are used for presenting.