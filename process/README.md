# Process

An effective process supports the team rather than stand in its way. It does not
introduce a set of formalities only for the sake of it and favors enablement and
communication over top-down management. A good process also ensures the right
tasks are being worked on at the right time (and in a proper way) and provides a
reasonable level of short term predictability. At the same time it remains
flexible enough to adapt to unexpected events.

The simplabs process has a few key characteristics and goals:

- It ensures all project stakeholders get heard and no single party dictates a
  project's priorities.
- It is designed to deliver high-quality results in a structured, traceable
  manner.
- It fosters open and reproducible communication and sharing of know-how among
  the team members which is particularly important for remote teams.
- It puts a focus on planning and preparing all work before it is started to
  make execution as smooth as possible.
- It does not rely on any particular tools and works for projects and teams
  regardless of the available infrastructure.

## Iterations

Our process is based on _"iterations"_ in which a clearly defined set of tasks
is being worked on and ideally completed during the iteration. Iterations are
similar to what's often referred to as sprint but we refrain from that
terminology for its negative connotations - after all, the goal is not to rush
work out but to build a project incrementally and iteratively. The concrete
tasks for an iteration are identified, defined and prepared collaboratively with
all project stakeholders before the iteration starts. We do not recommend
maintaining a backlog with tasks for all of the work that needs to happen for a
particular project as that backlog is very likely to change constantly anyway
and most teams end up with a large number of tasks that will never be tackled
and will eventually be outdated and closed untouched. Instead, only the tasks
that are relevant at the time the iteration starts should be defined, prepared
and then planned.

The main purpose of iterations is to set expectations on all sides and provide
short-term predictability and plannability for the stakeholders that need it.
Iterations should be short enough to still remain predictable and long enough to
provide enough time to finish meaningful work. The concrete iteration length for
a project must be defined when kicking off the project and can be adopted
afterwards. Iterations are a team effort and should be planned and executed
collaboratively with team members supporting each other to complete the work
that was planned.

### Roles

Our process works with flat project teams without dedicated project managers.
For any given iteration, one of the team members (a designer or engineer) will
take on the role of _"Iteration Lead"_ who is responsible for planning the
iteration and ensuring smooth execution. This is a rotating role so that every
member of the team will assume it every once in a while (unless they opt out).

Making the iteration lead a rotating role ensures that all team members hear the
perspectives of all project stakeholders and do not get stuck in only
recognizing their own perspective. It also gives everyone on the project team
the notion of ownership, responsibility and empowerment and raises them above
the feeling of being mere executors of someone else's commands.

The main responsibility of the iteration lead is to consult with the business
experts (and all other relevant project stakeholders like marketing, designers
or engineers) and prepare the iteration. Once the iteration started, any changes
to it that are requested go through the iteration lead for assessment (who might
consult with other project stakeholders for priorization).

### Iteration Preparation

The purpose of the iteration preparation phase is to define the tasks that are
most relevant to be worked on during the next iteration. The tasks assigned to
an iteration should reflect **all** of the work that is going to happen, not
only feature work - in particular they should reflect design and UX work and
purely technical tasks like refactorings as well. The prepared tasks will then
be presented to the team in the planning meeting that kicks the iteration off.
In order to prepare these tasks, the iteration lead synchronizes with the
business experts and other project stakeholders to:

- identify the most relevant tasks from each project stakeholder's perspectives;
  the goal here is to find a good balance between work on features and other
  aspects like bug fixes, refactoring, dependency updates, addressing tech debt
  in general but also addressing other requirements coming in for example from
  the marketing department or other stakeholders
- help the respective stakeholders translate feature or other change requests
  into actionable tasks; this can include discussing different options for
  implementing a change along with their potential implications and related
  effort; the iteration lead will often not have the knowledge to do that
  personally but will then involve the respective experts in these conversations
- uncover implications and hidden complexities in any of the tasks; while it is
  not possible to think every task through completely from start to end and
  eliminate all inherent risk, we try to uncover as much of it as possible in
  the preparation phase to reduce the likelihood for the team to run into
  unforeseen problems later on, potentially leading to delays and deadlocks
  then; the iteration lead might delegate this work to the respective experts
  for a particular topic
- prepare well-written issues for each of the identified tasks or spikes for
  tasks that require more research in order to be ready to be adressed
- make sure all of the preconditions are met in order to be able to work on each
  task, e.g. any necessary assets have been delivered, translations are ready or
  legal implications have been checked
- prioritize the issues so it is clear which ones need to be worked on first; in
  reality of course, priorities will sometimes overlap and the expected effort,
  potential deadlines for individual tasks etc. also need to be taken into
  account when defining the order in which tasks should be worked on

The iteration preparation phase always overlaps with the previous iteration -
while that is being executed, the next iteration is already being prepared.
Iteration leads should typically plan a full iteration period for preparation so
that when one iteration starts, the iteration lead of the next iteration starts
preparing the next one. Preparing an iteration will typically not require the
iteration lead to spend all of their time on that but can usually be done
besides contributing to the current iteration.

#### Issues

Well-prepared issues are a key element of an effective process. They provide
guidance for the project team's work, allow external parties not involved with
the project directly to get an understanding of what is happening, and can serve
as future reference to understand what was done in a project, and for which
reasons.

Good issues aim to:

- describe what is to be done and why, potentially accompanied by screenshots,
  mockups/sketches or other visuals that help understand the desired outcome; it
  might also be beneficial to add a summary of the issue's history, covering
  previous related changes or alternative approaches that have been ruled out
  and why
- include reproduction steps if the issue describes a bug; ideally those are
  visualized with a screen recording or other media
- detail concrete requirements that must be met in order to complete the issue;
  in order to prepare this list, the iteration lead might need to synchronize
  with a team member more familiar with a particular part of the code base or
  feature
- include all necessary materials that are needed for the issue; this could be
  visual assets, links to online documentation for third party libraries or APIs
  or contact details for external parties involved in an issue etc.
- bring up any open questions that need to be answered, or risks that have been
  identified and might prevent this issue from being completed
- be a discrete unit of work; issues should only contain related requirements
  and ideally not represent more than a few days of work - larger issues can
  often be broken down into multiple smaller ones, possibly even allowing work
  occurring in parallel

#### Spikes

If a particular task is associated with too many open questions or uncertainties
to be converted into a well-prepared issue, it is better to plan a spike first
in order to resolve these open questions. Spikes should have:

- a description of the original requirement that will eventually be addressed in
  an issue, potentially accompanied by screenshots, mockups/sketches or other
  visuals that help understand the desired outcome;
- a clear description of what the open questions are and how they are blocking
  an issues from being created by adding too much risk or uncertainty
- if there is any, guidance on potential solutions that should be evaluated or
  references to promising approaches
- a well-defined time-box, e.g. _"max 2 days"_

The result of the iteration preparation phase is a prioritized list of
well-prepared issues and spikes. This list of issues will then be presented to
the team in the planning meeting.

### Iteration Planning

The iteration planning meeting is a joint meeting with the entire project team,
the business experts and all other stakeholders that are involved in the
project. During the meeting, the iteration lead presents each issue to the
project team so that everyone has a good understanding of what each issue is
about and gets a chance to ask questions and/or raise any points that might have
been overlooked in the iteration preparation phase.

In the end of the planning meeting, the team collaboratively decides whether it
thinks it can reasonably work on and complete all of the issues that have been
presented to them in the planning meeting (plus past issues that are potentially
moved over from the previous iteration after having been reviewed). If the team
considers the presented issues to be too much for the iteration, they
collaboratively decide which ones are moved to a later iteration to be
considered again in the future. If any of the issues are found not to be ready
to be worked on (e.g. because dependencies of the issue are not ready), the
issue is moved to a later iteration as well.

**The iteration, once planned, is not a binding agreement.** It is still
possible for all project stakeholders to react to changes to features or
priorities and the project team cannot guarantee all planned issues to be
completed by iteration end as new challenges might only be uncovered once work
on an issue starts. The iteration plan is merely a snapshot of feature requests
and priorities at the time it is made as well as a best-effort estimate by the
project team of which issues it thinks it can complete within the iteration.
Ideally, an iteration remains unchanged once it has been planned to enable
smooth execution which also leads to increasingly predictable estimates as a
project progresses.

### Iteration Execution

After the iteration has been planned, execution starts and the planned issues
are being worked on based on their priorities. For non-trivial issues, the first
step is often to plan the implementation and necessary code changes by breaking
the issue down into small steps. This can be done by two or more team members in
a pairing session. As an issue is started to be worked on, the respective team
member(s) will self-assign it. Issues are only assigned once work on them is
actually started. Once an issue is closed via a
[pull requests](../workflow/engineering/) or if it is blocked and cannot
progress, the team member(s) will self-assign another issue from the iteration
backlog. We recommend [releasing changes](../workflow/engineering/) to
production (or at least a staging system) as they are completed.

If there are any changes requested to the iteration after the planning meeting
(e.g. due to unforeseeable changes to features or severe bugs popping up in
production), all of these potential changes are triaged by the iteration lead.
They might consult with the business experts or other project stakeholders to
determine validity and priority of the incoming requests. If an issue is
considered necessary to be added to the iteration after the planning meeting, it
will be added but another issue might have to be removed from the iteration for
it.

If an issue is blocked and cannot progress, the iteration lead is responsible to
try and solve the impediment, potentially synchronizing with the business
experts or other project stakeholders that can help resolve the situation.

Likewise, if all issues in an iteration are completed early and there is no more
work left to do, the iteration lead will synchronize with the project
stakeholders and the iteration lead of the following iteration to discuss which
issues should be added. Often that will mean moving issues from the following
iteration into the current one.
