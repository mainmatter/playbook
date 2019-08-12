# Design method

This document outlines the actual tools and methods we use in our process at simplabs.

## Structuring visual design

We rely on [Atomic Design][atomic] by Brad Frost as
a base methodology to describe indiviual aspects of a design.

> Atomic design is a methodology composed of five distinct stages working
> together to create interface design systems in a more deliberate and
> hierarchical manner. The five stages of atomic design are:
> Atoms → Molecules → Organisms → Templates → Pages

Going from simple to complex, atoms describe single elements such as buttons,
molecules such as a search field composed of an input and a button,
organisms compose these to UI components such as headers and templates use
the organisms to define archetypes of structure. Pages represent actualized
templates containing actual content and additions unique to them.

In extension to the orignal methodology, we also use the the term
[“design tokens”][tokens] to describe critical base variables such as brand
colors and sizes, and [“ions”][ions] to talk about defined variations
of the five stages.

[atomic]: http://atomicdesign.bradfrost.com
[tokens]: http://bradfrost.com/blog/post/extending-atomic-design/
[ions]: https://www.cjcid.com/articles/ions-introduction/
