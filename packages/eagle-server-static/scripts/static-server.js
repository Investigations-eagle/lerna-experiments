// https://www.npmjs.com/package/static-server
const StaticServer = require('static-server');

const apps = [
    {
        name: 'EAGLE_INSIGHT_SERVER',
        rootPath: './static/insights',
        port: 3001
    },
    {
        name: 'EAGLE_REPORTS_SERVER',
        rootPath: './static/reports',
        port: 3002
    },
    {
        name: 'EAGLE_SPLASH_SERVER',
        rootPath: './static/splash-page',
        port: 3003
    }
];

function createServer(options) {
    const server = new StaticServer({
        rootPath: options.rootPath,     // required, the root of the server file tree
        port: options.port,             // optional, will set "X-Powered-by" HTTP header
        name: options.name,
        host: '127.0.0.1',                 // optional, defaults to any interface
        cors: '*',
        debug: true,                        // optional, defaults to undefined
        followSymlink: true,                // optional, defaults to a 404 error
        templates: {
            index: 'index.html'
        }
    });

    server.start(function () {
        console.log('Server ' + options.name + ' listening to port ::', server.port);
    });

    server.on('request', function (req, res) {
        console.log(options.name + ':: ', req.path);
    });
}


apps.forEach((appOptions) => createServer(appOptions));