# Full Service Project Flow

In full service projects, we solve our clients' business problems with bespoke
software applications. In order to do that in the most efficient way, we break
the process down into 4 stages that we guide our clients through:

- identifying and understanding the nature of the problem as well as its
  implications
- conceptualising an application that solves the previously identified
  problem(s)
- implementing that application and launching it
- validating the application solves the problem(s) as intended

These stages will usually be passed through several times, incrementally
building up the complete application. As the first increment, we build the
minimal version of the application that solves the most pressing problem(s).
Subsequent increments each extend the application, potentially addressing new
learnings gathered during the validation stage of the previous increment.

For clients that have gone through any of these stages themselves already or
maybe together with a third party, we can jump to the subsequent stage directly,
building on the material they have already (we recommend we evaluate that
material first though).

## Discovery

In order to find an effective solution for a business problem we need to
identify its nature and root cause(s) first. Often a problem that is visible on
the surface will only be the consequence of a deeper, more fundamental issue
which might not be as easily identifiable. In order to spend our time most
efficiently, we invest some time and effort to understand the situation properly
before looking at a solution too early and potentially focussing on a problem on
the surface only while leaving the fundamental cause unaddressed.

It is also important to understand the problem's impact on the business in order
to understand its severity as well as develop an idea of what the situation
would ideally look like once the solution is in place. We generally recommend
defining one or more KPIs (e.g. _"number of checkout via the website"_, _"number
of support requests from users"_) to capture the situation before and after the
solution is in place for easier [evaluation in later stages](#evaluation). If no
data is available for these KPIs, it might be necessary to set up additional
tracking or conduct research.

In the discovery stage of a project, we work closely with the client in a number
of workshops that can be done on-site or remotely. It is critical to get all
project stakeholders involved, which includes all business experts from the
client's side who will all have relevant and potentially different viewpoints on
the problem as well as engineers and designers from our team. Once the workshops
concludes, all stakeholders will have a good mutual understanding of the
situation and the problem the project aims to solve.

In order to make the discovery stage most effective, we will send out a
questionnaire to the client with a number of questions to narrow down the scope
of what will be discussed in the workshops, making those more efficient. It is
often advisable to conclude additional research to make more data available for
the workshops. That can be done by analyzing data that the client already has
like analytics data of an existing solution but also through interviews with
existing or prospective users or customers.

The result of the discovery stage will be a one page mission statement with a
concise description of the desired outcome of the project including the relevant
KPIs that all project stakeholders sign off on.

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
