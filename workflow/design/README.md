# Design workflow

## Implementing visual design

We create visual mockups of the currently regarded aspect of the project.

For the project itself this means creating a design system that becomes the
foundation of the design work layout out in the concept phase, defining colors,
typographic rules and basic layout in the process.

For indivdual features we only create mockups for the aspects of a feature that
deviate from the general guide or need more detailed definition, such as
individual UI states.

We use versioning tools to organize design files. This allows us to track
changes to the files in a more structured way and ensures nothing gets lost.

We organize individual features of the design and their phases in branches to
make reviewing easy. Branches will get merged into the master once the feature
is approved. This action should be noted inside our ticketing system to keep
other members working on the feature informed and collect everything in one
place. The result shall either be uploaded as a static image to the issue as
well or if the versioning system supports it, a link should be added.

### Working with an issue tracker for design tasks

Each design task necessary for a feature of the project should be documented in
a separate issue. Issues that describe features in both design and code need to
be split up and referenced accordingly.

If a feature requires the design system to be extended, a separate issue will be
created to track work on that. If possible, the design system should live in its
own repository, being consumed by the actual project.

### Deliverables - Results of a design task

Mockups are created as a representation for a detailed and finely crafted
snapshot of how a UI should look like.

To demonstrate complex behavior or animation, a narrow prototype made in HTML
and CSS or even an animation should be favored over text descriptions when
possible to eliminate ambiguities.

Used-as-is assets ("binary") for things like icons, optimized logos and other
decorational artwork used in the project should be delivered in the formats best
suited for their intended use and should be optimized for file size using
lossless compression.
