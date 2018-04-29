const StaticServer         = require('static-server');
const proxy                = require('subdomain-router');
const BASE_HOST            = 'eagle.local';
const PROXY_PORT           = 9000;
const SPLASH_PAGE_PORT     = 3003;
const INSIGHTS_PORT        = 3001;
const REPORTS_PORT         = 3002;

const apps = [
    {
        name: 'EAGLE_INSIGHT_SERVER',
        rootPath: './static/insights',
        port: INSIGHTS_PORT
    },
    {
        name: 'EAGLE_REPORTS_SERVER',
        rootPath: './static/reports',
        port: REPORTS_PORT
    },
    {
        name: 'EAGLE_SPLASH_SERVER',
        rootPath: './static/splash-page',
        port: SPLASH_PAGE_PORT
    }
];

function createServer(options) {
    const server = new StaticServer({
        rootPath: options.rootPath,
        port: options.port,
        name: options.name,
        host: BASE_HOST,
        cors: '*',
        debug: true,
        followSymlink: true,
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

const proxyServer = proxy({
    host: BASE_HOST,
    subdomains: {
        'splash':   SPLASH_PAGE_PORT,
        'insights': INSIGHTS_PORT,
        'reports':  REPORTS_PORT
    }
});

proxyServer.listen(PROXY_PORT);