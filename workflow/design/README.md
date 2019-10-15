# Design Workflow

Our design workflow orients itself on established practices from software
engineering. It facilitates smooth execution and a methodical approach to
designing applications.

## Design Sources

We manage design source files like code, maintaining an authoritative mainline
and making changes in change sets that are only applied back to the mainline
once complete. Design sources can be maintained using a version control system
just like for the project's code or in a separate system, depending on the
environment of a project.

### Change Sets/Branches

No changes to design sources are ever applied directly to the mainline. Only
after a set of changes has been reviewed and approved is it merged back as one
discrete change. All individual changes that are applied together should be
related to the same UI element(s). Once changes have been merged back into the
mainline, the issue describing the work should be updated with details of what
was done. The change should also be referenced in the issue if the tools allow
for it or, if that is not the case, a static image of the change should be
attached to the issue.

#### Reviews

When a design change is ready for review, its author should actively ask another
team member to review - ideally via the tools used in the particular project if
those support it or over online chat etc. if not. Everyone asked for review
should reply in a timely manner - even if it's to ask for someone else to be
chosen if they do not have the time to do a proper review.

Once the reviewer approved the changes, they can be applied by any team member
including the change's author. If the original reviewer would like a second
review by another team member, potentially one more familiar with the aspects of
the design that are changed, they will ask for it. In case anything comes up in
the review that cannot be resolved between the reviewer and the author of the
pull request, a third person should be brought in to resolve the deadlock.

Changes to design sources need to be reviewed for:

- completeness: does the change contain all of the necessary elements and
  states?
- consistency: does the change fit in with and leverage the project's design
  system and overall visual direction?
- applicability: is the change possible to implement with the technology of
  choice with reasonable effort?

When reviewing design changes the same rules apply as when
[reviewing code changes](../engineering/#review-guidelines).

## Design Systems

All design work should result in a design system for the respective project,
independently of its nature or scope. The design system is a structured,
multi-level framework where each layer builds on the elements defined in the
previous one, going from simple to complex, e.g.:

- basic rules around font choices and color schemes build the foundation for the
  design system
- atomic elements like buttons, labels and inputs serve as the foundation of the
  design and are the building blocks for all higher levels
- components are built on top of atomic elements and/or other components and
  resemble groups of lower level elements that function as a unit like search
  forms, headers etc.
- components are arranged in particular ways to compose actual pages or screens
  for an application

A design system will ensure consistency across all of the UI of an application
as well as minimize the work necessary for extending the UI over time as new
elements will build on top of existing ones.

With every change that is applied, the design system is incrementally built up
and extended over time. New UI elements that were not previously covered will
reuse lower-level elements where applicable and only introduce new concepts and
patterns where no such reusable element is available. In cases where existing UI
elements turn out to not be suited for previously uncovered cases, these
elements might need to be changed, potentially making changes in other,
higher-level elements necessary as well.

## Deliverables

Design files should be prepared in a way that makes extraction of assets and
necessary artwork easy for the engineers and designers who will use them. This
should include preparing and marking elements for export, including proper
offsets and intended appropriate file formats to reduce the necessity for
producing any special deliverables beyond the files themselves.

If any particular deliverables are required that the engineers can not extract
from the design source files directly, those deliverables should be attached to
the respective issue in the format best suited for the particular use case.

In order to demonstrate complex behavior or animation, narrow prototypes or
videos should be favored over text descriptions when possible to eliminate
ambiguities and mis-understandings.
