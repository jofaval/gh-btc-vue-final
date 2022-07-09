# CHANGELOG #

All the changes made to this project/repository.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## 😓 2022-07-10

### Fixed

- Transitions on the main page not working after the refactor

## :raising_hand: 2022-07-08

### Added

- Console logs are now restricted on the production environment.
- Error boundary, since there was no error handling at all, thanks to some feedback. 
- Services now have error handlers via an utility

### Modified

- Routes now use constants as much as possible, and acknowledge the Github Pages route.

## 👨‍💻 2022-07-07

### Added

- Implemented e2e tests with real connections to the API to be as close to production as possible.

### Modified

- Updated the project's documentation as to properly reflect it's final state.

### Fixed

- As with the unit testing, along the way I discovered some bugs that I quickly fixed, thus, proving the effectiveness of a well tested codebase.
- Fixed cypress testing and Github Actios e2e validation, it now uses the vue cli, which is what should've been working since the start.

### Achieved

- All testing for this project should be, finally, complete :).

## 👨‍💻 2022-07-06

### Added

- Finished the unit testing, 100% of code coverage

### Modified

- Route and store modules (placeholder mostly) so that the tests worked as fine as possible.
- All of the components now have the required/recomended `name` prop.

### Fixed

- `v-if`s must be above th element you want to hide, some components weren't and that was a big problem, and pain, for the tests so it is now fixed.

### Achieved

- 100% of code coverage, no more unit testing for a while.

## 👨‍💻 2022-07-05

### Added

- Testing, lots of testing... :).

## 🥹 2022-07-04

### Added

- Adding unit tests for components and utilities alike and manually testing them.

### Modified

- Update the README with improvements such as, CI/CD badges, imporvements to be made, conclusions.
- Quite some little tweaks here and there whilst uploading all of my local changes.
- Updated the CHANGELOG with as much information as possible.

### Fixed

- Fixed the Github Pages deployment, no public path was specified so the root was the actual public path. Now the path will change on production.

### Achieved

- I've managed to complete the MVP, finally! There're improvements to be made, I'll tackle some of those along the way, but the project is finished.

## 🤪 2022-07-03

### Added

- Created and implemented a navbar search for posts and users alike.
- Created and implemented the theme module.
- Implemented the navbar searchbar of the application and fixed the bugs that came with it.
- Created a home page with it's necessary assets
- Navbar now has the Vue logo in it used as a home link, only on desktop view
- Added the pending issues that were already done.
- Created the home page.

### Modified

- Retouched the validation and deployment workflows.
- Contact form now has a proper validation system.
- Finished abstracting the store into modules
- Added documentation, documented the visual style of the application, once it was polished and finished, the conclusions, reordered the table of contents.
- Refined the user detail page.

### Fixed

- Post detail page and user detail page now change reactively when the router parameter changes.

## 😓 2022-07-02

### Added

- Implemented vuex store modules for placeholder (posts and users) and contact.
- Created most of the components.
- Created and implemented a loading system to show when fetching.
- Created the user detail page, user detail link and integreated within the post detail page.
- Created the base libraries for services fetching.
- Created and integrated the navbar and footer components with their routing links perfectly functional.
- Greatly expand upon the contact formulary interaction.
- Styled the application uniformly and made sure everything was at place.
- Implement the store of the application and start the module abstraction.
- Detailed the improvements of the application.
- Added some more issues.

### Modified

- Commented the imports for a visually more identifiable.
- Made sure the app followed Vue's Good practices and made the changes necessaries to guarantee so.

### Fixed

- Pagination links on the post page bugged out when disabled.
- Some Vue life cycle overall bugs, in the contact form and while loading the user when on the post detail page.
- Post detail page and user detail page now load properly when they're the first access to the page.
- Vue typing on components by using `Vue.extend` wherever was needed, I didn't understood it's true purpose since everything still worked just fine without it.

## 😅 2022-07-01 

### Added

- Defined the validations for the contact formulary.
- Created the post detail component, link and view.
- Implemented the base routing system with paths and routes abstracted into constants.
- Played around and tested some of the transicitions, and also implemented the main transicitions.
- Create the base contact formualry and started developing it's components.
- Started integrating BootstrapVue components into the application.
- Implement theme toggler and the theme base styles (mostly variables).
- Created a ton of issues with some details I didn't contemplate at the start.
- Defined the base CSS style of the application, kind of a neuromorphism approachm, but not quite.

### Fixed

- Now the deployment is meant to happend only when the commit is validated (all tests pass).
- Fixed the new line return, it will now go from `CRLF` to `LF` on the codebase.

## 🙂 2022-06-30

### Added

- Installed the base dependencies for the project.
- Integreated the CI/CD base pipeline so that PRs and pushes get tested and later deployed.
- Created the author components and view, also unit tested the base features.
- Implemented and configured some of the testing for the application.

## 🤓 2022-06-29

### Added

- Project started.
- Repository initialized.
- The documentation, CHANGELOG, README, Github Projects, LICENSE.

### Achieved

- A Github Project with the main tasks defined and detailed.
