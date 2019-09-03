# Full Service Project Flow

## Full Service

In Full-Service projects, we guide the client through the entire project,
transforming their business problems through all-encompassing software
solutions.

One of the main goals here is to strike a balance between the fact that we
cannot commit to a deadline for a big project, the client needing to get
something that solves their problem, the client having no idea about software
and the client not knowing what they need.

We can split this into 4 phases - Conceptual Design, Plan, Implementation,
post-launch. We will go through the individual stages a few times per project -
the first time, we build the MVP version of the project, which has the smallest
possible feature set while still delivering value. Each subsequent time we go
through these phases, we try and identify a set of features that are coherent
and make a substantial improvement to the previous version of the project. These
incremental releases until we reach the final product map to high-level
milestones and help to break down the project into smaller chunks where each one
provides value. Ideally, each of these steps results in something releasable to
production so it could even be tested with real users, but that's not a
necessity for the process.

### Conceptual Design

The goal of the conceptual design phase is to understand what the problem is,
what a fitting solution is, and how much we need to do to deliver value. The
conceptual design phase comprises both definition and ideation activities. It
might be the case that after implementation, only the ideation phase is needed.
It is possible to only have an ideation loop to generate new ideas and skip
definition.

The conceptual design phase of the second pass of the project must overlap with
the implementation phase of the previous pass, so we don't end up in a situation
where implementation of phase x is completed but the conceptual design phase of
pass x+1 is not far enough for implementation for that pass to begin already,
and a few team members end up being blocked.

### Definition Activities

Before we can begin to create a solution for a client, we need to first
thoroughly analyze the situation to determine the best course of action.

The **Discovery Workshop** describes the activities that help to answer the
questions: What is the problem? What type of solution is needed? How should the
solution help to solve the problem?

The **Personas Workshop** introduces the principles, processes, and practices of
User-Centered Design. Through the development of personas, the client and team
get to know and understand the people whose needs and goals the solution should
satisfy.

The **User Journey Workshop** introduces tasks analysis, which is a way of
understanding the content and tasks that will form the basis for the solution
being developed.

The **KPI's Workshop** defines success metrics for the solution, which helps
both the client and the team to align on goals and objectives and make better
decisions.

#### Who needs to participate on the workshops?

- **Project stakeholders**

They are the ones that need to agree on the design direction of the project.
This can include both business and engineering people.

- **The user experts**

They are the ones closer to the users and can provide information or data
regarding their goals, pain points, and behavior patterns. It is desirable to
integrate all different points of view at this stage, whether it is from a sales
representative, customer support specialist, or a subjet matter expert. If the
project's target audience is inside the client's company, we advise to bring in
people from the corresponding department.

## Planning

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

## Implementation

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

## Post-launch

Post-launch we can operate the system for the client and potentially also
validate what we built works for users. Ideally, we'd be able to do this after
every pass of the full-service phase.

## Test and Validation

Let's include something about user interview or similar mechanisms  **after
release** - a validation step in which we ensure that what we built is actually
what users want.

**Testing with users**

Data analysis and survey methods can be used to determine a potential subset of
users that would be most representative for testing. In this way, we can gather
more valuable insights and feedback.

We would outline the right survey method to recruit potential test users,
qualify them, and design the experiments.
