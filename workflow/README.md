# Workflow

## Feature Branches/Pull Requests

All changes must go through feature branches and Pull Requests. No changes are
ever committed to the `master` branch (or whatever the main branch of the
respective repository is) directly. Pull Requests are only merged once quality
has been assured by tests and reviews - we generally value quality higher than
pushing out changes and getting things merged faster.

We agree on the following set of rules for Pull Requests:

* Pull Requests have to have a proper description for what changes are included
  in it and how those can be tested. If a Pull Request relates to or closes an
  issue, add `Closes #<issue>` or `Relates to #<issue>` to the description.
  _Clients might have additional requirements for Pull Request descriptions and
  commit message formats._ 
* All changes require a decent test coverage (unless changes are purely visual,
  e.g. CSS only and there is no visual regression testing environment set up
  for the project).
* Pull Requests with conflicts or failing tests or without any reviews will not
  be merged.
* Pull Requests marked as `[WIP]` will not get reviewed unless the PR author
  explicitly asks for review.
* Pull Requests need to be up to date with the target branch before merging.
* Pull Requests will not be reviewed if there are conflicts or failing tests
  (unless the PR author explicitly asks for review).
* Pull Requests will not be merged when there are unresolved discussions on
  specific changes. If things cannot be resolved among 2 people we should
  generally aim for a team decision on the topic.
* All communication relating to a Pull Request happens on the github/gitlab
  page for that Pull Request. If something was discussed on Slack or elsewhere,
  post a summary on the Pull Request page.
* There **can** be multiple Pull Request for the same issue.
* Everybody who is asked to review a Pull Request **must** leave a reaction.
* Pull Requests should only contain related changes. Unrelated changes should
  be extracted into a separate Pull Request.
