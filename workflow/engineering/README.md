# Workflow

Our engineering workflow is lean and based on established practices from the
open source community. It supports distributed project teams and asynchronous
communication and does not rely on any particular tools.

## Issues

We work in 1 or 2 week long [iterations](../../process) and break all change
requests down into issues. A list of well-prepared and well-understood issues
constitutes each iteration.

As an issue is started to be worked on, the respective engineer(s) will
self-assign it (not all issue trackers allow assigning issues to more than one
person at once so if multiple engineers collaborate on an issue, they might
have to choose one to assign it to). Issues are only assigned once work on them
is actually starts - we do no pre-assign issues during planning or after that
to avoid situations where already assigned but not yet started issues are
blocked for everyone else to work on.

Although issues should be well-understood and well-prepared before they are
even planned for a particular [iteration](../../process), for more complex
issues it is often beneficial to prepare them further before starting
implementation. For these kinds of issues, the first step is to break them down
into smaller, concrete steps (which is often a great thing to do in a
[pairing session](#pairing)).

Once an issue is resolved via a [pull request](#feature-branches) or if it is
blocked, the engineer(s) will self-assign another issue from the iteration
backlog. If an issue is blocked and cannot progress, the engineers working on
it contact the [iteration lead](../../process) who - in collaboration with
whomever necessary - tries to resolve the impediment. 

All discussions around an issue should happen on the particular issue's page.
Of course at times it is convenient to have discussions in person or over
online chat but even in those cases, a brief summary of the discussed points
and the outcome should be posted on the issue. This is a necessity for
distributed teams and allows everyone access to all of the context of a
particular issue at any time. Even teams that are not distributed benefit from
this practice as all information that is relevant to a particular issue is and
remains available for everyone interested.

## Feature Branches/Pull Requests

All changes to a project are done in branches. Nothing should generally be
committed to the `master` branch (or whatever the project's main branch is)
directly. There should generally be at least one branch per issue - for larger
issues it often makes sense to split separate steps into separate branches and
merge them one after another.

All changes in a branch should also be related to the same _"topic"_ - e.g one
branch should not address more than one issue or change entirely unrelated
aspects of the application.

If the testing setup, hosting environment and potentially other requirements
present for the delivered product allow it, we recommend setting up continuous
deployment so changes get deployed to production as the respective pull request
gets merged. If that is not possible, we recommend setting up continuous
deployment for a staging system at least so all project stakeholders can follow
the project's progress.

### Commits

Just as all changes in a branch should be related to the same _"topic"_, all
changes within a single commit should be related to the same step in
implementing that topic. Each commit should only do one _"thing"_, ideally not
touching on too many different parts of the code base. All commits should also
have good [commit messages](https://git-scm.com/docs/git-commit#_discussion)
that make clear what the particular commit does.

### Pull Requests

Branches are not merged back to the `master` branch directly but via pull
requests (or whatever mechanism the tool used in the particular project
provides). The pull request should have a meaningful description with a rough
overview of the changes included in it and the issue it refers to. If the pull
request closes an issue, the pull request's description should contain a
comment like _"closes #<issue>"_ - most tools will then automatically close the
referenced issue once the pull request is merged.

As with issues, all discussions around a particular pull request should happen
on the pull request's page. If discussions happen in person or over online
chat, a summary should be posted to the pull request so all information and
context is accessible to everyone interested at any time.

It is perfectly fine to create pull requests early on while implementation is
still ongoing and they are not yet ready to be reviewed or merged. Doing so is
a good way to get early feedback and share the status of something with the
rest of the team. Such pull requests should be marked as _"Work in progress"_
though, usually be prefixing their title with `WIP:`. Some tools will even
block _"Work in progress"_ pull requests from being merged.

### Reviews

Pull requests are reviewed before they get merged back into the project's main
branch; pull requests that have not been reviewed should usually not get
merged. In order for a pull request to be ready for review, though, it has to
meet some pre-requisites:

* the branch has no conflicts with the project's main branch
* the changes in the branch are covered by proper tests and CI is passing
* the branch is not marked as _"work in progress"_
* the commit history of the pull request has been cleaned up, e.g. WIP commits
  have been squashed, debug commits have been removed etc.

When a pull request is ready for review, its author should actively ask for
another team member to review - ideally via the tools used in the particular
project if those support it or over online chat etc. if not. Everyone asked for
review should reply in a timely manner - even if it's to ask for someone else
to be chosen if they do not have the time to do a proper review.

Once the reviewer approved the changes and CI passes, the pull request can be
merged by any team member including the pull request's author. If the original
reviewer would like a second review by another team member, potentially one
more familiar with the aspects of the application that are changed by the
particular pull request, they will ask for it. In case anything comes up in the
review that cannot be resolved between the reviewer and the author of the pull
request, a third person should be brought in to resolve the deadlock.

#### Review Guidelines

Reviewing and potentially criticizing other people's work is a sensitive issue
which is why we follow a set of rules when doing so:

* be polite: you are reviewing another person's work that they put time and
  energy in - don't be dismissive and keep a friendly tone
* be clear: don't be ambiguous but clearly address issues or aspects that are
  good about a particular change
* be positive: while the review's main purpose is to identify mistakes or bad
  patterns that are not caught by CI, reviews are also a good opportunity to
  give feedback on changes that are particularly good
* be helpful: if a pull request contains a particular change you don't think
  should be merged, give the author some guidance by introducing an alternative
  to the change that does not come with the same drawbacks

## Testing

Testing is an integral part of our work and a necessity for delivering high
quality results that also do not deteriorate over time. We generally do not
merge untested changes and would usually not even review them as we cannot know
whether the code under review actually works for all relevant scenarios.

While different languages and frameworks provide different testing mechanisms,
a good approach generally is

* leveraging small and isolated test cases (e.g. unit tests) for the majority
  of the test cases including edge cases
* leveraging higher level test cases (e.g. integration or acceptance tests) for
  ensuring the main features and flows of an application work as expected

We require continuous integration to be set up in all projects we work on.
While it should always be possible to run tests locally, they also need to run
automatically for every pull requests and after each merge to the project's
main branch.

## Refactoring

Refactoring is an essential part of any software project. As requirements
change and frameworks and languages progress, code written in the past will
eventually not be ideal anymore in the present and future. Constant refactoring
ensures the code base does not become stale and improves productivity overall
by keeping technical debt at a minimum and avoiding big, painful and risky
rewrites that otherwise often become necessary down the line.

When working on the code base, we will keep an eye open for parts that need to
be refactored and either do so immediately in case of simple changes, or bring
them up as individual issues for one of the next [iterations](../../process).

## Pairing

Pairing is a great way of spreading knowledge throughout the team, on-boarding
new team members or resolving blockers. We encourage everyone to pair and will
also pair with our clients' internal engineers to help them level up their
experience.
