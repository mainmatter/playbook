# Project Organization

## Language Independent

* When consuming dependencies from github via bundler, npm or any other
  dependency manager make sure to never simply specify the repo name but always
  specify a sha or branch name so the dependency version is clearly stated
  (while that might not be as important for e.g. bundler, there's no such thing
  as a `Gemfile.lock` in npm).