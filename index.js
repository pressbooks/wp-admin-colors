var semver = require("semver");

let currentVersion, newVersion;

[currentVersion, newVersion] = process.argv.slice(2);

switch (semver.diff(currentVersion, semver.clean(newVersion))) {
  case "patch":
    console.log(`fix: add WordPress ${newVersion} support`);
    break;
  case "minor":
    console.log(`feat: add WordPress ${newVersion} support`);
    break;
  case "major":
    console.log(`feat!: add WordPress ${newVersion} support`);
    break;
  default:
    console.log("");
}
