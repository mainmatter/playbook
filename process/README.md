# Process

We maintain a lean process that supports the team rather than stand in its way.
It ensures the right things are being worked on at the right time and provides
a reasonable level of short term predictability. At the same time it remains
flexible enough to adapt to unexpected events. Our process does not depend on
specific tools and works for projects and teams in all environments.

## Sprints

We work in sprints that are either 1 or 2 weeks long (depending on the client
and project at hand, either sprint length might be more suited; we choose one
when beginning a project and will adapt later on if necessary). Sprints are a
team effort and we plan and execute them collaboratively.

### Roles

Our engineering teams are generally flat teams without hierarchies. For any
given sprint, one of the engineers will take on the role of _"Sprint Lead"_ who
is responsible for planning the sprint and ensuring smooth execution. This is a
rotating role so that every engineer in the team will assume it every once in a
while (unless they opt out).

The main responsibility of the Sprint Lead is to consult with the product owner
and prepare the sprint. Once the sprint started, any changes to it that are
requested, go through the Sprint Lead for assessment (and potentially the
product owner for prioritization).

### Sprint Preparation

The goal of the sprint preparation phase is to define the issues that are most
relevant to be worked on during the next sprint. These issues will then be
presented to the team in the planning meeting that kicks the sprint off. In
order to prepare these issues, the sprint lead synchronizes with the product
owner to:

* identify the most relevant issues both from a product perspective and from an
  engineering perspective; the goal here is to find a good trade-off between
  work on features and other things that are not directly related to features
  like refactoring, dependency updates etc.
* help the product owner translate feature requests into actionable issues;
  this includes explaining different options for implementing a feature and
  their potential implications, breaking big changes down into smaller,
  iterative ones and define concrete requirements and expected results for each
  issue
* make sure all of the preconditions are met in order to be able to work on
  something, e.g. any necessary assets have been delivered, translations are
  ready or legal implications have been checked
* prioritize the issues so it is clear which ones need to be worked on first
* identify potential solutions, implications and uncertainties for each issue;
  if an issue has too many of the latter, we will plan a spike instead of the
  issue to gather more information on the issue first and once we have that,
  plan the issue again for a later sprint

The result of the sprint preparation phase is a prioritized list of issues with
well-formulated descriptions, detailed requirements and expected results as
well as required assets and/or mockups. This list of issues will then be
presented to the team in the planning meeting.

### Sprint Planning

The sprint planning meeting is a joint meeting with all of the engineering
team, the product owner and potentially anyone else who can provide
information or answer questions on individual issues. During the meeting, the
sprint lead presents each issue to the engineering team so that everyone has a
good understanding of what each issue is about and gets a chance to ask
questions and/or raise any points that might have been overlooked in the sprint
preparation phase.

In the end of the planning meeting, the team collaboratively decides whether it
thinks it can reasonably work on and complete all of the issues that have been
presented to them in the planning meeting (plus past issues that are
potentially moved over from the previous sprint). If the team considers the
presented issues to be too much for the sprint, they collaboratively decide
which ones are moved to a later sprint to be considered again at a later point.
If any of the issues are found not to be ready to be worked on (e.g. because
dependencies of the issue not being ready), the issue is moved to a later
sprint as well.

### Sprint Execution

After the sprint has been planned, execution starts and the planned issues are
being worked on based on descending priorities. For non-trivial issues, the
first step is often to plan the implementation and necessary code changes by
breaking the issue down into small steps. This can be done by two engineers in
a pairing session. As an issue is started to be worked on, the respective
engineer(s) will self-assign it (not all issue trackers allow assigning issues
to more than one person at once so if multiple engineers collaborate on an
issue, they might have to choose one to assign it to). Issues are only assigned
once work on it is actually started. Once an issue is closed via a
[pull requests](../workflow/) or if it is blocked and cannot progress, the
engineer(s) will self-assign another issue from the sprint backlog.

If there are any changes requested to the sprint after the planning meeting
(e.g. due to unforeseeable changes to features or severe bugs popping up in
production), all of these potential changes go through to sprint lead for that
sprint for assessment. The sprint lead might consult with the product owner to
determine validity and priority of the incoming request. If an issue is
considered necessary to be added to the sprint after the planning meeting, it
will be added but another issue might have to be removed from the sprint for
it.

If an issue is blocked and cannot progress, the sprint lead is responsible to
try and solve the impediment, potentially synchronizing with the product owner
or other people that can help resolve the situation. Likewise, if all issues in
a sprint are completed early and there is no more work left to do, the sprint
lead will synchronize with the product owner and the sprint lead of the
following sprint to discuss which issues should be added. Often that will mean
moving issues from the following sprint into the current one.
