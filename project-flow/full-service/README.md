# Full Service Project Flow

In full service projects, we solve our clients' business problems with bespoke
applications. In order to do that in the most efficient way, we break the
process down into 4 stages that we guide our clients through to make sure we
correctly address their needs and they can follow along the progress at all
times:

- identifying and understanding the nature of the problem as well as its
  implications
- conceptualising an application that solves the previously identified
  problem(s)
- implementing that application and launching it
- validating users understand and approve of the application and it addresses
  their needs as intended

These stages will usually be passed through several times, incrementally
building up the complete application. As the first increment, we build the
minimal version of the application that solves the most pressing problem(s).
Subsequent increments each extend the application incrementally, potentially
addressing new learnings gathered during the validation phase of the previous
increment.

For clients that have gone through any of the stages themselves already or maybe
together with a third party, we can jump to the subsequent stage directly,
building on the material they have already (we recommend we evaluate that
material first though).

## Discovery

In order to find an effective solution for a business problem we need to
identify its nature and root cause(s) first. Often a problem will only be the
consequence of a deeper, more fundamental issue might not easily be visible. In
order to spend our time most efficiently, we invest some time and effort to
understand the situation properly before looking at a solution too early and
potentially addressing a problem on the surface only while leaving the
fundamental cause as is.

It is also important to understand the problem's impact on the business in order
to understand its severity as well as develop an idea of what the situation
would ideally look like once a solution is in place. We generally recommend
identifying or creating one or more KPIs (e.g. _"number of checkout via the
website"_, _"number of support requests from users"_) to capture the situation
before and after the solution is in place for easier
[evaluation in later stages](#evaluation).

In the discovery stage of a project, we work closely with the client in a number
of workshops that can be done on-site or remotely. It is critical to get all
project stakeholders involved, which includes all business experts from the
client's side who will all have relevant and potentially different viewpoints on
the problem as well as engineers and designers from our team. Once the workshops
concluded, all stakeholders will have a good shared understanding of the
situation and the problem the project aims to solve.

In order to make the discovery stage most effective, we will send out a
questionnaire to the client with a number of questions to narrow down the scope
of what will be discussed in the workshops and thus make them more efficient. It
is often advisable to conclude additional research to have more data available
during the workshops. That can be done by analyzing data that the client already
has like analytics data of an existing solution but also through interviews with
existing or prospective users or customers.

The result of the discovery stage will be a one page mission statement with a
concise description of the desired outcome of the project including the relevant
KPIs that all project stakeholders sign off on.

## Conception

Once the problem has been identified and is well understood by all project
stakeholders we will look at defining a suitable solution that solves the
problem in the most effective and efficient way. We will define who the target
audience of the application is, what its features and what the visual identity
of the it will be. These aspects of the project are discussed and identified in
a [number of workshops](../workflow/conception/) that our designers and
engineers will conduct with the client's business experts.

We will prepare a list of feature definitions, each of those consisting of:

- a description of the users using the feature, their characteristics and
  motivations
- a textual description of the feature, the steps and the outcome
- a low-fidelity flow diagram showing transitions between steps of the feature
  and the respective UI elements

In addition to the feature list we will prepare a designed high-fidelity mockup
or prototype for one of the features to set the visual direction for the
project.

### Scoping

Once we defined what will be built in the conception stage, we will define the
scope for the current increment of the application, explicitly listing the
features and flows that will be included in the increment, as well as the ones
that will not be included. Software projects are highly dynamic and the bigger
the scope of a project, the easier it can get off course, resulting in delays
and budget overruns. By limiting the scope we minimize complexity and thus risk.

For each of the features we are including in the scope, we will look for
potential to break those down into smaller increments so that a simple version
of a feature can be built first which is then extended incrementally. That helps
to further minimize complexity and risk and allows to decide between having
simple version of more features or complete versions of less features later in
the process. We will write each of these down along with the description of the
feature from the previous step.

Once all stakeholders agree on a set of features and possibly increments for
each of them, we bundle those up and estimate a rough timeline so that everyone
has an idea for the general timing of the project. None of what's planned is
irrevocable though and neither is the estimate more than an assessment based on
the information available at that time which is likely to be incomplete. New
things will be uncovered during execution and clients are free to change their
minds about particular aspects of the project any time - in fact we encourage
them to constantly validate we are still on the right track and raise concerns
immediately if they feel we are not.

## Execution

The execution stage combines both building up the design as well as turning the
feature definitions into a usable application. We will break down what's scoped
into issues and assign them to iterations following our [process](../process/).
We ask our clients to take an active role in the process, taking part in weekly
meetings and following progress closely. For the latter, we keep a staging
system updated, available to all stakeholders. We will build slices of the
system at once, including everything from the design, backend, and frontend code
of a feature so we can release features as usable units that can be interacted
with by the client.

As the code of the application evolves, so does the design system that defines
the fundamental visual framework of the application. As we build more features
into the application, we will identify and define foundational elements of the
UI that will later be reused in other, similar contexts. That eventually leads
to a full framework of UI elements that the entire application is composed of,
ensuring a consistent look and feel of the application.

### Release & Operation

For each increment of the appliction, we release what we built - ideally into a
production environment so real users can access the system. For the initial
release, that task will include choosing and setting up the server
infrastructure and deployment process while subsequent increments will build on
top of that infrastructure. Depending on the client's requirements, we can
operate and maintain the application after the project completes.

## Evaluation

Every increment of the project that is completed and released should be
evaluated for whether the assumptions made in the discovery and conception
stages prove true in reality. Ideally that evaluation can be conducted based on
interaction of real users with the application, either based on data captured
with an analytics system or getting feedback from users directly. We will also
collect metrics for the KPIs defined in the [Discovery stage](#discovery) and
validate those improved as intended.

## Iteration

Once we completed an increment, we will go on to build the next increment if
there is work left in the project. Depending on the learnings from the previous
increment, it might or might not be necessary to go through the
[Discovery stage](#discovery) again and reconsider some of the assumptions. If
that is not necessary, we can go to the conception stage directly and
conceptualize, scope and implement the next set of features.
