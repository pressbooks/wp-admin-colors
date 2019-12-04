# wp-admin-colors

This package bundles the SCSS files required to compile a WordPress admin color scheme in a npm-ready package.

## Hein? 

`./dist/*.*` is a copy/paste of these files:

+ https://github.com/WordPress/WordPress/blob/master/wp-admin/css/colors/_admin.scss
+ https://github.com/WordPress/WordPress/blob/master/wp-admin/css/colors/_mixins.scss
+ https://github.com/WordPress/WordPress/blob/master/wp-admin/css/colors/_variables.scss

## Usage

Add to your project:

```
npm install wp-admin-colors
```

Include in your SCSS file and override some variables:

```
@import "~wp-admin-colors/dist/admin";
```

_Note: The `~` is a [webpack convention](https://github.com/webpack-contrib/sass-loader#resolving-import-at-rules)._

## How to update wp-admin-colors

1. Clone this repo.
2. Run `npm install`.
3. In [gulpfile.js](https://github.com/pressbooks/wp-admin-colors/blob/master/gulpfile.js#L5), update the WordPress version. Note that WordPress does not use semantic versioning, so "major" versions will be something like `5.1`, not `5.1.0`.
4. Run `npm run build`.
5. Bump the version in [package.json](https://github.com/pressbooks/wp-admin-colors/blob/master/package.json#L3) and [package-lock.json](https://github.com/pressbooks/wp-admin-colors/blob/master/package-lock.json#L3) to match the WordPress version.
6. Commit and push, then run `npm publish` to publish a new version.