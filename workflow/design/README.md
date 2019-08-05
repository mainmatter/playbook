# Design workflow

TODO

## Implementing visual design

We create visual mockups of the currently regarded aspect of the project.

For the project itself this means creating a visual design guide that executes
the foundation of the design work layout out in the concept phase, defining
colors, typographic rules and basic layout.

For indivdual features we only create mockups for the aspects of a feature that
deviate from the general guide or need more detailed definition, such as
individual UI states.

We use name design files in meaningful way and rely on some form of
versioning and a branching model to organize and structure our work.

### Structuring visual design

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
colors and sizes, as well as [“ions”][ions] to talk about defined variations
of the five stages.

[atomic]: http://atomicdesign.bradfrost.com
[tokens]: http://bradfrost.com/blog/post/extending-atomic-design/
[ions]: https://www.cjcid.com/articles/ions-introduction/

### Collaborating

(Review process, co-authoring, etc) TBD
