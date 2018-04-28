const shell = require('shelljs');

const packageRoot = '.';
const libAssetsSrcPath = `${packageRoot}/src/assets/`;
const libAssetsOutputPath = `${packageRoot}/dist`;


if (shell.test('-d', libAssetsOutputPath)) {
  shell.mkdir('-p', libAssetsOutputPath);
}

shell.cp('-R', libAssetsSrcPath, libAssetsOutputPath);

