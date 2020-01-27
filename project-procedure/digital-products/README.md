# Digital Product Projects

Developing Digital Products can be broken down into four main stages:

- product strategy: identifying and understanding the goal of the project and
  the environment it operates in
- product design: conceptualising a product that pursues the project's objective
- product development: implementing the product and launching it
- validating the product indeed achieves the objective

These stages will usually be passed through several times, incrementally
building up the product. We refer to the deliverable of each pass through of all
the stages as an _"increment"_ of the product. For the first increment, we
recommend building only the minimal set of functionality necessary to deliver
value (the
[_"Minimum viable product"_](https://en.wikipedia.org/wiki/Minimum_viable_product)).
Each subsequent increment adds a coherent set of functionality to the product
that extends it in a way that is meaningful to its users.

## Setup

Before starting with the actual work though, the project infrastructure needs to
be set up, as effective tooling is vital for effective collaboration among the
stakeholders. The main tasks are:

- deciding and setting up a source control system for maintaining the project's
  source code; this would usually be a git-based system
- deciding and setting up a system for maintaining and collaborating on design
  assets; we recommend using a system that allows maintaining assets like source
  code with branching, pull request and review mechanisms
- deciding and setting up a system for maintaining and collaborating on
  documents (e.g. user stories, etc.); this system should support versioning and
  commenting for effective collaboration
- setting up a shared communication channel that fosters traceable group
  communication; while the particular tool of choice is not relevant, we advice
  against relying on email
- ensuring all project stakeholders have access to all of these tools and will
  receive notifications when assigned tasks or mentioned by others

## Product Strategy

In order to build an application that effectively achieves a particular
objective, one must first understand the subject matter and then clearly define
the current state of the situation. Next the desired objective must be
established in order to develop an effective strategy for all subsequently taken
actions. All project stakeholders need to work closely together during this
stage to identify answers to these questions:

- what exactly is it that is currently lacking or requires improvement? (e.g.
  customers having to call the client to configure the client's product
  specifically to their needs)
- who is going to use the product that is being built? (e.g. the project teams's
  own organization or its customers)
- what should be the effect on the business once the solution is in place? (e.g.
  increased sales, reduced workload for the sales team etc.)

The goal of the product strategy stage is finding answers to these questions
that are based on facts and knowledge rather than assumptions. The techniques
for acquiring said facts will vary with each new project and depend on the
particular problem, the respective industry and the time or budget constraints.
We recommend using one or several of these techniques:

- data analysis of existing data e.g. from CRM systems, event logs or analytics
  data from existing web applications; utilising these data sources often helps
  to create a better understanding of the current situation and sometimes
  reveals that the actual problem is different to what it seems; if none of this
  data is available, think about whether it is possible to collect it
- user research: getting direct feedback from users of an existing product that
  is to be replaced or potential users of an entirely new product is the best
  way to understand their situations, goals and struggles
- market analysis: besides understanding the future users of a digital product,
  it is key to understand the market the product will operate in, its rules and
  limitations, what competitors with similar products are offering and what the
  relevant trends are

Based on the gathered facts, the project team will be able to define a
high-level objective for the project (e.g. a web application that allows
customers to configure the client's product according to their needs and order
that configuration via the client's website). That information should be written
down in a short (aiming for about one page) mission statement document to
clearly express the project's scope and goals. We also recommend defining one or
more KPIs (e.g. _"number of sales via the website"_, _"number of support
requests from users"_) to quantify the situation before and after the project
for easier [evaluation in later stages](#evaluation). If no data is available
for these KPIs, it might be necessary to set up additional tracking or conduct
research.

In addition to the mission statement, the team also needs to identify potential
future users, along with their prior knowledge, skills, needs, and motivations
with regard to the application. We recommend defining one or multiple personas
(typical representatives of the future user base) based on all acquired facts in
order to visualise the user base. A good understanding of a product's personas
is a key prerequisite for developing an application that effectively caters to
the specific needs of its future users.

The product strategy stage will typically be conducted as one or several
workshops in which the project team has a facilitated discussion based on
patterns and insights uncovered during research. It is critical to get all
project stakeholders involved in this workshop, in particular all of the
business experts from various backgrounds like marketing, sales, customer
service etc. All of these groups will have unique insights and experiences that
must all be heard in order to clearly understand the situation and define the
project's objective.

## Product Design

Once the strategy for the product has been established and is well understood
and agreed upon by all stakeholders, the next step is identifying the set of
functionality to be added in the current increment of the product. If the
product is going to replace an existing system, the functionality provided by
that system can be used as a reference. In the first increment, we recommend
starting with the minimal possible version of the product, addressing the most
basic needs of the project's personas (e.g. building the bare product
configurator but no payment mechanism or order management system yet).
Subsequent increments will extend and optimize what was built in previous
increments (e.g. adding a checkout flow with payment, adding an order management
system for the client's sales personnel etc.).

While applying a systematic approach for developing a coherent understanding of
what will be built, we recommend keeping the product design stage limited and
not do excessively detailed up-front design and specification. Detailed
wireframes tend to give a false impression of a finished product even though it
is basically impossible to cover every possible aspect and prevent new
challenges for particular features from being uncovered in the development
stage. Also, static wireframes or even interactive prototypes will never give as
realistic an impression for the final solution as one will get from an actual
application even if it starts out with very limited functionality initially and
is only built up incrementally over time. Therefore we recommend aiming for a
quick transition to the development stage, using the real application to collect
feedback and verify assumptions as early as possible.

### User Stories Workshop

In the User Stories Workshop, the project team defines concrete concepts for
individual, self-contained features of the application. The goal is to develop
an understanding of the structure of the features's content and functionality,
the UI elements the users interact with and the transitions between individual
states in the feature's flow. The goal is not to specify every detail of all
features, but instead keep them deliberately rough while concrete enough to
functionally define the respective feature completely.

This workshop requires input from all project stakeholders:

- the business experts have unique expertise and understand best what goal a
  particular user story enables the user to achieve
- designers have the expertise to understand which interaction design lets the
  user achieve the above goal in the most efficient way
- engineers can assess different alternatives for implementing a user story for
  their technical feasibility and associated effort

Each self-contained feature of the application is represented by a user story.
User stories enable one or more personas (as identified during the
[product strategy stage](#product-strategy)) to perform a particular task in
order to achieve a particular goal.

For each user story, identify:

- the navigational structure: screens or pages, dialogues, menus etc.
- interactive elements: buttons, inputs etc. that the user needs to trigger
  actions and events in the flow
- flows: transitions between sections of the navigational structure that are
  triggered by interactive elements

User Stories are visualized using coarse diagrams (e.g. hand-drawn marker
sketches) including all of these identified pieces and the relationships between
them. During the workshop participants will discuss and reconstruct these
diagrams several times until an ideal solution emerges. That final solution is
then written down in a user story document consisting of:

- a textual description of the user story, the need that it addresses and the
  solution that it provides
- the persona(s) that the user story caters to
- a low-fidelity diagram showing steps in the user story, the involved UI
  elements and transitions between steps

Once a user story has been clearly defined, revisit it and look for
non-essential aspects that are not strictly necessary in order for the user
story to provide value as well as edge cases that might not immediately be
apparent. These will be noted in the user story document as well.

### Visual Identity

When working on the first increment of an application, there exists no visual
foundation that can be built on top of in the product development stage yet. In
order to develop that, we recommend creating wireframes for one of the user
stories to develop a mutual understanding among all project stakeholders for the
visual identity of the application. For subsequent increments, this stage will
not be necessary and the team can go straight to the product development stage
building on the
[visual design system](../../development-process/#design-systems) established
during previous increments.

The visual identity of a project will be based on existing branding material and
visual guidelines. If no such materials exist, the visual identity for the
project needs to be defined from scratch, applying techniques like moodboards
and stylescapes.

While the wireframe will be a high-fidelity mockup of a particular user story,
we recommend keeping it non-interactive and relatively low effort as its main
purpose is to define a visual identity for the project and not to specify
individual details of the respective user story or the application in general.
Instead of trying to achieve these goals with a prototype that can not precisely
resemble the eventual application anyway, aim for providing an initial version
of the actual application as soon as possible and use that as the basis for all
subsequent discussions. Iterating based on the actual application as opposed to
a prototype that would still have to be converted into a real application anyway
results in widely improved effectiveness of the overall process.

### Increment Planning

Once the user stories are defined in the product design stage, define a plan for
the current increment of the application. For each user story that is part of an
increment, list which of the non-essential aspects and edge cases will be
included in the increment (e.g. configuring products of the most successful
category), which ones will not (e.g. configuring products with little sales
volume) and which ones will be moved to a later increment in case the team is
running out of time or budget (e.g. allowing customers to see the status of past
orders). Excluded aspects and edge cases will be addressed in later increments
of the project.

Software projects are highly dynamic. The bigger the scope and the complexity of
a project, the likelier it is to steer off track, resulting in delays and budget
overruns. By limiting the scope per increment and introducing escape hatches,
complexity and thus risk are minimized while allowing the team to make a
decision between implementing essential versions of more user stories versus
covering more non-essential aspects and edge cases for fewer user stories.

Once all stakeholders agree on the plan for the current increment of the
application, the list of user stories together with included as well as excluded
aspects and according edge cases are written down in an increment plan, which is
used to calculate a rough estimate of the timeline. That plan is not irrevocable
and neither is the estimate more than an assessment based on the information
available at the time. Previously unknown challenges will likely be uncovered
during product development and some details and implications will only be
understood once work on a particular user story has actually begun. Teams should
in fact constantly question assumptions and priorities and change the plan at
any time they see necessary. It is also possible at any time to go back and
re-plan an increment, adding a different set of user stories, include or exclude
different aspects of them or even start over with the product strategy or the
product design if new business objectives are identified. The goal of the
increment planning is to get a common understanding of what value will be
delivered during the increment and how long that should roughly take (or what
the maximum available time and budget is) but not lock the team into a binding
specification and schedule that might have a short validity anyway.

## Product Development

In the product development stage of an increment user stories are turned into
usable features of the product, iteratively building it up over time. Each user
story should be broken down into fine-grained and more detailed issues and then
proceed to be implemented by following a smooth
[development process](../development-process/). During this process, engineers
and designers continue to work closely with the business experts, discussing
individual facets of user stories as well as different alternatives for
designing and implementing those along with the associated effort.

The project team will build slices of the system at once, including everything
from the design, the backend, and the frontend code of a particular user story
so those slices can be released as functional units that can be interacted with
by all project stakeholders. Once a slice is finished, it will be released to a
staging system that is available for all project stakeholders. All stakeholders
should be encouraged to make active use of the staging system to follow the
project's progress and validate that the product is being built according to
their expectations. Feedback given by stakeholders will be collected by the
project team and addressed in issues in subsequent iterations of the product
development stage or moved into a later increment of the project depending on
the respective finding's priority.

Once a complete increment of the application is finished, the respective state
of the product will be released - ideally into a production environment - so
real users can access the system and deliver first hand feedback.

### Growing a Foundation

As more user stories are being completed and the product evolves, foundational
elements that will later be reused in other, similar contexts will be
identified - both in the application's codebase as well as in the visual design
system. That way, each increment of the application results in its foundation
becoming broader, stronger and more refined, resulting in increased
effectiveness over time, decreasing effort per user story and increasing
planning reliability.

## Evaluation

Every increment of the application that is completed and released should be
evaluated on whether the assumptions made in the product strategy and product
design stages proved themselves to be true and whether the project's objective
has been achieved as intended. Ideally that evaluation can be conducted based on
interaction of real users with the application, either based on data captured by
an analytics system or ideally by receiving feedback from users directly.
Metrics should be collected for the KPIs defined in the
[product strategy stage](#product-strategy). By analyzing those metrics, the
actual feedback can now be compared with the initial expectations.

## Iteration

Once an increment of the product is completed, the project team will go on to
build the next increment as long as there is functionality to add and aspects of
the product to improve. Depending on the learnings from the previous increment,
it might be necessary to go through the
[product strategy stage](#product-strategy) again, reconsider some of the
assumptions and adapt the project's objective. If this is found not to be
necessary, the product design stage can be entered directly to conceptualise,
scope and implement the next set of user stories, followed by executing that new
plan, evaluating what was built, etc.
