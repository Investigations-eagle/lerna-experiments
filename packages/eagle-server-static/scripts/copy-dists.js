const shell = require('shelljs');

const packagesRoot = '../';

shell.mkdir('-p', 'static');

shell.cp('-R', `${packagesRoot}eagle-app-insights/dist/`, `static/insights`);
shell.cp('-R',`${packagesRoot}eagle-app-reports/dist/`, `static/reports`);
shell.cp('-R',`${packagesRoot}eagle-app-splash-page/dist/`, `static/splash-page`);



