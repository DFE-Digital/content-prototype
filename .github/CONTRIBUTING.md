# Contributing
We love contributions! We've compiled these docs to help you understand our contribution guidelines.

Before submitting your contribution, please make sure to take a moment and read through the following guidelines:

- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Pull Request Guidelines](#pull-request-guidelines)

## Issue Reporting Guidelines

Try to search for your issue - it may have already been answered or even fixed in the development branch. However, 
if you find that an old, closed issue still persists in the latest version, you should open a new issue.


## Pull Request Guidelines

- Branch from `master`.
- It's OK to have multiple small commits as you work on the PR - GitHub will automatically squash it before merging.
- Make sure your `npm test` passes.
- If adding a new feature:
  - Add accompanying test case.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.
- If fixing bug:
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.


## System Setup


### macOS quickstart

Assuming you already have [Homebrew](https://brew.sh) installed.
```bash
brew install node libsass
gem install bundler
```

### Linux quickstart

```bash
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt-get install -y nodejs libsass-dev
gem install bundler
```

### Windows quickstart

Assuming you already have [Scoop](https://scoop.sh/) installed.

```bash
scoop install ruby nodejs sass
gem instlal bundler
```

### Application dependencies

```bash
bundle install
npm install
```

## Development Setup

You will need Node.js version 10+ & Ruby 2.4+ with Bundler

After cloning this repository, run:

```bash
bundle install
npm install
```

## Project Structure

- `nanoc.yaml` site configuration
- `content` contains the data source content
- `layouts` the frames the content will go into
- `lib` code snippets to be shared

## Testing and linting

Rubocop, StyleLint, Slimlint & ESlint are the linting tools in use.

Linters will automaticlly run on each commit for any staged files through [`lint-staged`](https://github.com/okonet/lint-staged), any lint-failure will fail the commit. 

```bash
npm run lint
```

_alias for_

```bash
bundle exec rubocop .
bundle exec slim-lint layouts
./node_modules/.bin/eslint .
./node_modules/.bin/stylelint .
```
