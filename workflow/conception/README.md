# Conception Workflow

When drafting concepts for effective software solutions, we work closely with
our clients to ensure we are building an application that provides the right
features for the right users in the right way. Our clients have unique expertise
around their business, their market and target audience and we help them
translate that knowledge into a concrete concept for an application.

While applying a systematic approach for developing a good understanding of what
will be built, we intentionally keep the conception phase limited and don't do
excessively detailed up-front design and specification. Detailed wireframes tend
to give a false impression of completeness while it is essentially impossible to
cover every possible aspect and prevent new challenges and edge cases for
particular features from being uncovered in the execution phase. Also, static
wireframes or even interactive prototypes will never give as realistic an
impression for the final solution as one will get from an actual application,
even if that starts out with limited functionality initially and is only built
up incrementally over time. Therefore, we aim for a quick transition to the
execution stage, using the real application to collect feedback and verify
assumptions as early as possible.

## User Stories Workshop

In the User Stories workshop, we will define concrete concepts for individual,
self-contained features of the application. The goal is to develop an
understanding of what the structure of the features's content and functionality
is, what the UI elements are that the users interact with and what the
transitions between individual states in the feature's flow are. We are not
aiming at specifying every detail of all features and keep them deliberately
rough while concrete enough to functionally define the respective feature
completely.

This workshop requires input from all project stakeholders:

- the client has unique business expertise and understands best what goal a
  particular user story enables the user to achieve
- designers have the expertise to understand what interaction design lets the
  user achieve the above goal in the most efficient way
- engineers can assess different alternatives for implementing a user story for
  their technical feasibility and associated effort

Each self-contained feature of the application is represented by a user story.
User stories enable one or more personas (as identified during the project's
[discovery stage](../../project-flow/full-service/#discovery)) to perform a
particular taks in order to achieve a particular goal.

For each user story, we identify:

- the navigational structure: screens or pages, dialogs, menus etc.
- interactive elements: buttons, inputs etc. that the user needs to trigger
  actions and events in the flow
- flows: transitions between portions of the navigational structure that are
  triggered by interactive elements

User Stories are visualized using coarse diagrams (e.g. hand-drawn on paper)
including all of these identified pieces and the relationships between them.
During the workshop, participants will discuss and redraw these diagrams several
times until an ideal solution emerges. That final solution is then written down
in a user story document consisting of:

- a textual description of the user story, the need that it addresses and the
  solution that it provides
- the persona(s) that the user story caters to
- a low-fidelity diagram showing steps in the user story, the involved UI
  elements and transitions between steps

Once the user story has been clearly defined, we will revisit it, looking for
non-essential aspects that are not strictly necessary in order for the user
story to provide value as well as edge cases that might not immediately be
apparent. These will be noted in the user story document as well.

## Prototyping

When working on the first increment of a project, there will be no visual
foundation that can be built on in the execution stage yet. In order to develop
that, we create a high-fidelity prototype of one of the user stories to develop
a mutual understanding among all project stakeholders for the visual identity of
the application. For subsequent increments of a project the prototyping stage
will not be necessary and we'll go straight to the execution stage building on
the [visual design system](../execution/design/#design-systems) established
during previous increments.

The visual identity of a project will be based on the client's branding and
visual guidelines. We will go through these materials with the client, validate
their suitability for the application we are building and if necessary adapt
them working closely with the responsible stakeholders. If the client has no
such materials, we will identify a visual identity for the project from scratch,
applying techniques like moodboards and stylescapes.

While the prototype will be a high-fidelity mockup of a particular user story,
we deliberately keep it non-interactive and relatively low effort as its main
purpose is to define a visual identity for the project and not to specify
individual details of the respective user story or general application. Instead
of trying to achieve these goals with a prototype that can not precisely
resemble the eventual application anyway, we aim for transitioning to the
execution phase as quick as possible with the goal of providing an initial
version of the actual application as soon as possible. Iterating based on the
actual application as opposed to a prototype that would still have to be
converted into a real application anyway results in hugely improved
effectiveness of the overall process.
