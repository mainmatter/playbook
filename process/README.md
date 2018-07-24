# Process

We maintain a lean process that supports the team rather than stand in its way.
It ensures the right things are being worked on at the right time and provides
a reasonable level of short term predictability. At the same time it remains
flexible enough to adapt to unexpected events. Our process does not depend on
specific tools and works for projects and teams in all environments.

## Iterations

We work in iterations that are either 1 or 2 weeks long (depending on the
client and project at hand, either iteration length might be more suited; we
choose one when beginning a project and will adapt later on if necessary).
Iterations are a team effort and we plan and execute them collaboratively.

### Roles

Our engineering teams are generally flat teams without hierarchies. For any
given iteration, one of the engineers will take on the role of _"Iteration
Lead"_ who is responsible for planning the iteration and ensuring smooth
execution. This is a rotating role so that every engineer in the team will
assume it every once in a while (unless they opt out).

The main responsibility of the Iteration Lead is to consult with the product
experts (and all other relevant project stakeholders) and prepare the
iteration. Once the iteration started, any changes to it that are requested
go through the Iteration Lead for assessment (who might consult with other
project stakeholders for priorization).

### Iteration Preparation

The goal of the iteration preparation phase is to define the issues that are
most relevant to be worked on during the next iteration. These issues will then
be presented to the team in the planning meeting that kicks the iteration off.
In order to prepare these issues, the Iteration Lead synchronizes with the
product experts and other project stakeholders to:

* identify the most relevant issues both from a product perspective and from an
  engineering perspective; the goal here is to find a good balance between work
  on features and other things that are not directly related to features like
  bugs, refactoring, dependency updates, tech debt in general
* help the product experts translate feature requests into actionable issues;
  this includes explaining different options for implementing a feature and
  their potential implications, breaking big changes down into smaller,
  iterative ones and define concrete requirements and expected results for each
  issue
* make sure all of the preconditions are met in order to be able to work on
  something, e.g. any necessary assets have been delivered, translations are
  ready or legal implications have been checked
* identify potential solutions, implications and uncertainties for each issue;
  if an issue has too many of the latter, we will plan a spike instead of the
  issue to gather more information on the issue first and once we have that,
  plan the issue again for a later iteration
* ensure issues include all necessary background information to understand the
  context and motivation for it; this might include recapitulations of
  discussions that lead to the decision to implement an issue in a particular
  way etc.
* prioritize the issues so it is clear which ones need to be worked on first

The result of the iteration preparation phase is a prioritized list of issues
with well-formulated descriptions, detailed requirements and expected results
as well as required assets and/or mockups. This list of issues will then be
presented to the team in the planning meeting.

### Iteration Planning

The iteration planning meeting is a joint meeting with all of the engineering
team, the product experts and other project stakeholders that can provide
information or answer questions on individual issues. During the meeting, the
iteration lead presents each issue to the engineering team so that everyone has
a good understanding of what each issue is about and gets a chance to ask
questions and/or raise any points that might have been overlooked in the
iteration preparation phase.

In the end of the planning meeting, the team collaboratively decides whether it
thinks it can reasonably work on and complete all of the issues that have been
presented to them in the planning meeting (plus past issues that are
potentially moved over from the previous iteration). If the team considers the
presented issues to be too much for the iteration, they collaboratively decide
which ones are moved to a later iteration to be considered again at a later
point. If any of the issues are found not to be ready to be worked on (e.g.
because dependencies of the issue not being ready), the issue is moved to a
later iteration as well.

**The iteration, once planned, is not a binding agreement for either side.** It
is still possible for all project stakeholders to react to changes to features
or priorities and the engineering team cannot guarantee all planned issues to
be completed by iteration end as new challenges might only be uncovered once
work on an issue starts. The iteration plan is merely a snapshot of feature
requests and priorities at the time it is made as well as a best-effort
estimate by the engineering team of which issues it thinks it can complete
within the iteration. Ideally though, a iteration remains unchanged once it has
been planned to enable smooth execution which also leads to increasingly
predictable estimates as a project progresses.

### Iteration Execution

After the iteration has been planned, execution starts and the planned issues
are being worked on based on descending priorities. For non-trivial issues, the
first step is often to plan the implementation and necessary code changes by
breaking the issue down into small steps. This can be done by two engineers in
a pairing session. As an issue is started to be worked on, the respective
engineer(s) will self-assign it (not all issue trackers allow assigning issues
to more than one person at once so if multiple engineers collaborate on an
issue, they might have to choose one to assign it to). Issues are only assigned
once work on it is actually started. Once an issue is closed via a
[pull requests](../workflow/) or if it is blocked and cannot progress, the
engineer(s) will self-assign another issue from the iteration backlog.

If there are any changes requested to the iteration after the planning meeting
(e.g. due to unforeseeable changes to features or severe bugs popping up in
production), all of these potential changes go through to iteration lead for
that iteration for assessment. The iteration lead might consult with the
product experts or other project stakeholders to determine validity and
priority of the incoming request. If an issue is considered necessary to be
added to the iteration after the planning meeting, it will be added but another
issue might have to be removed from the iteration for it.

If an issue is blocked and cannot progress, the iteration lead is responsible
to try and solve the impediment, potentially synchronizing with the product
experts or other project stakeholders that can help resolve the situation.
Likewise, if all issues in an iteration are completed early and there is no
more work left to do, the iteration lead will synchronize with the project
stakeholders and the iteration lead of the following iteration to discuss which
issues should be added. Often that will mean moving issues from the following
iteration into the current one.
