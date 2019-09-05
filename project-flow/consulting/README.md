# Consulting Project Flow

In consulting projects, we work within our clients' organizational structures,
supporting or leading product initiatives and making the client's in-house teams
more efficient.

## Product Team Introduction

Our consultants will become part of a pre-existing team, working within the
client's engineering infrastructure and often touch on existing applications and
systems. In order to be most effective in that new environment, they must know
and understand its constituent parts. Therefore we ask clients to introduce our
consultants to:

- their in-house team structure and engineering process (for clients lacking an
  effective process, we can introduce [ours](./../../process))
- their engineering infrastructure, covering tools like version control systems,
  issue trackers, Continuous Integration and Continuous Deployment setups, VPNs
  etc.
- a high-level overview of the overall system architecture, covering everything
  from the database to message bus systems, external APIs, the main backend
  system(s), frontend application(s) etc. - like the introduction to the
  fundamentals of the client's business, this information may not be directly
  linked to our consultants daily work, but is valuable as context
- a more detailed explanation of the architecture and design of the
  application(s) our consultants will directly be working with; if there are any
  known issues with the application, we ask our clients to explain those to us
  as well

Our consultants will also require accounts and access to all relevant systems
and tools our clients use.

### Application Review

In most consulting projects, our consultants will work on one or more
pre-existing applications. This requires good familiarity with the codebase of
these applications to be most effective. We usually recommend our consultants
take a little extra time at the beginning of a project familiarizing themselves
with the applications and the codebases, setting up their local development
environment as well as potentially required accounts and data. Having this as a
dedicated step, instead of part of the consultants' first contributions to the
codebase, allows for a smoother start afterwards.

Also, as our consultants are getting themselves set up and have a more in depth
look at the codebase, we recommend they review the application's code for
noticeable or problematic patterns at the same time. Doing that, they will often
be able to identify the causes of existing issues and impediments as well as
uncover new and previously unknown problems. For each of the review findings, we
will give an explanation going into detail on the findings' negative effects,
recommend a way of addressing the issue as well as provide an assessment for the
severity along with a recommended priority for addressing the respective
finding. To conclude the review, we will schedule a meeting with the client's
in-house team to explain and discuss the outcome of the review.

After the introductory phase has been completed with the review, we continue to
the project's main phase, which is either Team Augmentation or delivering a
particular project for the client.

## Team Augmentation

In team augmentation projects, our consultants merge with the client's in-house
product team. They will integrate with the client's internal organizational
structure like any internal employees for four days a week (as we reserve 1 day
per week for our open source contributions), bringing their know-how and
experience to the team and thus increasing the team's velocity and quality of
output.

### Regular on-site time

Our consultants are distributed and we work with our clients remotely. Since
Team Augmentation is driven by close collaboration between our consultants and
the client's team, which is made more efficient by a good personal relationship
between all team members, we recommend for our consultants to spend some time
on-site with the client's team on a regular basis (a good interval being a few
days every 6 weeks). We also recommend our consultants spending the first week
of the project on-site with the client's team for a smoother start.

### Leveling up

Team Augmentation projects deliver double value for our clients and their teams.
Our consultants will actively support the client's team with new and ongoing
product initiatives, thereby increasing the team's velocity whilst sharing their
unique expertise and leveling team members up as they collaborate. That way they
provide sustainable value that our clients continue to benefit from even after
our consultants leave.

We apply a number of techniques in order to share our experience and know-how
and make teams more effective:

- pair programming with the client’s developers to guide them face-to-face; this
  can be done on-site but also remotely
- reviewing pull requests, giving detailed feedback, explanations and context so
  that the team internalizes best practices and patterns
- performing workshops and demos on particular topics that we see the team
  struggling or lacking experience with
- identifying and removing impediments that negatively affect the team's
  productivity
- identifying and fixing quality issues in the app that lead to suboptimal
  results

## Project Delivery

Besides augmenting the client's in-house engineering team, our consultants can
take on full projects (either an initiative in a pre-existing application or an
entirely new one), complete that independently of the client's team and hand it
back to the them once complete. In this case, our consultants will form an
engineering team of their own within the client's organisation, working closely
with the client's product managers and designers.

### Handover

For projects that our consultants work on independently from our client's
in-house engineering team, it is important to hand them over back to the team in
a way that enables them to extend and maintain these projects in the future.

As the implementation of the project advances, we will share our progress with
the client’s in-house team. If we are to integrate new patterns, dependencies or
refactor parts of an existing codebase, we will explain what is being done, the
motivation behind each of these changes and how the code will be maintained as
the project moves forward. Once the project is completed, we recommend
conducting a workshop with the client's team to familiarize them with the
outcome. Our consultants can accompany the team for some time after handing over
a project in a [Team Augmentation](#team-augmentation) setup to ensure a smooth
transition.
