# Digital Product Projects

Digital Product development is a complex procedure. Besides purely technical
aspects, transforming a potentially vague idea into a product that users can and
will use or solving a business problem through software also requires to take
several other aspects into account. In order to achieve an ideal result that
best pursues a project's goals, various groups with different backgrounds and
motivations need to collaborate closely. A clearly prescribed sequence of steps
and actions to take in a particular order helps making this process as effective
as possible while involving all stakeholders and their individual expertise.

Digital product projects can be broken down into four main stages:

<!-- prettier-ignore -->
1. **Product Strategy**
  identifying and understanding the goal of the project and
  the environment it operates in
2. **Product Design**
  conceptualizing a product that pursues the project's objective
3. **Product Development**
  implementing the product and launching it
4. **Evaluation**
  validating whether the product indeed achieves the objective

Building the entire product as one pass through all of these stages maximizes
scope and thus risk. Instead, we recommend splitting up the project into smaller
units and passing through the stages several times, once for each unit,
incrementally building up the product. We refer to the deliverable of each pass
through of all the stages as an _"increment"_ of the product. For the first
increment, we recommend building only the minimal set of functionality necessary
to deliver value (the
[_"Minimum viable product"_](https://en.wikipedia.org/wiki/Minimum_viable_product)
or MVP). Each subsequent increment adds a coherent set of functionality to the
product that extends it in a way that is meaningful to its users.

![MVP and increments](../../../assets/mvp-and-increments.svg "Breaking down a project into an MVP and subsequent increments helps reduce scope and complexity and develop the product in small and coherent steps")

Software projects are highly dynamic. The bigger the scope and the complexity of
a project, the likelier it is to steer off track, resulting in delays and budget
overruns. By limiting the scope per increment, complexity and thus risk are
minimized and also usable versions of the product that provide value to users
are available earlier in the process. These early versions of the product can
already be shared with users and be used to acquire valuable feedback which
might even result in a shift of focus or project direction.

Before work on the first increment of a product can be started, the project must
be kicked off and the infrastructure needs to be set up. These steps only happen
once and are not part of later iterations through the four main stages.

## Kick-Off Meeting

Every project should start with a kick-off meeting assembling all project
stakeholders - ideally in person, otherwise in a video call. The main goal of
this meeting is for everybody involved to get to know each other and to acquire
an understanding of everyone else's roles, responsibilities and goals. The group
of project stakeholders should be kept as wide and open as possible and include
everyone who has any interest or relation to the project, even people that might
not necessarily be involved in the project on a daily basis but still have
relevant perspectives that the project team should be aware of.

## Setup

After kicking off the project, the infrastructure that is going to support the
team needs to be set up, as effective tooling is vital for effective
collaboration among the stakeholders. Ensure tooling is cloud-based and
therefore persistent and traceable. The main tasks are:

- Deciding and setting up a source control system for maintaining the project's
  source code; this would usually be a git-based system
- Deciding and setting up a system for maintaining and collaborating on design
  source files; we recommend using software that allows for component-based
  design, and a system that allows maintaining assets like source code with
  branching, pull request and review mechanisms
- Deciding and setting up a system for maintaining and collaborating on
  documents (e.g. feature concepts, etc.); this system should support versioning
  and commenting for effective collaboration
- Setting up a shared communication channel that fosters traceable group
  communication; while the particular tool of choice is not relevant, we advice
  against relying on email and for using a realtime system instead
- Ensuring all project stakeholders have access to all of these tools and will
  receive notifications when they are assigned tasks or are mentioned by others

Effective tooling and usage of it is critical for all teams, on-site or remote.
All relevant information, decisions and decision making processes must at all
times be accessible and transparent to all stakeholders for effective
collaboration.

Once the project has been kicked-off and infrastructure is set up, the team can
commence passing through the main stages starting with product strategy.

## Product Strategy

In order to build an application that effectively achieves a particular
objective, one must first understand the subject matter and then clearly define
the current state of the situation. Next the desired objective must be
established in order to develop an effective strategy for all subsequently taken
actions. All project stakeholders need to work closely together during this
stage to identify answers to these questions:

- What exactly is it that is currently lacking or requires improvement (an
  example could be customers having to call a company's sales representative to
  configure a product specifically to their needs) and how does that manifest in
  the business? (e.g. lost sales)
- Who is affected by the present problem and who is going to use the product
  that is being built? (e.g. the project teams's own organization or its
  customers)
- What should be the effect on the business once the solution is in place? (e.g.
  increased sales, reduced workload for the sales team etc.)

The goal of the product strategy stage is finding answers to these questions
that are based on facts and knowledge rather than assumptions. The techniques
for acquiring said facts will vary with each new project and depend on the
particular problem, the respective industry and the time or budget constraints.
We recommend using one or several of the following techniques:

- Data analysis of existing data e.g. from CRM systems, event logs or analytics
  data from existing web applications; utilizing these data sources often helps
  to create a better understanding of the current situation and sometimes
  reveals that the actual problem is different to what it seems; if none of this
  data is available, think about whether it is possible to start collecting it
  in potentially already existing systems
- User research: getting direct feedback from users of an existing product that
  is to be replaced or potential users of an entirely new product is the best
  way to understand their backgrounds, motivations and challenges
- Market analysis: besides understanding the future users of a digital product,
  it is key to understand the market the product will operate in, its rules and
  limitations, what competitors with similar products are offering and what the
  relevant trends are

The product strategy stage will typically be conducted as one or several
workshops in which the project team has a facilitated discussion based on
patterns and insights uncovered through the research. It is critical to get all
project stakeholders involved in these workshops, in particular all of the
business experts from various backgrounds like marketing, sales, customer
service etc. All of these groups will have unique insights and experiences that
must all be heard in order to clearly understand the situation and define the
project's objective.

### Mission Statement and KPIs

Based on the gathered facts, the project team will be able to define a
high-level objective for the project (e.g. a web application that allows
customers to configure the company's products according to their needs and order
that configuration via the company's website). That information should be
written down in a short (aiming for about one page) mission statement document
to clearly express the project's scope and goals. We also recommend defining one
or more Key Performance Indicators (KPIs) (e.g. _"number of sales via the
website"_, _"number of support requests from users"_) to quantify the situation
before and after the project for easier
[evaluation in later stages](#evaluation). If no data is available for these
KPIs, it might be necessary to set up additional tracking or conduct research.

### Personas

In addition to the mission statement, the project team also needs to identify
potential future users, along with their prior knowledge, skills, needs, and
motivations with regard to the application. We recommend defining one or
multiple [personas](https://www.nngroup.com/articles/persona/) (typical
representatives of the future user base) based on all acquired facts in order to
gain a good understanding of a product's users, which is a key prerequisite for
developing an application that effectively caters to their specific needs.
Personas can be a useful tool for aligning within in a team, and communicating
who those people are.

![Personas](../../../assets/personas.svg "Defining Personas helps develop a better understanding of who a product is built for")

In order to identify personas, all possible future users (as derived from the
acquired data and/or based on the business experts' experience) of the product
are listed. For each of those the following questions are answered:

- Why are they interested in the product and what problem are they trying to
  solve with it?
- What previous experience do they have in relation to the product?
- What will make the solution appealing and valuable for them?
- What makes them unique compared to the other personas?

These users are then grouped by related concepts and patterns that emerge from
the answers to these questions. Each of the resulting clusters constitutes a
persona that is given a name so it can be easily referred to and described with
its main characteristics in a persona document (aiming for about one page per
persona).

Make each persona memorable, associating them with characteristics of a real
person such as an image, name, age, attributes, desires, and behaviors. It is
vital that personas are not defined once and then forgotten, but rather that
they are brought to the table on a daily basis. Seeing a feature through the
eyes of a persona creates empathy for the customer segment that they represent,
ensuring that we meet their needs as much as possible. They become a valuable
tool when they are integrated into the everyday decision-making process (e.g.
when prioritizing features, planning feature concepts, and recruiting for
usability testing).

## Product Design

Once the strategy for the product has been established and is well understood
and agreed upon by all stakeholders, the next step is identifying the set of
functionality to be added in the respective increment of the product. If the
product is going to replace an existing system, the functionality provided by
that system can be used as a reference. In the first increment, we recommend
starting with the minimal possible version of the product, addressing the most
basic needs of the project's personas (e.g. building only a bare product
configurator but no payment mechanism or order management system yet).
Subsequent increments will extend and optimize what was built in previous
increments with coherent blocks of functionality (e.g. adding a checkout flow
with payment, adding an order management system for the company's sales
representatives etc.).

While applying a systematic approach for developing a coherent understanding of
what will be built, we recommend keeping the product design stage limited and
not do excessively detailed up-front design and specification. Detailed mockups
tend to give a false impression of a finished product even though it is
basically impossible to cover every possible aspect and prevent new challenges
for particular features from being uncovered in the development stage. Also,
static mockups will never give as realistic an impression for the final product
as one will get from an actual application even if it starts out with very
limited functionality initially and is only built up incrementally over time.
Therefore we recommend aiming for a quick transition to the development stage,
using the real application to collect feedback and validate assumptions as early
as possible.

### Feature Concepts Workshop

In the Feature Concepts Workshop, the project team defines concrete concepts for
individual, coherent features of the application. The goal is to develop an
understanding of the structure of each feature's core functionality, the UI
elements the users interact with and the transitions between individual states
in the flow.

This workshop requires input from all project stakeholders:

- The business experts have unique expertise and understand best what goal a
  particular feature enables the user to achieve
- Designers have the expertise to understand which interaction design lets the
  user achieve the above goal in the most efficient way
- Engineers can assess different alternatives for implementing a feature for
  their technical feasibility and associated effort

Features concepts capture features on a relatively high level of abstraction.
They focus on describing the functionality as such without going into details
that would prescribe a particular implementation or any concrete user interface.

For each feature, identify:

- The navigational structure: screens or pages, dialogues, menus etc.
- Interactive elements: buttons, inputs etc. that the user needs to trigger
  actions in the flow or needs to acquire information that is relevant to them
- Flows: transitions between sections of the navigational structure that are
  triggered by interactive elements

These conceptual descriptions of features are visualized using coarse diagrams
(e.g. hand-drawn marker sketches) including all of these identified pieces and
the relationships between them. During the workshop participants will discuss
and reconstruct these diagrams several times until an ideal solution emerges
that all stakeholders agree on. That final concept is then written down in a
feature concept document consisting of:

- A textual description of the feature, the need that it addresses and the
  solution that it provides
- The persona(s) that the feature (mainly) caters to
- The low-fidelity diagram showing steps in the feature, focusing on functional
  aspects and transitions between steps

![Feature concept](../../../assets/feature-concept.svg "Feature Concepts are described focussing on the flow and relevant interactive elements rather than concrete visuals")

Once a feature concept has been clearly described, revisit it and look for
non-essential aspects that are not strictly necessary in order for the feature
to provide value as well as edge cases that might not immediately be apparent.
These will be noted in the feature concept document as well and can be used as
escape hatches later on to limit the scope and effort for the feature as they
can potentially be left out in a first implementation.

### User Interface Design Foundation

The initial stage of user interface (UI) design entails establishing a visual
foundation that can be applied consistently to the product. Take some time
up-front to create brand guidelines (if none exist) and establish variables such
as typography, color, and spacing.

Next, create mid-fidelity wireframes of the first feature or coherent set of
features to convert the functionality to concrete UI elements, but without
potentially distracting stylistic details of high-fidelity designs. Once the
wireframes are agreed upon by all relevant stakeholders, mockups of the feature
can be created. Use the visual foundation developed previously as a base to
style the mockups, creating UI components with future reusability in mind. As
the design grows, reuse components as often as possible to ensure consistency
and efficiency in the project. Later design steps will likely be focused on
smaller sets of UI and build upon decisions and visual elements that were
introduced previously.

Establishing principles and guidelines on how to use components as well as the
creation of a UI component library create the basis of a
[design system](../../development-process/#design-systems).

It's helpful to accept a bit of uncertainty and iterate on the real product
rather than focus too much on high-effort prototypes. The goal is getting
something real in the hands of our users as fast as possible to validate our
ideas. Their insights informs the design, helping evolve it iteratively
according to their actual needs.

![Wireframe and Mockup](../../../assets/wireframe-and-mockup.svg "The first increment of a product will require creating wireframes and mockups for one of the features in order to agree on a layout and visual style for the product")

### Increment Planning

Once the features are described in the product design stage, define a plan for
the current increment of the application. For each feature that is part of an
increment, list which of the non-essential aspects and edge cases will be
included in the increment (e.g. configuring products of the most successful
category), which ones will not (e.g. configuring products with little sales
volume) and which ones will be moved to a later increment in case the team is
running out of time or budget (e.g. allowing customers to see the status of past
orders). Introducing these escape hatches allows the project team to make a
decision between implementing essential versions of more features versus
covering more non-essential aspects and edge cases for fewer features later in
the process if time should become scarce.

Once all stakeholders agree on the plan for the product increment, the feature
concepts together with included as well as excluded aspects and according edge
cases are written down in an increment plan document, which is used to estimate
a rough timeline. That plan is not irrevocable and neither is the estimate more
than an assessment based on the information available at the time. Previously
unknown challenges will likely be uncovered during product development and some
details and implications will only be understood once work on a particular
feature has actually begun. Teams should in fact constantly question assumptions
and priorities and change the plan at any time they see necessary. It is also
possible at any time to go back and re-plan an increment, adding a different set
of features, include or exclude different aspects of them or even start over
with the product strategy or the product design if new business objectives are
identified. The goal of the increment planning is to get a common understanding
of what value will be delivered during the increment and how long that should
roughly take (or what the maximum available time and budget is) but not lock the
team into a binding specification and schedule that might have a short validity
anyway.

## Product Development

In the product development stage of a product increment, feature concepts are
turned into usable functionality in the application, iteratively building up the
product over time. During this process, each feature concept is broken down into
fine-grained and more detailed tasks which are then proceeded to be implemented
by the project team (see
[development process](../development-process/#development-process)). Breaking
down feature concepts is done in close collaboration between engineers and
designers with the business experts. They discuss individual facets of features
as well as different alternatives for designing and implementing those along
with the associated effort.

The project team will build slices of the system at once, including everything
from the design, the backend, and the frontend code of a particular feature so
those slices can be released as functional units that can be interacted with by
all project stakeholders. Once a slice is finished, it will be released to a
staging system that is available for all project stakeholders. All stakeholders
should be encouraged to make active use of the staging system to follow the
project's progress and validate that the product is being built according to
their expectations. Feedback given by stakeholders will be collected by the
project team and addressed in tasks in a subsequent
[iteration](../../development-process/#iterations) of the product development
stage or moved into a later product increment depending on the respective
finding's priority.

Once a product increment is completed, the respective state of the product will
be released - ideally into a production environment - so real users can access
the system and deliver first hand feedback.

### Growing a Foundation

As more features are being completed and the product evolves, foundational
elements that will later be reused in other, similar contexts will be
identified - both in the application's codebase as well as in the
[visual design system](../../development-process/#design-systems). That way,
each increment of the application results in its foundation becoming broader,
stronger and more refined, resulting in increased effectiveness over time,
decreasing effort per feature and increasing planning reliability.

## Evaluation

Every increment of the application that is completed and released should be
evaluated on whether the assumptions made in the product strategy and product
design stages proved themselves to be true and whether the project's objective
has been achieved as intended. Ideally that evaluation can be conducted based on
interaction of real users with the product, either based on data captured by an
analytics system or ideally by receiving feedback from users directly. Metrics
should be collected for the KPIs defined in the
[product strategy stage](#product-strategy). By analyzing those metrics, the
actual feedback can now be compared with the initial expectations.

## Iteration

Once an increment of the product is completed and released, the project team
will go on to build the next increment as long as there is functionality to add
and aspects of the product to improve. Depending on the learnings from the
previous increment, it might be necessary to go through the
[product strategy stage](#product-strategy) again, reconsider some of the
assumptions and adapt the project's objective. If this is found not to be
necessary, the product design stage can be entered directly to conceptualize,
scope and implement the next set of features, followed by executing that new
plan, evaluating what was built, etc.
