## Full Service

In Full-Service projects we guide the client through the entire project, transforming their business problems/needs into software that solves these problems. One of the main goals here is to strike the balance between the fact that we cannot commit to a deadline for a big project, the client needing to get something that actually solves their problem, the client having no idea about software and the client not actually knowing what they need.

We can split this into 4 phases - Conceptual Design, Plan, Implementation, post-launch. We will go through the individual phases a few times per project - the first time, we build the MVP version of the project which has the smallest possible feature set while still delivering value. Each subsequent time we go through these phases we try and identify a set of features that are coherent and make a substantial improvement to the previous version of the project. These incremental releases until we reach the final product map to high-level milestones and help breaking down the project into smaller chunks where each one provides value. Ideally each of these steps results in something that is releasable to production so it could even be tested with real users but that's not a necessity for the process.

### Conceptual Design

The goal of the conceptual design phase is to understand what the problem is, what a proper solution is and just how much we need to do to add value.

The conceptual design phase of the second pass of the project must overlap with the implementation phase of the previous pass so we don't end up in a situation where implementation of phase x is completed but the conceptual design phase of pass x+1 is not far enough for implementation for that pass to begin already and a few team members end up being blocked.

### Discovery Workshop

In the Discovery Workshop we try to understand the business problem that's being solved; some key questions could be:

-   what does the client want to achieve?
-   formulate the goal in 1-2 sentences maybe?
-   have things been tried before and worked/did not work? if any, why did those things work/not work?
-   <I'm actually not sure about this>
-   <I think this only needs to happen once per project, not per milestone?>
-   <is this where Ghislaine's data/analysis-based approach fits in?>
    In this phase, we define the feature set (or actually, this is the set of problems and solutions) we want to focus on in this iteration of the conceptual design phase - this is either the feature set for the MVP or one for a subsequential extension package to the MVP. <We could even say we aim to find a feature set that we could complete in a fixed timeframe, e.g. 6 weeks>
    This meeting should be joined by **all** stakeholders of the project which is likely everyone who was in the initial kick-off meeting.

### Personas Workshop

The purpose of this workshop is to establish consensus around the 'who' and the 'why' for a design project. The personas built on this step will serve as a valuable tool for design collaboration and prioritization of features.

#### Who should attend this workshop?

**Project stakeholders**

They are the ones that need to agree on the design direction of the project. This can include both business and engineering people.

**The user experts**

They are the ones closer to the users and can provide information or data regarding their goals, pain points, and behavior patterns. It is desirable to integrate all different points of view at this stage, whether it is from a sales representative, customer support specialist, or a domain expert.

#### What is needed for this workshop

Previous user research, data sources like event logs, metrics and analytics, user feedback is required in order to validate the personas.

#### What will happen during the workshop

- Revealing the users through facilitated discussion

Discussion and debate are critical activities in this process, and all opinions must be represented. The goal of this session is to collect everyone's assumptions and thoughts regarding the users, who they are, and recall their experiences with them.

- Affinity Mapping to identify clusters

An affinity map is a method used to organize large amounts of data into groups or themes based on identified connections and patterns. For this, we write down all findings, observations, or ideas on sticky notes and look for concepts that are related until clear groups emerge. These clusters are then named and ranked by importance to decide which ones should be prioritized according to business goals.

- Validating the clusters

Personas are representations of the users, so the more detailed the level of data used to shape them, the better. Post-validate the accuracy of the clusters identified in the previous step against facts, analytics data, comments, etc. For areas where no data or evidence exists, we can consider doing additional user research if necessary, employing methods such as surveys, focus groups, contextual inquiry, etc.

- Constructing and sharing the personas

Identify each cluster with a representative name, and add any missing details to complete the persona, along with their goals, behaviors, and motivations.

### User Journey Workshop

During this workshop, the user's tasks and steps are analyzed in order to understand how they achieve their goals, why they might fail to achieve them and what opportunities exist to improve this process.

#### What is needed for this workshop

An overview of the existing screens or functionality should be provided for this workshop. These can be presented in as roadmaps, wireframes, flowcharts, funnels, or any other artifact that explicitly depicts the existing or potential user journeys.

#### Who should attend this workshop

**Project stakeholders**

They are the ones that need to agree on the design direction of the project. This can include both business and engineering people.

**The user experts**

They are the ones closer to the users and can provide information or data regarding their goals, pain points, and behavior patterns. It is desirable to integrate all different points of view at this stage, whether it is from a sales representative, customer support specialist, or a domain expert.

#### What will happen during the workshop

-   Deconstructing the user journey: Task Analysis
    Task analysis is a way of examining the user journey steps and break them down into sets of small tasks that users go through to complete goals. Once this step is down, we can categorize the tasks by the type of effort required by the user, whether it is decision-making, wayfinding, error or problem solving, etc.

-   Optimize the journey: Finding ways to remove or automate steps
    Prepare what needs to be done in the form of functionality requirements, content strategy, or changes to the existing site or app structure.

-   Create prototypes to present the improved user journey.

### Design Workshop

-   Do we need a dedicated phase/workshop for finding a design language that works for the client?
    _ ask clients to share designs they like
    _ maybe create pinterest board with designs we think would make sense \* we need to find a visual style in this phase, not a full fledged, complete, client-accepted design for all of the UI of the app
    I think we need this workshop in the first iteration of the conceptual design phase. I think a good approach would be to build wireframes/mockups for 1 or 2 key features as example and do iterations with the client until they are happy with the approach and we can use that to develop a "design language". Actually turning this design language into a design system and wireframes that the engineering team can use should be part of the implementation phase. I'd envision a setup where the client collaborates with us on making flow sketches for the user journeys, then does a few iterations with the design team until a design language has been found and the next time they see anything beyond that is a few weeks later when we present them with the first deployment on the staging system after the first 1 or 2 iterations in the implementation phase.

### Planning

Next we go to the planning phase; for the feature (set) defined and validated in the user journeys step, we think about whether time or scope is fixed for building this feature set (only one can be fixed); if time is fixed, we try and identify aspects of the feature that could be scoped down if we have to later. We then try and give the customer an outlook for steps and an overall duration (this is an estimate, not a deadline).

The design and the list of documents that came out of the user journeys step are the foundation for the implementation phase. Of course they can change any time but it's what we start with. <We could give this a name, e.g. the "bundle" or whatever>.

### Implementation

The implementation phase combines both implementing the design and writing the code. All of the work should be tracked on the same board, following our iteration approach we're already using and that's already described in a lot of detail in our playbook. In the first pass of the project this could mean that engineering can only start with a slight delay as the designers need to prepare enough wireframes so the engineers are not blocked.
We do our normal iterations-based process and planning, creating concrete issues based on the <bundle> that we bundled in the planning step.

During implementation, we keep a staging system updated so all stakeholders can follow along process. We ask our clients to join the iteration meetings (<or we could have dedicated meetings for them where we present them what we did and ask for feedback>). We will build slices of the system at once, that is the design, backend and frontend code of something so we can release these 3 things together, can be sure they work together and move on to the next slice (see https://basecamp.com/shapeup/3.2-chapter-10#integrating-in-one-place for a good explanation).

#### Design implementation workflow

We create visual mockups of the currently regarded aspect of the project.
For the project itself this means creating a visual design guide that executes
the foundation of the design work layout out in the concept phase, defining
colors, typographic rules and basic layout. For indivdual features we only
create mockups for the aspects of a feature that deviate from the general guide
or need more detailed definition, such as individual UI states.

We use organize the design files in meaningful way as well as by versioning and
request immediate feedback, both from our development team and stakeholders on
the client’s side. Incoming feedback will be gathered and considered for the
next iteration.

### Post-launch

Post-launch we can operate the system for the client and potentially also validate what we built actually works for users. Ideally we'd be able to do this after every pass of the full-service phase.
