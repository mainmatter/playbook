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
the minimal set of features necessary move towards the client's objective.
Subsequent increments each extend the application, adding new features and
extending ones added in previous increment while potentially addressing new
learnings gathered during the validation stages of previous increments.

For clients that have gone through any of these stages themselves or together
with a third party, we can jump to the subsequent stage directly, building on
the material they have already (we recommend we evaluate that material first
though).

## Discovery

In order to build an application that effectively achieves a particular
objective for a client, we first of all need to understand what specifically
that objective is. We will work closely with the client in a workshop to
understand what exact value the application we are building is going to provide
that is currently lacking. Together, we will answer questions likt:

- what is it that is currently missing or that we are aiming to improve?
- who is the target audience for the application we are building in the project
  (e.g. the client themselves, their customers or their business partners)
- what should be the effect on the business once the solution is in place (e.g.
  more sales via the client's website)

It is critical to get all project stakeholders involved in this workshop, in
particular all of the client's business experts from various backgrounds like
marketing, sales, customer service etc. All of these groups will have unique
insights and experiences that must all be heard in order to clearly understand
the situation and define the project's objective. It is often advisable to
conclude additional research to make more data available for the workshop. That
can be done by analyzing data that the client already has like analytics data
from an existing application but also through interviews with existing or
prospective users or customers or analyzing publicly available datasets.

The outcome of the discovery workshop is a shared understanding among the
project team about what the current situation and the project's objetives are.
We will write these down in a concise mission statement document to clearly
define the project's goal. We also recommend defining one or more KPIs (e.g.
_"number of checkout via the website"_, _"number of support requests from
users"_) to capture the situation before and after the project for easier
[evaluation in later stages](#evaluation). If no data is available for these
KPIs, it might be necessary to set up additional tracking or conduct research.

## Conception

Once the problem has been identified and is well understood by all project
stakeholders we will go on to define a suitable solution that solves the problem
in the most effective and efficient way. We will define who the target audience
of the application is and what its features will be and how those will function
as well as what the visual identity of the application will be. These aspects of
the project are discussed and identified in a
[number of workshops](../workflow/conception/) that our designers and engineers
will conduct with the client's business experts.

In this stage, we will prepare a list of user stories, each of those consisting
of:

- a description of the users involved in the user story, their characteristics
  and motivations
- a textual description of the user story, the steps and the outcome
- a low-fidelity diagram showing steps in the user story, the involved UI
  elements and transitions between states in the user story's flow

For the first increment of the application, we will prepare a fully designed,
high-fidelity mockup or prototype for one user story in order to agree on the
visual direction with all stakeholders. For subsequent increments and user
stories, we go straight to the execution stage building on the visual direction
established in previous increments.

### Scoping

Once we defined what will be built in the conception stage, we will define the
scope for the current increment of the application, explicitly listing the user
stories that will be included in the increment, but also the ones that will not
be included. Software projects are highly dynamic and the bigger the scope of a
project, the easier it can get off course, resulting in delays and budget
overruns. By limiting the scope per increment we minimize complexity and thus
risk.

For each of the user stories we are including in the scope, we will look for
potential to break the stories down into smaller steps so that a simple version
of a user story could be built first which is then extended incrementally. That
helps to further minimize complexity and risk and allows to decide between
either focussing on simple version of more user stories or complete versions of
less user stories later in the process. We will write each of these breakdowns
down along with the description of the user story from the previous step.

Once all stakeholders agree on a set of user stories and possibly breakdowns for
each of them, we bundle those up and estimate a rough timeline so that everyone
has an idea for the general timing of the project. None of what's planned is
irrevocable though and neither is the estimate more than an assessment based on
the information available at the time. Previously unknown challenges will be
uncovered during execution and clients are free to change their minds about
particular aspects of the project any time as well - in fact we encourage them
to constantly validate we are still on the right track and raise concerns
immediately if they feel we are not.

## Execution

The execution stage combines both building up the design as well as turning the
user story definitions into a usable application. We will break down what's
scoped into issues and assign them to iterations following our
[process](../process/). We ask our clients to stay closely connected with our
team during the execution phase, taking part in weekly meetings and following
progress closely. For the latter, we keep a staging system updated, available to
all stakeholders. We will build slices of the system at once, including
everything from the design, backend, and frontend code of a user story so we can
release them as usable units that can be interacted with by the client.

As the code of the application evolves, so does the design system that defines
the fundamental visual framework of the application. As we complete more user
stories and the application advances, we will identify and define foundational
elements of the UI that will later be reused in other, similar contexts. That
eventually leads to a full framework of UI elements that the entire application
is composed of, ensuring a consistent look and feel of the application.

### Release & Operation

For each increment of the application, we release what we built - ideally into a
production environment so real users can access the system. For the initial
release, that task will include choosing and setting up the server
infrastructure and deployment process. Subsequent increments will build on top
of that infrastructure. Depending on the client's own expertise, we can operate
and maintain the application after the project completes.

## Evaluation

Every increment of the project that is completed and released should be
evaluated for whether the assumptions made in the discovery and conception
stages prove true in reality. Ideally that evaluation can be conducted based on
interaction of real users with the application, either based on data captured
with an analytics system or getting feedback from users directly. We will also
collect metrics for the KPIs defined in the [Discovery stage](#discovery) and
validate those improved as intended.

## Iteration

Once we completed an increment, we will go on to build the next increment as
long as there is work left in the project. Depending on the learnings from the
previous increment, it might or might not be necessary to go through the
[Discovery stage](#discovery) again and reconsider some of the assumptions. If
that is not necessary, we can go to the conception stage directly and
conceptualise, scope and implement the next set of features.
