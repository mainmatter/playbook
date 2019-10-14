# Full Service Project Flow

In full service projects, we solve our clients' business needs with bespoke
software applications. In order to do that in the most efficient way, we break
the process down into 4 stages that we guide our clients through:

- identifying and understanding the goal of the project
- conceptualising an application that pursues that objective
- implementing that application and launching it
- validating the application indeed achieves the objective

These stages will usually be passed through several times, incrementally
building up the application. We refer to the deliverable of each pass through
the stages as an _"increment"_ of the application. For the first increment, we
build the minimal set of functionality only, extending and improving that in
subsequent increments.

For clients that have gone through any of these stages themselves or together
with a third party, we can jump to the subsequent stage directly, building on
the material they have already (we recommend we evaluate that material first
though).

Once a project is complete, we can maintain the resulting application for the
long term or, depending on the client's expertise and capabilities, hand it over
to an internal team in the client's organization. Either way, we can always come
back later, define additional increments for the product and release those.

## Discovery

In order to build an application that effectively achieves a particular
objective for a client, we need first of all to understand what exactly that
objective is. We will work closely with the client in a workshop to identify
answers to these questions:

- what specifically is it that is currently lacking or that we are aiming to
  improve (e.g. customers having to call the client in order to configure the
  client's product specifically to their needs)?
- who is going to use the application we are building? (e.g. the client
  themselves or their customers)
- what should be the effect on the business once the solution is in place (e.g.
  increased sales via the client's website; reduced workload for the client's
  sales team)

Together with the client we will identify the most suitable kind of solution to
achieve the project's objective (e.g. a web-based product configurator that
allows customers to configure the client's product according to their needs and
order that configuration via the client's website). That information will be
written down in a short (aiming for ca. 1 page) mission statement document to
clearly express the project's scope and goals. We also recommend defining one or
more KPIs (e.g. _"number of sales via the website"_, _"number of support
requests from users"_) to capture the situation before and after the project for
easier [evaluation in later stages](#evaluation). If no data is available for
these KPIs, it might be necessary to set up additional tracking or conduct
research.

In addition to the mission statement, we will also define the future users of
the solution that is to be built, along with their prior knowledge, skills,
needs, and motivations with regard to the application. We will identify one or
more typical users representative of the expected userbase, the personas, and
describe them in a personas document. A good understanding of an application's
personas is a key prerequisite for developing an application that effectively
caters to the specific needs of its future users.

It is critical to get all project stakeholders involved in this workshop, in
particular all of the client's business experts from various backgrounds like
marketing, sales, customer service etc. All of these groups will have unique
insights and experiences that must all be heard in order to clearly understand
the situation and define the project's objective. It is often advisable to
conclude additional research to make more data available for the workshop. That
can be done by analyzing data that the client already has like analytics data
from an existing application, data from a CRM or customer service system and
also through interviews with existing or prospective users or customers or
analyzing publicly available datasets.

## Conception

Once the objective of the project has been identified and is well understood by
all stakeholders, we will identify the set of functionality to be added in the
current increment of the application. If the application is going to replace an
existing system, the functionality provided by that system can be used as a
reference. In the first increment, we will start with the minimal possible
version of the application, addressing the most basic needs of the project's
personas (e.g. building the bare product configurator but no payment mechanism
or order management system yet). Subsequent increments will extend and optimize
what was built in previous increments (e.g. adding a checkout flow with payment,
adding an order management system for the client's sales personnel etc.).

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

### User Stories Workshop

In the User Stories workshop, we will define concrete concepts for individual,
self-contained features of the application. The goal is to develop an
understanding of the structure of the features's content and functionality, the
UI elements the users interact with and the transitions between individual
states in the feature's flow. Our aim is not to specify every detail of all
features, but keep them deliberately rough while concrete enough to functionally
define the respective feature completely.

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
particular task in order to achieve a particular goal.

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

### Visual Identity

When working on the first increment of an application, there will be no visual
foundation that can be built on in the execution stage yet. In order to develop
that, we create wireframes for one of the user stories to develop a mutual
understanding among all project stakeholders for the visual identity of the
application. For subsequent increments, this stage will not be necessary and
we'll go straight to the execution stage building on the
[visual design system](../../workflow/design/#design-systems) established during
previous increments.

The visual identity of a project will be based on the client's branding and
visual guidelines. We will go through these materials with the client, validate
their suitability for the application we are building and if necessary adapt
them working closely with the responsible stakeholders. If the client has no
such materials, we will identify a visual identity for the project from scratch,
applying techniques like moodboards and stylescapes.

While the wireframes will be a high-fidelity mockup of a particular user story,
we deliberately keep it non-interactive and relatively low effort as its main
purpose is to define a visual identity for the project and not to specify
individual details of the respective user story or general application. Instead
of trying to achieve these goals with a prototype that can not precisely
resemble the eventual application anyway, we aim for providing an initial
version of the actual application as soon as possible. Iterating based on the
actual application as opposed to a prototype that would still have to be
converted into a real application anyway results in hugely improved
effectiveness of the overall process.

### Planning

Once we defined the user stories in the conception stage, we define a plan for
the current increment of the application. For each user story that we are aiming
to implement, we will list which of the non-essential aspects and edge cases
will be included in the increment (e.g. configuring products of the most
successful category), which ones will not (e.g. configuring products with little
sales volume) and which ones will be moved to a later increment if we are
running out of time (e.g. allowing customers to see the status of past orders).
Excluded aspects and edge cases will be addressed in later increments of the
project.

Software projects are highly dynamic and the bigger the scope of a project, the
easier it can get off course, resulting in delays and budget overruns. By
limiting the scope per increment and introducing escape hatches we minimize
complexity and thus risk while allowing clients to make a decision between
implementing essential versions of more user stories versus covering more
non-essential aspects and edge cases for fewer user stories.

Once all stakeholders agree on the plan for the current increment of the
application, we write down the list of user stories and included as well as
excluded aspects and edge cases in an increment plan and estimate a rough
timeline. That plan is not irrevocable and neither is the estimate more than an
assessment based on the information available at the time. Previously unknown
challenges will likely be uncovered during execution and some details and
implications will only be understood once work on a particular user story has
actually begun. We encourage clients to constantly question assumptions and
priorities and ask for a change of plan anytime they feel suitable. It is
possible at any time to go back to the planning stage for an increment and plan
different user stories, include or exclude different aspects of them or even
start over with discovery or conception if new business objectives are
identified.

## Execution

In the execution phase of an increment, we turn user stories into usable
features of the application, iteratively building it up over time. We will break
down the user stories into fine-grained issues and assign those to iterations
following our [process](../process/). As we do that, our engineers and designers
continue to work closely with clients. We will discuss individual facets of user
stories as well as different alternatives for designing and implementing those
along with the associated effort, involving the client in all decisions that are
made along the way.

We build slices of the system at once, including everything from the design,
backend, and frontend code of a particular user story so we can release them as
functional units that can be interacted with by the client. Once a slice is
finished, it will be released to a staging system that is available for all
project stakeholders. We will ask the stakeholders to make use of the staging
system to follow the project's progress and validate the application is built
according to their expectations. Feedback given by stakeholders will be
collected by the project team and addressed in issues in subsequent iterations
of the execution stage or moved into a later increment of the project depending
on the finding's priority.

As we complete more user stories and the application evolves, we identify and
define foundational elements that will later be reused in other, similar
contexts - both in the application's codebase as well as in the visual design
system. That way, each increment of the application results in its foundation
becoming broader and stronger, resulting in increased effectiveness over time,
decreasing effort per user story and increasing planning reliability.

### Release & Operation

Once an increment of the application is complete, we release what we built -
ideally into a production environment so real users can access the system and
first hand feedback can be collected. We will set up the server infrastructure
and deployment process as well as take over any ongoing operations tasks (unless
the client prefers to handle that themselves).

## Evaluation

Every increment of the application that is completed and released should be
evaluated for whether the assumptions made in the discovery and conception
stages prove true in reality and the application achieves the project's
objective as intended. Ideally that evaluation can be conducted based on
interaction of real users with the application, either based on data captured by
an analytics system or ideally by getting feedback from users directly. We will
also collect metrics for the KPIs defined in the [Discovery stage](#discovery)
and verify those improved as planned.

## Iteration

Once we complete an increment of the application, we will go on to build the
next increment as long as there is functionality to add and aspects of the
application to improve. Depending on the learnings from the previous increment,
it might be necessary to go through the [Discovery stage](#discovery) again,
reconsider some of the assumptions and adapt the project's objective. If that is
not necessary, we can go to the conception stage directly and conceptualise,
scope and implement the next set of user stories, followed by executing that new
plan, evaluating what was built, etc.
