const shell = require('shelljs');

const files = ['index.ts', 'index.d.ts', 'index.js.map'];
const dirs = ['./dist'];

files.forEach(file => {
    if (shell.test('-f', file)) {
        shell.rm(file);
    }
});

shell.cp("-Rf", "./dist/*", "./");

dirs.forEach(dir => {
    if (shell.test('-d', dir)) {
        shell.rm('-rf', dir);
    }
});
