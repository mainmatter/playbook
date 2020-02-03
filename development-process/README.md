# Development Process

An effective development process supports the team rather than providing another
obstacle to work around. It does not introduce a set of formalities only for the
sake of it and favors communication between all contributors over top-down
management. A good process also ensures the right tasks are being worked on at
the right time (and in an appropriate manner) and provides a reasonable level of
short term predictability. At the same time it remains flexible enough to adapt
to unexpected events.

The simplabs development process distinguishes itself through certain
characteristics and goals:

- It ensures all project stakeholders are being heard and the project's
  priorities are not being dictated by a single party.
- It is designed to deliver high-quality results in a structured, comprehensible
  manner.
- It fosters open and replicable communication and sharing of know-how among
  team members which is particularly important for remote teams.
- It puts a focus on planning and preparing all work carefully before getting
  started with the actual implementation in order to ensure an execution as
  smooth as possible.
- It does not rely on any particular tools and works for projects and teams
  regardless of the available infrastructure.

## Iterations

Our development process is based on _"iterations"_ in which a clearly defined
set of tasks is being worked on and ideally completed within the same iteration.
Iterations share similarity to what is often referred to as _"sprints"_ but we
made a conscious decision to refrain from that terminology due to its negative
connotations - after all, the goal is not to rush work out but instead to build
a project incrementally and iteratively at a sustainable pace in order to ensure
a high level of quality while avoiding the accumulation of technical debt.

The concrete tasks for an iteration are identified, defined and prepared
collaboratively with all project stakeholders before the iteration starts. We do
not recommend maintaining a backlog filled with all tasks that need to be worked
on for a particular project as that backlog is very likely to change constantly
anyways. Doing it like this, most teams end up with a large number of tasks that
will never be tackled and will eventually be outdated and closed untouched.
Instead, only the tasks that are relevant at the start of the iteration should
be defined, prepared and then planned.

The main purpose of iterations is to set expectations on all sides and provide
short-term predictability and planability for the stakeholders requiring it.
Iterations should be short enough to remain predictable and long enough to
supply enough time to finish meaningful work. The concrete iteration length for
a project must be defined when kicking off the project but can still be adapted
afterwards. Iterations are a team effort and should therefore be planned and
executed collaboratively with team members supporting each other to complete the
work as planned.

### Roles

Our development process functions with flat project teams without dedicated
project managers. For any given iteration one of the team members (a designer or
engineer) will take on the role of _"Iteration Lead"_ . That person is
responsible for planning the iteration and ensuring smooth execution. It is
conceptualised as a rotating role so that every team member will assume it every
once in a while (unless they opt out).

Making the iteration lead a rotating role ensures that all team members realise
the perspectives of all project stakeholders instead of getting stuck in their
own. It also gives everyone on the project team the notion of ownership,
responsibility and empowerment contrary to the feeling of being mere executors
of someone else's commands. This leads to an overall amplified mindset for each
individual on the team.

The main responsibility of the iteration lead is to consult with the business
experts (and all other relevant project stakeholders like marketing, designers
or engineers) and prepare the iteration. Once the iteration starts, any
requested changes to it go through the iteration lead for assessment (who might
consult with other project stakeholders for priorization).

### Iteration Preparation

The purpose of the iteration preparation phase is to define the tasks that are
most relevant to be worked on during the next iteration. The tasks assigned to
an iteration should reflect **all** the upcoming work, not only feature work -
in particular they should reflect design and UX work but also purely technical
tasks like refactorings as well. The prepared tasks will then be presented to
the team as part of the planning meeting that kicks the iteration off. In order
to prepare these tasks, the iteration lead synchronizes with the business
experts and other project stakeholders to:

- identify the most relevant tasks from each project stakeholder's perspectives;
  the goal here is to find a good balance between work on features and other
  aspects like bug fixes, refactoring, dependency updates, addressing tech debt
  in general but also addressing other requirements for instance coming in from
  the marketing department or other stakeholders
- help the respective stakeholders translate features or other change requests
  into actionable tasks; this might include discussing different options for
  implementing a change along with their potential implications and related
  effort; the iteration lead will often not possess the required knowledge to do
  that personally but will then involve the respective experts in these
  conversations
- uncover implications and hidden complexities in any of the tasks; while it is
  not possible to think every task through completely from start to finish and
  eliminate all inherent risks, we try to uncover as much of it as possible in
  the preparation phase to reduce the likelihood for the team to run into
  unforeseen problems later on, potentially leading to delays and deadlocks
  then; the iteration lead might delegate this work to the respective experts
  for a particular topic
- prepare well-written issues for each of the identified tasks or spikes for
  tasks that require more research in order to be ready to be adressed
- make sure all of the preconditions are met in order to be able to work on each
  task, e.g. all necessary assets have been delivered, translations are ready or
  legal implications have been checked
- prioritize the issues so it is clear which ones need to be worked on first; in
  reality priorities will obviously overlap occasionally and the expected
  effort, potential deadlines for individual tasks etc. also need to be taken
  into account when defining the order in which tasks should be worked on

The iteration preparation phase always overlaps with the previous iteration -
during execution, the next iteration is already being prepared. Iteration leads
should typically plan a full iteration period for preparation so that when one
iteration starts, the iteration lead of the next iteration starts preparing the
next one. Preparing an iteration will typically not require the iteration lead's
entire time but can usually be done at the same time as contributing to the
current iteration.

#### Issues

Well-prepared issues are a key element of an effective development process. They
provide guidance for the project team's work, allow external parties
non-involved with the project to get an understanding of what is happening
directly, and can serve as future reference to understand what was done in a
project, and for which reasons.

Good issues aim to:

- describe what is to be done and why, potentially accompanied by screenshots,
  mockups/sketches or other visuals that help understand the desired outcome; it
  might also be beneficial to add a summary of the issue's history, covering
  previous related changes or alternative approaches that have been ruled out
  and also providing the reasons for those changes
- include reproduction steps if the issue describes a bug; ideally those are
  visualized with a screen recording or other media
- detail concrete requirements that must be met in order to complete the issue;
  in order to prepare this list, the iteration lead might need to partner with a
  team member more familiar with a particular part of the code base or feature
- include all necessary materials that are needed for the issue; this could be
  visual assets, links to online documentation for third party libraries or APIs
  or contact details for external parties involved in an issue etc.
- bring up any open questions that need to be answered, or risks that have been
  identified and might prevent the issue from being completed
- be a discrete unit of work; issues should only contain related requirements
  and ideally not represent more than a few days of work - larger issues can
  often be broken down into multiple smaller ones, possibly even allowing to be
  worked on simultaneously

#### Spikes

If a particular task is associated with too many open questions or uncertainties
to be converted into a well-prepared issue, it is preferable to plan a spike
first in order to resolve these open questions. Spikes should have:

- a description of the original requirement that will eventually be addressed in
  an issue, potentially accompanied by screenshots, mockups/sketches or other
  visuals that help understand the desired outcome;
- a clear description of what the open questions are and how they are blocking
  an issues from being created by adding too much risk or uncertainty
- guidance on potential solutions that should be evaluated or references to
  promising approaches
- a well-defined timebox, e.g. _"max 2 days"_

The result of the iteration preparation phase is a prioritized list of
well-prepared issues and spikes. This list of issues will then be presented to
the team during the planning meeting.

## Iteration Planning

The iteration planning meeting is a joint meeting with the entire project team,
the business experts and all other stakeholders involved in the project. During
the meeting, the iteration lead presents each issue to the project team so that
everyone aquires a coherent understanding of what each issue is about and gets a
chance to ask questions and/or raise any points that might have been overlooked
in the iteration preparation phase.

At the end of the planning meeting, the team collaboratively decides whether it
can reasonably work on and complete all of the issues that have been presented
to them in the planning meeting (plus past issues that are potentially moved
over from the previous iteration after having been reviewed). If the team
considers the presented issues to be too much work for the iteration, they
collaboratively decide which ones are moved to a later iteration to be
considered again in the future. If any of the issues are found not to be ready
to be worked on (e.g. because dependencies of the issue are not ready), the
issue is moved to a later iteration as well.

**The iteration, once planned, is not a binding agreement.** It is still
possible for all project stakeholders to react to changes regarding features or
priorities and the project team cannot guarantee all planned issues to be
completed by the end of the iteration as new challenges might come up once work
on an issue has started. The iteration plan is merely a snapshot of feature
requests and priorities at the time it is made as well as a best-effort estimate
by the project team of which issues it thinks it can complete within the
iteration. Ideally, an iteration remains unchanged once it has been planned to
enable smooth execution which also leads to increasingly predictable estimates
as a project progresses.

## Iteration Execution

After the iteration has been planned, execution starts and the planned issues
are being worked on based on their priorities.

Once an issue has started to be worked on, the respective team member(s) will
self-assign it (not all issue trackers allow assigning issues to more than one
person at a time so if multiple engineers collaborate on an issue, they might
have to choose one to assign it to). Issues are only assigned once work on them
has actually started - pre-assigning issues during planning or afterwards block
these issues for everyone else to work on if the originally assigned team
members are busy with other tasks and do not actually work on them. If an issue
is being worked on by multiple team members sequentially (e.g. first the
designer for preparing the wireframes, then the engineer for implementing
those), the latter team member will self-assign the issue once the former is
done with their work.

Although issues should be well-understood and well-prepared before they are even
planned for a particular [iteration](#iterations), for more
complex issues it is often beneficial to prepare them further before starting
implementation. For these kinds of issues, the first step is to break them down
into smaller, more concrete steps (which is often a great thing to do in a
[pairing session](#pairing)).

Once an issue has been resolved via a
[pull request](#feature-branches) or if it is blocked, the
engineer(s) will self-assign another issue from the iteration backlog. If an
issue is blocked and cannot progress, the engineers working on it will have to
contact the [iteration lead](#roles) who - in collaboration
with whomever necessary - will try to resolve the impediment.

If there are any changes requested to the iteration after the planning meeting
(e.g. due to unforeseeable changes to features or severe bugs popping up in
production), all of these potential changes are triaged by the iteration lead.
They might consult with the business experts or other project stakeholders to
determine validity and priority of the incoming requests. If an issue is
considered necessary to be added to the iteration after the planning meeting, it
will be added but another issue might have to be removed from the iteration in
its stead.

If an issue is blocked and cannot progress, the iteration lead is responsible
for trying to solve the impediment, potentially synchronizing with the business
experts or other project stakeholders that can help resolve the situation.

Likewise, if all issues in an iteration are completed early and there is no more
work left to do, the iteration lead will synchronize with the project
stakeholders and the iteration lead of the following iteration to discuss which
issues should be added. Oftentimes that will mean moving issues from the
following iteration into the current one.

All discussions around an issue should happen on the particular issue's
respective page. Of course at times it is convenient to have discussions in
person or through online chat but even in those cases, a brief summary of the
discussed points and the outcome should be posted on the issue. This is a
necessity for distributed teams and allows everyone access to all of the context
of a particular issue at any time. Even teams that are not distributed benefit
from this practice as all information that is relevant to a particular issue is
and remains available for everyone interested.

### Communication

Communication is key for a successful project team - be it distributed or not.
In order for communication to be beneficial for both the team culture as well as
productivity, rather than becoming a liability or cause of constant stress, all
team members need to keep some basic rules in mind:

- be responsive: don't leave anyone hanging with unanswered questions or
  requests. It goes a long way in keeping working relations positive, and
  communication effective. Respond to online chat messages within reasonable
  time, ensure you have notifications set up properly so you see when somebody
  mentions you in a discussion or asks for your feedback
- take your focus time: while some people can respond to any notification that
  reaches them immediately and still stay focussed on the task they're working
  on, this is not everyone's most effective way of working. Feel free to take
  your focus time and switch off or ignore all notifications in order to focus
  on a particular task. Just make sure to check whether anything urgent came up
  a few times a day. On the flip side, when reaching out to a team member, be
  asynchronous as much as possible. Give people time to finish what they're
  focused on, and to respond properly. Very rarely is anything so urgent to
  warrant full interruption.
- take advantage of rich media: screenshots, screen recordings, screenshares or
  even hand-drawn sketches can contribute to a better understanding of what
  you're trying to show or describe. A screen recording of a delivered feature
  is always a hit. During calls, switch on your camera so people can see you -
  talking face to face rather than with audio only makes a big difference in
  communication style.

### Engineering

Although Engineering and Design work together closely at all times, some of the
techniques and practices differ simply because both professions deal with
different subjects. We recommend following a number of established practices
that have been adopted from the open source community for a smooth and effective
engineering workflow.

#### Feature Branches and Pull Requests

All changes to a project's code are done in branches. No changes should ever be
committed to the `master` branch (or whatever the project's main branch is)
directly. There should generally be at least one branch per issue - for larger
issues it often makes sense to split separate steps into separate branches and
merge them one after another.

All changes in a branch should also be related to the same _"topic"_ - e.g one
branch should not address more than one issue or change entirely unrelated
aspects of the application.

If the testing setup, hosting environment and potentially other requirements
present for the delivered product should allow it, we recommend setting up
continuous deployment so changes get deployed to production as the respective
pull request gets merged. If that is not possible, we recommend setting up
continuous deployment for a staging system at least so all project stakeholders
can follow the project's progress.

##### Commits

Just as all changes in a branch should be related to the same _"topic"_, all
changes within a single commit should be related to the same step for
implementing that topic. Each commit should only do one _"thing"_, ideally not
touching on too many different parts of the code base. All commits should also
have clear and concise
[commit messages](https://git-scm.com/docs/git-commit#_discussion) that make
clear what the particular commit does.

##### Pull Requests

Branches are not merged back to the `master` branch directly but via pull
requests (or whatever similar mechanism the tool used in a particular project
provides). Similarly to issues, pull requests should have all the information
necessary for everyone to understand what they do, how and why. In particular,
good pull requests should have:

- a high-level summary of the changes that the pull request contains that
  provides the reader with a good overview without having to look at the actual
  code changes
- guidance for testing the added or changed functionality; this is helpful for
  the reviewer, product or business experts looking at the pull request on a
  preview system and any QA people
- before and after screenshots or even screen recordings in case of a visual
  change
- a reference to the issue the changes in the pull request are refering to; if
  the pull request effectively closes an issue, most tools will automatically do
  that when the pull request is merged if it contains a comment like
  _"closes #<issue>"_ in the description

As with issues, all discussions around a particular pull request should happen
on the pull request's page. If discussions happen in person or via online chat,
a summary should be posted to the pull request so all information and context is
accessible to everyone interested at any time.

It is perfectly fine to create pull requests early on while implementation is
still ongoing and they are not yet ready to be reviewed or merged. Doing so is a
good way to get early feedback and share the status of something with the rest
of the team. Such pull requests should be marked as _"Work in progress"_
though - some tools have dedicated mechanisms for doing so, in others that do
not offer that, a good technique is prefixing the pull request's title with
something like `[WIP]`. Some tools will even block _"Work in progress"_ pull
requests from being merged.

##### Preview Systems

In addition to setting up
[continuous deployment](#iteration-execution) for
deploying all changes that get merged into a project's main branch to production
automatically, we recommend creating a mechanism that allows booting
per-branch/pull request staging systems on demand which we call preview systems.
These systems would ideally be automatically created (and destroyed once the
pull request was merged) for every new pull request. A link to the respective
system would be added to the pull request automatically. Preview systems are
particularly helpful for sharing changes with non-technical stakeholders that
cannot run the entire application themselves or with external stakeholders that
might not even have access to the application's sources.

Setting up a preview systems mechanism can sometimes be challenging and might
require a substantial amount of work. However, when taken into account early on
in a project and in particular if the project's infrastructure is containerized
anyway, it is often possible to set up preview systems with relatively little
effort. Once the mechanism is set up, the benefits easily justify even a
substantial effort anyway though. In case of projects that have been running for
some time already, have lots of dependencies, are not containerized and would
thus be very hard to implement a preview system mechanism for. We recommend at
least setting up a shared sandbox environment that all stakeholders share. While
that is not as valuable as a proper preview system mechanism, it is a good first
step and often much easier to set up.

##### Reviews

Pull requests are reviewed before they get merged back into the project's main
branch; pull requests that have not been reviewed should usually not get merged.
In order for a pull request to be ready for review though, it has to meet some
pre-requisites:

- the branch has no conflicts with the target branch
- the changes in the branch are covered by proper tests and CI is passing
- the pull request is not marked as _"work in progress"_
- the commit history of the pull request has been cleaned up, e.g. WIP commits
  have been squashed, debug commits have been removed etc.

When a pull request is ready for review, its author should actively ask for
another team member to review it - ideally via the tools used in the particular
project if those support it or over online chat etc. If not we generally
recommend applying rotating reviewer assignments so that not all of the reviews
depend on one or only a few people. This way, more team members participate in
the review process and thus understand different parts of the code base better.
Reviews are a great tool for distributing knowledge about the code base among
the project team which prevents essential knowledge from being isolated to
individual developers. Everyone asked for review should reply in a timely
manner - even if it's to ask for someone else to be chosen if they do not have
the time to do a proper review.

Once the reviewer approved the changes and CI passes, the pull request can be
merged by any team member including the pull request's author. If the original
reviewer would like a second review by another team member, potentially one more
familiar with the aspects of the application that are being changed by the
particular pull request, they will ask for it. In case anything comes up in the
review that cannot be resolved between the reviewer and the author of the pull
request, a third person should be brought in to resolve the deadlock.

Reviewing and potentially criticizing other people's work is a sensitive issue
which is why a set of rules should be followed when doing so:

- be polite: you are reviewing another person's work that they put time and
  energy in - don't be dismissive and keep a friendly tone
- be clear: don't be ambiguous but clearly address issues or modifications that
  need to be revisited and changed again
- be positive: while the review's main purpose is to identify mistakes or bad
  patterns that are not caught by CI, reviews are also a good opportunity to
  give feedback on changes that are particularly good
- be helpful: if a pull request contains a particular change you don't think
  should be merged, give the author some guidance by introducing an alternative
  to the change that does not come with the same drawbacks

#### Testing

Testing is an integral part of all engineering work and a necessity for
delivering high quality results that also do not deteriorate over time. Untested
changes should generally not be merged and not even be reviewed as one cannot
know whether the code under review actually works for all relevant scenarios. In
fact, if there are no early tests, it is very likely that the code will have to
go through additional changes later on as soon as tests are being added and bugs
are being discovered in the process.

While different languages and frameworks provide different testing mechanisms, a
good approach generally is

- leveraging small and isolated tests (e.g. unit tests) for the majority of the
  test cases including edge cases
- leveraging higher level tests (e.g. integration or acceptance tests) for
  ensuring the main features and flows of an application work as expected

Continuous integration must mandatorily be set up in order for a project to be
successful. While it should always be possible to run tests locally, they also
need to be run automatically for every pull requests and after each merge to the
project's main branch.

#### Refactoring

Refactoring is an essential part of any software project. As requirements change
and frameworks and languages progress, code written in the past will eventually
not be ideal anymore in the present and future. Constant refactoring ensures the
code base does not become stale and improves productivity overall by keeping
technical debt at a minimum and avoiding big, painful and risky rewrites that
otherwise often become necessary down the line.

When working on the code base, all engineers should keep an eye open for parts
that need to be refactored and either do so immediately in case of simple
changes, or bring them up as individual issues for one of the next
[iterations](#iterations).

#### Pairing

Pairing is a great way of spreading knowledge throughout the team, on-boarding
new team members or resolving blockers. We encourage project teams to make
pairing an integral part of their daily workflow, even across focus areas with
e.g. engineers and designers pairing when working on UI changes.

### Design

The design workflow greatly benefits from adopting established practices from
software engineering. A structured and organized approach fosters communication
and quality and is a necessary foundation for close collaboration between
designers and engineers.

#### Design Sources

Design source files should generally be managed like code, maintaining an
authoritative main line and making changes in change sets that are only applied
back to the mainline once complete and reviewed. Design sources can be
maintained using a version control system just like for the project's source
code or in a separate system, depending on the available tools and
infrastructure.

##### Change Sets/Branches

Just like changes to a project's source code, no changes to design sources
should ever be applied directly to the mainline. Only after a set of changes has
been reviewed and deemed good is it applied back as one discrete change. All
individual changes that are applied back together should be related to the same
UI element(s) or aspect of the UI (e.g. changing the color scheme once for all
UI elements). Once changes have been applied back to the mainline, that fact
should be noted in the issue describing the work that was done in the change.
The change should also be referenced in the issue if the tools allow that,
otherwise before/after images of the change should be attached to the issue.

###### Reviews

When a design change is ready for review, its author should actively ask another
team member to review it - ideally via the tools used in the particular project
if those support it or over online chat etc. if not. Everyone asked for review
should reply in a timely manner - even if it's to ask for someone else to be
chosen if they do not have the time to do a proper review.

Once the reviewer has approved the changes, they can be applied by any team
member including the author of the change. If the original reviewer would like a
second review by another team member, potentially one more familiar with the
aspects of the design that are changed, they should ask for it. In case anything
comes up in the review that cannot be resolved between the reviewer and the
author of the pull request, a third person should be brought in to resolve the
deadlock.

Changes to design sources need to be reviewed for:

- completeness: does the change contain all of the necessary elements and
  states?
- consistency: does the change fit in with and leverage the project's design
  system and overall visual direction?
- applicability: is the change possible to implement with the technology of
  choice with reasonable effort?

When reviewing design changes the same rules apply as when
[reviewing code changes](#review-guidelines).

#### Design Systems

All design work should result in a design system for the respective project,
independently of its nature or scope. The design system is a structured,
multi-level framework where each layer builds on top of the elements defined in
the previous one, going from simple to complex, e.g.:

- basic rules around font choices and color schemes build the foundation for the
  design system
- atomic elements like buttons, labels and inputs serve as the foundation of the
  design and are the building blocks for all higher levels
- components are built on top of atomic elements and/or other components and
  resemble groups of lower level elements that function as a unit like search
  forms, headers etc.
- components are arranged in particular ways to compose actual pages or screens
  for an application

A design system will ensure consistency across all of the UI of an application
as well as minimize the work necessary for extending the UI over time as new
elements will build on top of existing ones.

With every change that is applied, the design system is incrementally built up
and extended over time. New UI elements that were not previously covered will
reuse lower-level elements where applicable and only introduce new concepts and
patterns where no such reusable element is available. In cases where existing UI
elements turn out to not be suited for previously uncovered cases, these
elements might need to be changed, potentially making changes in other,
higher-level elements necessary as well.

#### Deliverables

Design files should be prepared in a way that makes extraction of assets and
necessary artwork easy for the engineers and designers who will use them. This
should include preparing and marking elements for export, including proper
offsets and intended appropriate file formats to reduce the necessity for
producing any special deliverables beyond the files themselves.

If any particular deliverables are required that the engineers can not extract
from the design source files directly, those deliverables should be attached to
the respective issue in the format best suited for the particular use case.

In order to demonstrate complex behavior or animation, narrow prototypes or
videos should be favored over text descriptions when possible to eliminate
ambiguities and mis-understandings.
