# Full Service Project Flow

Developing Digital Products is a process that can be broken down into four main
stages:

- identifying and understanding the goal of the project
- conceptualising a product that pursues that objective
- implementing that product and launching it
- validating the product indeed achieves the objective

These stages will usually be passed through several times, incrementally
building up the product. We refer to the deliverable of each pass through the
stages as an _"increment"_ of the product. For the first increment, we recommend
building only the minimal set of functionality necessary to deliver value (the
[_"Minimum viable product"_](https://en.wikipedia.org/wiki/Minimum_viable_product)).
Each subsequent increment adds a coherent set of functionality to the product
that extends it in a way that is meaningful to its users.

## Discovery

In order to build an application that effectively achieves a particular
objective, one first needs to understand and clearly define what exactly that
objective is. All project stakeholders need to work closely together in a
workshop to identify answers to these questions:

- what exactly is it that is currently lacking or that is aimed at to improve
  (e.g. customers having to call the client to configure the client's product
  specifically to their needs)?
- who is going to use the product that is being built? (e.g. the project teams's
  own organization or its customers)
- what should be the effect on the business once the solution is in place (e.g.
  increased sales, reduced workload for the sales team etc.)

The goal of the discovery phase is for the project team to identify the most
suitable kind of solution to achieve the project's objective (e.g. a web
application that allows customers to configure the client's product according to
their needs and order that configuration via the client's website). That
information should be written down in a short (aiming for ca. 1 page) mission
statement document to clearly express the project's scope and goals. We also
recommend defining one or more KPIs (e.g. _"number of sales via the website"_,
_"number of support requests from users"_) to capture the situation before and
after the project for easier [evaluation in later stages](#evaluation). If no
data is available for these KPIs, it might be necessary to set up additional
tracking or conduct research.

In addition to the mission statement, the team also needs to identify the future
users of the product that is to be built, along with their prior knowledge,
skills, needs, and motivations with regard to the application. We recommend
defining one or more typical users representative of the expected userbase, the
personas, and describe them in personas documents. A good understanding of a
product's personas is a key prerequisite for developing an application that
effectively caters to the specific needs of its future users.

It is critical to get all project stakeholders involved in this workshop, in
particular all of the business experts from various backgrounds like marketing,
sales, customer service etc. All of these groups will have unique insights and
experiences that must all be heard in order to clearly understand the situation
and define the project's objective. It is often advisable to conclude additional
research to make more data available for the workshop. That can be done by
analyzing data that is already available like analytics data from an existing
application, data from a CRM or customer service system and also through
interviews with existing or prospective users or customers or analyzing publicly
available datasets.

## Conception

Once the objective of the project has been identified and is well understood by
all stakeholders, the next step is to identify the set of functionality to be
added in the current increment of the product. If the product is going to
replace an existing system, the functionality provided by that system can be
used as a reference. In the first increment, we recommend starting with the
minimal possible version of the product, addressing the most basic needs of the
project's personas (e.g. building the bare product configurator but no payment
mechanism or order management system yet). Subsequent increments will extend and
optimize what was built in previous increments (e.g. adding a checkout flow with
payment, adding an order management system for the client's sales personnel
etc.).

While applying a systematic approach for developing a good understanding of what
will be built, we recommend keeping the conception phase limited and not do
excessively detailed up-front design and specification. Detailed wireframes tend
to give a false impression of completeness while it is essentially impossible to
cover every possible aspect and prevent new challenges and edge cases for
particular features from being uncovered in the development stage. Also, static
wireframes or even interactive prototypes will never give as realistic an
impression for the final solution as one will get from an actual application,
even if that starts out with limited functionality initially and is only built
up incrementally over time. Therefore, we recommend aiming for a quick
transition to the development stage, using the real application to collect
feedback and verify assumptions as early as possible.

### User Stories Workshop

In the User Stories workshop, the project team defines concrete concepts for
individual, self-contained features of the application. The goal is to develop
an understanding of the structure of the features's content and functionality,
the UI elements the users interact with and the transitions between individual
states in the feature's flow. The goal is not to specify every detail of all
features, but keep them deliberately rough while concrete enough to functionally
define the respective feature completely.

This workshop requires input from all project stakeholders:

- the business experts have unique expertise and understand best what goal a
  particular user story enables the user to achieve
- designers have the expertise to understand what interaction design lets the
  user achieve the above goal in the most efficient way
- engineers can assess different alternatives for implementing a user story for
  their technical feasibility and associated effort

Each self-contained feature of the application is represented by a user story.
User stories enable one or more personas (as identified during the project's
[discovery stage](../../project-flow/full-service/#discovery)) to perform a
particular task in order to achieve a particular goal.

For each user story, identify:

- the navigational structure: screens or pages, dialogs, menus etc.
- interactive elements: buttons, inputs etc. that the user needs to trigger
  actions and events in the flow
- flows: transitions between portions of the navigational structure that are
  triggered by interactive elements

User Stories are visualized using coarse diagrams (e.g. hand-drawn marker
sketches) including all of these identified pieces and the relationships between
them. During the workshop, participants will discuss and redraw these diagrams
several times until an ideal solution emerges. That final solution is then
written down in a user story document consisting of:

- a textual description of the user story, the need that it addresses and the
  solution that it provides
- the persona(s) that the user story caters to
- a low-fidelity diagram showing steps in the user story, the involved UI
  elements and transitions between steps

Once the user story has been clearly defined, revisit it and look for
non-essential aspects that are not strictly necessary in order for the user
story to provide value as well as edge cases that might not immediately be
apparent. These will be noted in the user story document as well.

### Visual Identity

When working on the first increment of an application, there will be no visual
foundation that can be built on in the execution stage yet. In order to develop
that, we recommend creating wireframes for one of the user stories to develop a
mutual understanding among all project stakeholders for the visual identity of
the application. For subsequent increments, this stage will not be necessary and
the team can go straight to the execution stage building on the
[visual design system](../../workflow/design/#design-systems) established during
previous increments.

The visual identity of a project will be based on existing branding material and
visual guidelines. If no such materials exist, the visual identity for the
project needs to be defined from scratch, applying techniques like moodboards
and stylescapes.

While the wireframes will be a high-fidelity mockup of a particular user story,
we recommend keeping them non-interactive and relatively low effort as their
main purpose is to define a visual identity for the project and not to specify
individual details of the respective user story or general application. Instead
of trying to achieve these goals with a prototype that can not precisely
resemble the eventual application anyway, aim for providing an initial version
of the actual application as soon as possible and use that as the basis for all
subsequent discussions. Iterating based on the actual application as opposed to
a prototype that would still have to be converted into a real application anyway
results in hugely improves effectiveness of the overall process.

### Planning

Once the user stories are defined in the conception stage, define a plan for the
current increment of the application. For each user story that is part of an
increment, list which of the non-essential aspects and edge cases will be
included in the increment (e.g. configuring products of the most successful
category), which ones will not (e.g. configuring products with little sales
volume) and which ones will be moved to a later increment in case the team is
running out of time or budget (e.g. allowing customers to see the status of past
orders). Excluded aspects and edge cases will be addressed in later increments
of the project.

Software projects are highly dynamic and the bigger the scope of a project, the
easier it can get off course, resulting in delays and budget overruns. By
limiting the scope per increment and introducing escape hatches, complexity and
thus risk are minimized while allowing the team to make a decision between
implementing essential versions of more user stories versus covering more
non-essential aspects and edge cases for fewer user stories.

Once all stakeholders agree on the plan for the current increment of the
application, the list of user stories and included as well as excluded aspects
and edge cases are written down in an increment plan and a rough timeline is
estimated. That plan is not irrevocable and neither is the estimate more than an
assessment based on the information available at the time. Previously unknown
challenges will likely be uncovered during execution and some details and
implications will only be understood once work on a particular user story has
actually begun. Teams should in fact constantly question assumptions and
priorities and change the plan at any time they see necessary. It is also
possible at any time to go back to the planning stage for an increment and plan
different user stories, include or exclude different aspects of them or even
start over with discovery or conception if new business objectives are
identified. The goal of the planning phase is to get a common understanding of
what value will be delivered during the increment and how long that should
roughly take (or what the maximum available time and budget is) but not lock the
team in to a binding specification and schedule that might have a short validity
anyway.

## Execution

In the execution phase of an increment, user stories are turned into usable
features of the product, iteratively building it up over time. Each user story
should be broken down into fine-grained and more detailed issues and worked on
following a smooth [process](../process/). As that is done, engineers and
designers continue to work closely with the business experts, discussing
individual facets of user stories as well as different alternatives for
designing and implementing those along with the associated effort.

The project team will build slices of the system at once, including everything
from the design, backend, and frontend code of a particular user story so those
slice can be released as functional units that can be interacted with by all
project stakeholders. Once a slice is finished, it will be released to a preview
system that is available for all project stakeholders. All stakeholders should
be encourage to make active use of the staging system to follow the project's
progress and validate the product is being built according to their
expectations. Feedback given by stakeholders will be collected by the project
team and addressed in issues in subsequent iterations of the execution stage or
moved into a later increment of the project depending on the finding's priority.

Once a complete increment of the application is finished, the respective state
of the product will be released - ideally into a production environment so real
users can access the system and first hand feedback can be collected.

### Growing a Foundation

As complete more user stories are being completed and the product evolves,
foundational elements that will later be reused in other, similar contexts will
be identified - both in the application's codebase as well as in the visual
design system. That way, each increment of the application results in its
foundation becoming broader and stronger, resulting in increased effectiveness
over time, decreasing effort per user story and increasing planning reliability.

## Evaluation

Every increment of the application that is completed and released should be
evaluated for whether the assumptions made in the discovery and conception
stages prove true in reality and the application achieves the project's
objective as intended. Ideally that evaluation can be conducted based on
interaction of real users with the application, either based on data captured by
an analytics system or ideally by getting feedback from users directly. Metrics
should be collected for the KPIs defined in the [Discovery stage](#discovery)
and they should be leveraged to verify the estimated effects on the business
occur as planned.

## Iteration

Once an increment of the product is completed, the project team will go on to
build the next increment as long as there is functionality to add and aspects of
the product to improve. Depending on the learnings from the previous increment,
it might be necessary to go through the [Discovery stage](#discovery) again,
reconsider some of the assumptions and adapt the project's objective. If that is
found not to be necessary, the conception stage can be entered directly to
conceptualise, scope and implement the next set of user stories, followed by
executing that new plan, evaluating what was built, etc.
