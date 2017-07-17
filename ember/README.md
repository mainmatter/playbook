# Simplabs Ember.js Playbook

This document is about gathering the largely unwritten, informal practices of the Ember.js community and Simplabs, and putting together a cohesive and detailed guide for developing idiomatic Ember.js applications. Consider it as a folklore addendum to the official Ember.js guides.


## Table of Contents

- [General Expectations](#general-expectations)
- [Naming Conventions](#naming-conventions)
- [Ember Objects](#ember-objects)
- [Ember Components](#ember-components)
- [Ember Data](#ember-data)


## General Expectations

A major selling point of Ember.js is that Ember.js applications are all structured in a similar fashion. This is largely due to the conventions that the frameworks enforces or favors, but also due to the diligence of individual developers. Code written using Ember.js is particularly idiomatic and may not always be in agreement with the larger JavaScript community, which this document addresses.

- Stick to the idioms of the framework. Do not try to re-implement what is already provided, i.e. network, data, DOM manipulation, since it will break assumptions in unexpected ways.
- Whenever possible, use Ember addons for functionality that isn't application specific, but audit them for framework compatibility! Wrappers for jQuery plugins generally aren't idiomatic, among other things.
- All changes should be tested. Pick one or more from unit, integration and acceptance tests.
- Use ESLint. We have our own config: [eslint-config-simplabs](https://github.com/simplabs/eslint-config-simplabs).


## Naming Conventions

| Rule | Reason |
|:-----|:-------|
| Use Ember.js naming conventions | Names should be consistent with the framework's idioms, i.e. for mixins, `NamedMixin`. |
| Use the `_` prefix for private keys | The framework uses this convention, so applications should follow. It obviously does not provide true privacy, it is more of an indicator. |


## Ember Objects

| Rule | Reason |
|:-----|:-------|
| Use the framework's utilities when possible | Sometimes the functions provided by Ember.js are more readable in English, such as `isEmpty(value)` vs. `value == null`. |
| Use computed property macros when possible | It saves repetitive code from being written. |
| Use specific modules | Don't just `import Ember from 'ember'`, import named modules instead, which should allow for smaller builds. This is supported in [ember-cli-shims](https://github.com/ember-cli/ember-cli-shims). |
| Avoid explicitly casting to Ember objects | It's generally not needed to explicitly use `Ember.Object` or `Ember.A`, since the framework handles casting internally.|
| Explicitly cast Ember objects for *Addons* | When writing an Addon you must assume prototype extensions are disabled in the project, so explicitly cast inside your Addon.|
| **Never** use observers | Observers are *hard to reason about*. Prefer alternatives such as computed properties. |


## Ember Components

| Rule | Reason |
|:-----|:-------|
| Use components to separate concerns and encapsulate functionality. | Wherever it makes sense, prefer components over controller templates. For example, anything within a `#each` loop. |
| Use a separate stylesheet for each component | Although the framework doesn't have an opinion on styling, this is generally preferred among the community. |
| Use a namespacing strategy for your styles | Avoid rule clashing by using BEM or [ember-component-css](https://github.com/ebryn/ember-component-css) |
| Use named actions | Instead of `(action (...))`, prefer named actions that perform the action to avoid application logic in templates. The only exception is `(action (mut key))`. |
| Avoid business logic in helpers | Business logic in template helpers are a code smell, it should belong in JavaScript, not Handlebars. See this [blog post](https://simplabs.com/blog/2017/03/21/on-computed-properties-vs-helpers.html). |
| Don't use legacy actions | **Never** use `sendAction`. **Never** use action helpers without an event triggering them, it is preferred to use `onclick={{action ...}}`.|
| Use a component styleguide | A component styleguide documents and helps maintains a large set of components. Use [ember-freestyle](http://ember-freestyle.com/) for a live style guide. |


## Ember Data

| Rule | Reason |
|:-----|:-------|
| Use JSON API *wherever possible* | This is the preferred adapter and serializer for Ember Data, and APIs not following this format should adapt to its idioms. |
| Prefer using the references API to avoid (un-intentional) lazy loading requests. | This is preferred over `get` on the relationship, since the former may resolve asynchronously. |
| Avoid mocking records in tests | Ember Data records have complex behavior which may not easily be mocked. |
| Avoid explicit inverses | Ember Data automatically finds inverse relationships. |
| Resolve important data only in the `model()` hook | Think about which data should be resolved in the model hook and which can be resolved later. |
