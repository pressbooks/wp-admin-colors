# wp-admin-colors

[![NPM package](https://badgen.net/npm/v/wp-admin-colors)](https://npmjs.com/package/wp-admin-colors)

This package bundles the SCSS files required to compile a WordPress admin color scheme in an npm-ready package.

`dist` is a copy/paste of these files:

- https://github.com/WordPress/WordPress/blob/master/wp-admin/css/colors/_admin.scss
- https://github.com/WordPress/WordPress/blob/master/wp-admin/css/colors/_mixins.scss
- https://github.com/WordPress/WordPress/blob/master/wp-admin/css/colors/_variables.scss

## Usage

Add to your project:

```
npm install wp-admin-colors
```

Include in your SCSS file and override variables as desired:

```
@import "~wp-admin-colors/dist/admin";
```

_Note: The `~` is a [webpack convention](https://github.com/webpack-contrib/sass-loader#resolving-import-at-rules)._

## How to update wp-admin-colors

This repository checks for WordPress updates via a scheduled GitHub action every week. When a new version is detected, the GitHub action will check to see if the relevant files have changed, create an [appropriately-titled](https://conventionalcommits.org) pull request with the changes if they have, and automatically merge it. This leaves two remaining steps for a developer to publish a release:

1. Merge the release pull request generated by [release-please](https://github.com/google-github-actions/release-please-action).
2. Pull the changes into you locally cloned copy of the repository, then run `npm publish`.
