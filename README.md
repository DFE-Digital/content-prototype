[![Build](https://github.com/DFE-Digital/content-prototype/workflows/Build/badge.svg)](https://github.com/DFE-Digital/content-prototype/actions?query=workflow%3ABuild)
[![Lint](https://github.com/DFE-Digital/content-prototype/workflows/Lint/badge.svg)](https://github.com/DFE-Digital/content-prototype/actions?query=workflow%3ALint)
[![Cypress Tests (Chrome)](https://github.com/DFE-Digital/content-prototype/workflows/Cypress%20Tests%20(Chrome)/badge.svg)](https://github.com/DFE-Digital/content-prototype/actions?query=workflow%3A%22Cypress+Tests+%28Chrome%29%22)
![stability-experimental](https://img.shields.io/badge/stability-experimental-important.svg)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](./.github/CONTRIBUTING.md)
# Content Prototype

> 🚧 Work in progress

## 🎲 Installation

### System dependencies

- [Node.js](https://nodejs.org/en/download/package-manager) `v10+` - JavaScript runtime environment.
- [Ruby](https://www.ruby-lang.org/en/downloads/) `v2.4+` - High level programming language.
- [Bundler](https://bundler.io/) - Ruby application gem bundler
- [LibSass](https://sass-lang.com/libsass) - Stylesheet language

For quick start tips per system see [System Setup](./github/CONTRIBUTING.md#System-Setup) in Contributing.

### Application dependencies

```bash
bundle install
npm install
```

## 🎯 Usage

Compile and serve the site

```bash
npm start
```

aliases;

```bash
bundle exec nanoc
bundle exec nanoc view
```

You can now open http://localhost:3000

## 🐳 Docker

Run the app in a docker container

```bash
docker build -t dfe-content-prototype:latest .
docker run -e PORT=3000 -p 3000:3000 --rm -it dfe-content-prototype
```

You can now open http://localhost:3000

## 📦 Deployment

```bash
bundle exec nanoc
bundle exec nanoc deploy
```

## 👤 Contributing

We love contributions! View our [contribution guidelines](./.github/CONTRIBUTING.md).

This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant [code of conduct](./.github/CODE_OF_CONDUCT.md).

## 🎓 License

Unless stated otherwise, the codebase is released under the MIT License. This covers both the codebase and any sample code in the documentation. The documentation is © Crown copyright and available under the terms of the Open Government 3.0 licence.
