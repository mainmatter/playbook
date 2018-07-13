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

## Documentation

Great for reference and sharing knowledge

But can get stale quickly and invisibly (wikis)

Self-documenting code

Tests as documentation

## Communication

Frequent and asynchronous

Calls and screenshares when it makes sense

Interruptions are really disruptive, be careful with them

Face-to-faces aren't recorded anywhere, take-aways need to be captured somewhere

### Meetings
- only as last resort
- with clear objectives
- timeboxed
- minimum set of people
- don't wait for people who are late
- attend those you've confirmed to be going
- use `Maybe` or simply rejetct meetings you might not attend

### Slack
- favor public over private
- don't expect immediate answers
- @here only in an emergency
- **ephemeral content** only

Anything relevant to issues or documentation should be persisted in their respective issue/doc

### Issue trackers
- be clear
- issues as tokens for conversation
- make use of rich media (screenshots or screen recordings)

