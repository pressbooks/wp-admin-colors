var semver = require("semver");

let v1, v2;

args = process.argv.slice(2).map((v) => semver.coerce(v));

[v1, v2] = args;

switch (semver.diff(v1, v2)) {
  case "patch":
    console.log(`fix: add WordPress ${v2} support`);
    break;
  case "minor":
    console.log(`feat: add WordPress ${v2} support`);
    break;
  case "major":
    console.log(`feat!: add WordPress ${v2} support`);
    break;
  default:
    console.log("");
}
