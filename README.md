# Rutgers Esports Club Website

<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prs: welcome"> <img src="https://img.shields.io/github/license/rutgersesports/rutgersesports.club" alt="license"/> <img src="https://img.shields.io/github/actions/workflow/status/rutgersesports/rutgersesports.club/prettier.yml?label=lint status" alt="lint status"/> <img src="https://img.shields.io/github/deployments/rutgersesports/rutgersesports.club/github-pages?label=deployment%20status" alt="deployment status"> <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier"/>

## Deploying the Website via GitHub Pages

There should be a GitHub Actions workflow to automate the process.

## Build Instructions

1. Install [NodeJS](https://nodejs.org)
2. Install [Git](https://git-scm.com/downloads)
3. Run `npm install` to install all dependencies
4. Run `npm run dev` to create a local server to view your changes

We also use [Prettier](https://prettier.io/) for code formating so
please run `npx prettier --write .` whenever you're creating
a pull request. If you're using Visual Studio Code, it should
automate the process for you.
