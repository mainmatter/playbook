# Simplabs Ember.js Playbook

This document is about gathering the largely unwritten, informal practices of the Ember.js community and Simplabs, and putting together a cohesive and detailed guide for developing idiomatic Ember.js applications. Consider it as a folklore addendum to the official Ember.js guides.


## Table of Contents

- [General Expectations](#general-expectations)
- [Code Style](#code-style)
- [Ember Data](#ember-data)


## General Expectations

- Whenever possible, use Ember addons for functionality that isn't application specific.
- All features should be tested with unit, integration, and/or acceptance tests.


## Code Style

A major selling point of Ember.js is that Ember.js applications are all structured in a similar fashion. This is largely due to the conventions that the frameworks enforces or favors, but also due to the diligence of individual developers. Code written using Ember.js is particularly idiomatic and may not always be in agreement with the larger JavaScript community, which this section addresses.

In general, static analysis tools such as [ESLint](http://eslint.org/) should be used to automate detection of stylistic problems, though not all issues can be detected by these methods. Namely, the [`ember-suave`](https://github.com/DockYard/eslint-plugin-ember-suave) plugin should be used.

| Rule | Reason |
|:-----|:-------|
| Use variables for naming values | Even when it's not necessary to use a variable, the name of the variable serves as documentation. |
| Use verbs to name functions | A function or method name should always contain a verb. |
| Use the framework when possible | Sometimes the functions provided by Ember.js are more readable in English, such as `isEmpty(value)` vs. `value == null`. |
| Use computed property macros when possible | It saves repetitive code from being written. |
| Use Ember.js naming conventions | Names should be consistent with the framework's idioms, i.e. for mixins, `NamedMixin`. |
| Use specific modules | Don't just `import Ember from 'ember'`, import named modules instead, which should allow for smaller builds. |
| Use named actions | Instead of `(action (mut key))`, prefer named actions that perform the action to avoid application logic in templates. |
| Avoid business logic in helpers | Business logic in template helpers are a code smell, it should belong in JavaScript, not Handlebars. |
| Avoid comments to describe application code | Comments are a code smell that indicate that if something requires additional explanation, it may not be leveraging the conventions of the framework and needs to be refactored. |
| **Never** use observers | Observers are *hard to reason about*. Prefer alternatives such as computed properties. |
| **Never** use action helpers without an event | Although it works and it defaults to the click event, it is preferred to use `onclick={{action ...}}`. |
| **Never** use `sendAction` | Prefer passing actions directly as attributes to components instead. |


## Ember Data

| Rule | Reason |
|:-----|:-------|
| Use JSON API | This is the preferred adapter and serializer for Ember Data, and APIs not following this format should adapt to its idioms. |
| Use `belongsTo`/`hasMany` for relationships | This is preferred over `get` on the relationship, since the former may resolve asynchronously. |
| Avoid computed properties in models | When a computed property is not reused in multiple places, it is preferred to define computed properties where they are used. |
| Avoid mocking records in tests | Ember Data records have complex behavior which may not easily be mocked. |
| Avoid explicit inverses and `attr` types | Ember Data automatically finds inverse relationships and omitting the type means that the value will not be transformed. |
