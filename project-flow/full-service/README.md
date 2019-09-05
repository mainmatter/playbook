# Full Service Project Flow

In full service projects, we solve our clients' business problems with bespoke
software. We guide them through the entire process which we break down into 4
stages:

- identifying and understanding the nature of the problem as well as its
  implications
- conceptualising a software system that solves the previously identified
  problem(s)
- implementing that system and launching it
- validating users understand and approve of the software and it addresses their
  needs as intended

These stages will usually be passed through several times. In the first pass, we
try and build the minimal version of the software system that solves the most
pressing problem(s). Subsequent passes each extend that system incrementally,
potentially addressing new learnings gathered during the validation phase of the
previous pass.

For clients that have gone through any of the stages themselves already or maybe
together with a third party, we can jump to the subsequent stage directly,
building on the material they have already (we recommend we evaluate that
material first though).

## Definition

In order to find an effective solution for a business problem we need to
identify the nature and root cause(s) of it first. Business problems are often
caused by more fundamental issues that are not as easily visible and it is
important to invest some time and effort to understand the situation properly
before looking at a solution too early and potentially addressing a problem on
the surface while leaving the fundamental cause unaddressed.

It is also important to understand the problem's impact on the business in order
to understand the severity of the problem as well as developing an idea of what
the situation would ideally look like once the solution is in place. We
generally recommend identifying or creating one or more KPIs (e.g. _"number of
checkout via the website"_, _"number of support requests from users"_) to
capture the situation before and after the solution is in place for better
visibility of the positive effect.

In the definition stage of a project, we work closely with the client in a
number of workshops that can be done on-site or remotely. It is critical to get
all project stakeholders involved, which are all business experts from the
client's side who will all have relevant and potentially different viewpoints on
the problem as well as engineers and designers from our team. Once the workshops
concluded, all stakeholders will have a good understanding of the situation and
the problem the project aims to solve.

In order to make the definition phase most effective, we will send out a
questionnaire to the client with a number of questions to narrow down the scope
of what will be discussed in the workshops and thus make them more efficient. It
is often advisable to conclude additional research to have more data available
during the workshops. That can be done by analyzing data that the client already
has like analytics data of their existing website etc. but also interviews with
existing or prospective users or customers.

The result of the definition phase will be a one page mission statement with a
concise description of the problem including the relevant KPIs that all project
stakeholders sign off on then.

## Conception

Once the problem has been identified and is well understood by all project
stakeholders we will look at defining a suitable solution that solves the
problem in the most effective and efficient way. We will define who the target
audience of the system is going to be, what the tasks are and what the visual
identify of the system will be. These aspects of the project are defined in a
[number of workshops](../workflow/conception/) that our designers and engineers
will conduct with the client's business experts.

The result of the conception phase will be a list of task definitions, each of
those consisting of:

- a description of the user performing the task and their characteristics and
  motivations
- a textual description of the task, the steps and the outcome
- a low-fidelity flow diagram showing transitions between steps of the tasks and
  the respective UI elements

In addition to the task list we will prepare a designed high-fidelity mockup or
prototype for one of the tasks to set the visual direction for the project.

## Scoping

Once we defined what will be built in the conception stage, we will define the
scope for the current pass, explicitly listing the features and flows that will
be included in the pass, as well as the ones that will not be included. Software
projects are highly dynamic and the bigger the scope of a project, the easier it
can go out of hand, leading to delays and budget overruns. By limiting the scope
we minimize complexity and thus risk.

For each of the flows we are scoping, we will look for potential to break those
down into smaller increments so that a simple version can be built first which
is then extended incrementally. That helps to further minimize complexity and
risk and allows to decide between simple version of more features or complete
versions of less features later in the process. We will write each of these down
along with the description of the feature from the previous step.

Once all stakeholders agree on a set of features and possibly increments for
each of them, we bundle those up and estimate a rough timeline so that everyone
has an idea for the general timing of the project. None of what's planned is set
in stone and neither is the estimate. New things will be uncovered during
execution and clients are free to change their minds about particular aspects of
the project any time - in fact we encourage our clients to constantly validate
we are still on the right track and reconsider things if they feel we are not.

## Execution

The implementation phase combines both executing the design and turning the
features into usable software. We will break down what's scoped into issues and
assign them to iterations following our [process](../process/). We ask our
clients to take an active role in the process, taking part in weekly meetings
and following progress closely. For the latter, we keep a staging system updated
for all stakeholders. We will build slices of the system at once, that is the
design, backend, and frontend code of a feature so we can release features as
usable units that can be interacted with.

As the code of the application evolves, so does the design system that defines
the fundamental visual framework of the application. As we build more features
into the application, we will identify and define foundational elements of the
UI that will later be reused in other, similar contexts. That eventually leads
to a full framework of UI elements that the entire application is composed of,
ensuring a consistent look and feel of the application.

### Release & Operation

In each pass through the stages, we release what we built - ideally into a
production environment so real users can access the system. For the initial
release, that will include choosing and setting up the server infrastructure and
deployment process while subsequent increments will leverage that
infrastructure. Depending on the client's requirements, we can operate and
maintain the infrastructure after the project completes.

## Validation

Let's include something about user interview or similar mechanisms  **after
release** - a validation step in which we ensure that what we built is actually
what users want.

**Testing with users**

Data analysis and survey methods can be used to determine a potential subset of
users that would be most representative for testing. In this way, we can gather
more valuable insights and feedback.

We would outline the right survey method to recruit potential test users,
qualify them, and design the experiments.

- evaluate:
  - does the system work? is it fast etc.?
  - does it solve the problem?
    - user interviews
    - data analysis, check with KPIs defined in the first step

## Iteration

- next pass
