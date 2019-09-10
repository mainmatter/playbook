# Full Service Project Flow

In full service projects, we solve our clients' business needs with bespoke
software applications. In order to do that in the most efficient way, we break
the process down into 4 stages that we guide our clients through:

- identifying and understanding what objective the project is aiming at
- conceptualising an application that pursues that objective
- implementing that application and launching it
- validating the application indeed achieves the objective

These stages will usually be passed through several times, incrementally
building up the application. For the first increment of the project, we build
the minimal set of functionality only, extending and improving that in
subsequent increments.

For clients that have gone through any of these stages themselves or together
with a third party, we can jump to the subsequent stage directly, building on
the material they have already (we recommend we evaluate that material first
though).

## Discovery

In order to build an application that effectively achieves a particular
objective for a client, we first of all need to understand what exactly that
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
written down in a one-page mission statement document to clearly express the
project's scope and goals. We also recommend defining one or more KPIs (e.g.
_"number of sales via the website"_, _"number of support requests from users"_)
to capture the situation before and after the project for easier
[evaluation in later stages](#evaluation). If no data is available for these
KPIs, it might be necessary to set up additional tracking or conduct research.

In addition to the mission statement, we will also define the future users of
the solution that is to be build along with their prior knowledge, skills,
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
from an existing application, data from a CRM or customer service system but
also through interviews with existing or prospective users or customers or
analyzing publicly available datasets.

## Conception

Once the objective of the project has been identified and is well understood by
all stakeholders, we will identify the set of functionality to be added in the
current increment of the project. In the first increment, we will start with the
minimal possible version of the application, addressing the most basic needs of
the project's personas (e.g. building the bare product configurator but no
payment mechanism or order management system yet). Subsequent increments will
extend and optimize what was built in previous increments (e.g. adding a
checkout flow with payment, adding an order management system for the client's
sales personnel etc.).

We work closely with the client
[during the conception phase](../workflow/conception/), translating each element
of functionality planned for the current increment into one or more user
stories, each of those representing a self-contained feature of the application
(e.g. configuring a product, purchasing a configuration by credit card, listing
a customer's orders). Every user story consists of:

- a textual description of the user story, the need that it addresses and the
  solution that it provides
- the persona(s) that the user story caters to
- a low-fidelity diagram showing steps in the user story, the involved UI
  elements and transitions between steps
- non-essential aspects of each user story along with identified edge cases

For the first increment of the application, we will prepare a high-fidelity
prototype for one user story in order to define the application's visual
identity. For subsequent increments, we can skip the prototyping step and go
straight to the execution stage building on the visual identity established
earlier.

### Planning

Once we defined the user stories in the conception stage, we define a plan for
the current increment of the application. For each user user story that we are
aiming to implement, we will list which of the non-essential aspects and edge
cases will be included in the increment (e.g. configuring products of the most
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
non-essential aspects and edge cases for less user stories later on.

Once all stakeholders agree on the plan for the current increment of the
project, we write down the list of user stories and included as well as excluded
aspects and edge cases in an increment plan and estimate a rough timeline. That
plan is not irrevocable and neither is the estimate more than an assessment
based on the information available at the time though. Previously unknown
challenges will likely be uncovered during execution and new learning will be
made. We encourage clients to constantly question assumptions and priorities and
ask for a change of plan anytime they feel suitable. It is possible at any time
to go back to the planning stage for an increment and plan different user
stories, include or exclude different aspects of them or even start over with
discovery or conception if new business objectives are identified.

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
first hand feedback can be collected. For the initial release, that task will
include choosing and setting up the server infrastructure and deployment
process. Subsequent increments will build on top of that infrastructure.
Depending on the client's own expertise and capabilities, we can operate and
maintain the application for them.

## Evaluation

Every increment of the project that is completed and released should be
evaluated for whether the assumptions made in the discovery and conception
stages prove true in reality and the application achieves the project's
objective as intended. Ideally that evaluation can be conducted based on
interaction of real users with the application, either based on data captured by
an analytics system or ideally by getting feedback from users directly. We will
also collect metrics for the KPIs defined in the [Discovery stage](#discovery)
and verify those improved as planned.

## Iteration

Once we complete an increment of the project, we will go on to build the next
increment as long as there is functionality to add and aspects of the
application to improve. Depending on the learnings from the previous increment,
it might be necessary to go through the [Discovery stage](#discovery) again,
reconsider some of the assumptions and adapt the project's objective. If that is
not necessary, we can go to the conception stage directly and conceptualise,
scope and implement the next set of user stories, followed by executing that new
plan, evaluating what was built etc.
