<picture>
    <source
        srcset="images/preview-dark.png"
        media="(prefers-color-scheme: dark)"
    />
    <img
        src="images/preview-light.png"
        alt="This is the Rutgers Esports Website."
    >
</picture>

<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="prs: welcome"> <img src="https://img.shields.io/github/license/rutgersesports/rutgersesports.github.io" alt="license"/> <img src="https://img.shields.io/github/actions/workflow/status/rutgersesports/rutgersesports.github.io/prettier.yml?label=lint status" alt="lint status"/> <img src="https://img.shields.io/github/deployments/rutgersesports/rutgersesports.club/github-pages?label=deployment%20status" alt="deployment status"> <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg" alt="code style: prettier"/>

## About
This website was designed, built, and deployed by
[Andrew Hong](https://github.com/novialriptide) (Class of 2026) using
[React](https://reactjs.org/) and [JavaScript](https://www.javascript.com/).

The current maintainer of this website is
[Andrew Hong](https://github.com/novialriptide).

## Project Structure
 - `src/components` contains all of the components used to build a website page
 - `src/data` contains all data for clubs and open job positions
 - `src/icons` contains all icons that are in the `svg` format
 - `src/images` contains all images that are being rendered onto the website
 - `src/pages` contains all of the pages that are being displayed
 - `src/videos` contains all types of videos

## Deploying the Website via GitHub Pages
Run `npm run deploy` in your terminal to deploy the website. You can only do this if
you have permissions to do so.\
Do not panick if the site goes down right after you pushed a change. It should return
to normal in under 5 minutes. If not, try again and again. If all fails, panick and contact
[Andrew Hong](https://github.com/novialriptide) (<andrew.j.hong@rutgers.edu>).\
It is also noteworthy that whenever you run `npm run deploy`, it creates a static
website based on your local repository, not whatever is on the GitHub repository.

## Contributing
Pull requests from outside the core development team are welcome, check out the
[good-first-issues](https://github.com/rutgersesports/rutgersesports.club/labels/good%20first%20issue)
tag.\
Before you create a pull request, please create an issue using our
[issue tracker](https://github.com/rutgersesports/rutgersesports.github.io/issues)
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
4. Run `npm start` to create a local server to start contributing!

We also use [Prettier](https://prettier.io/) for code formating so
please run `npx prettier --write "src/**"` whenever you're creating
a pull request.
