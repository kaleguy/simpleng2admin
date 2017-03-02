[![Build Status](https://travis-ci.org/kaleguy/simpleng2admin.svg?branch=master)](https://travis-ci.org/kaleguy/simpleng2admin)
[![Dependency Status](https://david-dm.org/kaleguy/simpleng2admin.svg)](https://david-dm.org/kaleguy/simpleng2admin)


# SimpleAdmin

[Live Demo](https://kaleguy.github.io/simpleng2admin/)

This is a simple admin demo app built with Angular 2, using a single module and two routes.

It has one content page with a weather widget.

The project was started with code generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

Note on building on Linux/Ubuntu, for some reason getting this to work required adding two versions of the angular CLI
into the package.json dev dependencies.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Code scaffolding

Run `ng lint` to have tslint check your code.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
If you get an error saying 'chromedriver not found' try running this command:
```
node_modules/protractor/bin/webdriver-manager update
```
At the moment there is just one simple e2e test as an example.

## Deploying to GitHub Pages

Create a branch called 'gh-pages', build the project, switch to the gh-pages branch and
replace the contents of the main folder with the files in the dist folder. 

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
