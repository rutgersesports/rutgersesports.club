# Rutgers Esports Club Website

<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prs: welcome"> <img src="https://img.shields.io/github/license/rutgersesports/rutgersesports.club" alt="license"/> <img src="https://img.shields.io/github/actions/workflow/status/rutgersesports/rutgersesports.club/prettier.yml?label=lint status" alt="lint status"/> <img src="https://img.shields.io/github/deployments/rutgersesports/rutgersesports.club/github-pages?label=deployment%20status" alt="deployment status"> <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier"/>

## Deploying the Website via GitHub Pages

There should be a GitHub Actions workflow to automate the process.

## Contributing

Pull requests from outside the core development team are welcome, check out the
[good-first-issues](https://github.com/rutgersesports/rutgersesports.club/labels/good%20first%20issue)
tag.\
Before you create a pull request, please create an issue using our
[issue tracker](https://github.com/rutgersesports/rutgersesports.club/issues)
to avoid any work efforts being lost.

### How to Write an Effective Issue

1. Use a clear and descriptive title an enhancement request
2. Include screenshots or GIFs if your issue is related to a rendering issue
3. Explain why your enhancement would be useful to the website itself

### Limitations to Outside Contributors

We welcome all outside contributors to help out on building our website, but there are
some limitations if you are not a core member of the development team.

1. Your pull request must have a low impact
2. You cannot make a complete redesign of a website page
3. New design choices are decided by the core development team

### Instructions to Build

1. Install [NodeJS](https://nodejs.org)
2. Install the [Git CLI](https://git-scm.com/downloads)\
   You can also install [GitHub Desktop](https://desktop.github.com/) for a user interface
   (optional)
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to create a local server to start contributing!

We also use [Prettier](https://prettier.io/) for code formating so
please run `npx prettier --write .` whenever you're creating
a pull request. If you're using Visual Studio Code, it should
automate the process for you.
