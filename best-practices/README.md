# Best Practices

## Refactoring

Refactoring speeds development overall, facilitates change

Improves modularity, legibility, testing, code robustness

Prefer continuous refactoring over big bang refactors

Include small refactors in feature and bug PRs

Separate bigger refactors in their own PRs

Aim for code that self-documents the business domain

## Testing

Outside-in (acceptance -> integration -> unit tests) as much as possible

Of course, that's hard to accomplish, so...
- some happy paths in acceptance/integration
- balance of integration and unit tests

Behavior-driven

Dealing with external dependencies

## Pairing

Spreads knowledge, opens up human silos, speeds problem-solving and onboarding

Examples:

- when tackling a new issue

- when you're stuck always (good to look at the problem with a second pair of eyes, often you discover what the problem is while you explain it to someone else)

Not everybody likes it, or has tried it, so... (strategies to implement it)

Don't overdo it