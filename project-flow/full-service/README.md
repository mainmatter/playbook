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

### Scoping

For each pass, we will define a scope, explicitly defining the features and
flows that will be included in the respective pass, as well as the ones that
will not be included. Software projects are highly dynamic in nature and the
reality is that only one of scope or time and budget can be fixed. By limiting
the scope per iteration we minimize that dynamic and the associated risk.

Having agreed on an ideal solution, it is time to decide how to organize the set
of features that make it up. The main goal of planning is to understand what it
takes to deliver a solution of the highest possible quality, on time, and
budget.

During planning, we think about whether time or scope is fixed for building this
feature set (the only one can be fixed); if time is fixed, we try and identify
aspects of the feature that could be scoped down if we have to later. We then
try and give the customer an outlook for steps and overall duration (this is an
estimate, not a deadline).

The design and the list of documents that came out of the user journeys step are
the foundation for the implementation phase. Of course, they can change any
time, but it's what we start with. <We could give this a name, e.g., the
"bundle" or whatever>.

- define what is included and what is not
- identify potential for incremental version of each feature/flow, write these
  down
- agree on bundle, estimate

## Execution

The implementation phase combines both executing the design and developing the
features in code. All of the work should be tracked on the same board, following
our iteration approach we're already using and that's described in other section
of this playbook.

In the first pass of the project, this could mean that engineering can only
start with a slight delay as the designers need to prepare enough wireframes, so
the engineers are not blocked. We do our normal iterations-based process and
planning, creating specific issues based on them that we bundled in the planning
step.

During implementation, we keep a staging system updated so all stakeholders can
follow along the process. We ask our clients to join the iteration meetings ().
We will build slices of the system at once, that is the design, backend, and
frontend code of something so we can release these three things together. This
way, we can be sure they work together and move on to the next slice (see 
[basecamp.com/shapeup/3.2-chapter-10][integrating] for a good explanation).

[integrating]:
  https://basecamp.com/shapeup/3.2-chapter-10#integrating-in-one-place

- break down in iterations
- design (design system will automatically result out of this incrementally),
  implement
  - updates every 1 or 2 weeks, client joins our calls, can change direction any
    time
  - keeping staging system up to date
- launch
- operate

### Launch

Post-launch we can operate the system for the client and potentially also
validate what we built works for users. Ideally, we'd be able to do this after
every pass of the full-service phase.

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
