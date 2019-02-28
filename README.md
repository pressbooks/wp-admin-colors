# wp-admin-colors

This package bundles the SCSS files required to compile a WordPress admin color scheme in a npm-ready package.

## Usage

Add to your project:

```
npm i wp-admin-colors --save-dev
```

Include in your SCSS file and override some variables:

```
@import 'node_modules/wp-admin-colors/dist/admin';

...
```

## Development

1. Clone this repo.
2. Run `npm i`.
3. In [gulpfile.js](https://github.com/pressbooks/wp-admin-colors/blob/master/gulpfile.js#L5), update the WordPress version. Note that WordPress does not use semantic versioning, so "major" versions will be something like `5.1`, not `5.1.0`.
4. Run `npm run build`.
5. Bump the version in [package.json](https://github.com/pressbooks/wp-admin-colors/blob/master/package.json#L3) to match the WordPress version.
6. Commit and push, then run `npm publish` to publish a new version.