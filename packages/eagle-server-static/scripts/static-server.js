const StaticServer  = require('static-server');
const proxy         = require('subdomain-router');

/**
 * Hosts setup
 * ===================================================================
 * 127.0.0.1    eagle.local             www.eagle.local
 * 127.0.0.1    my.eagle.local          www.my.eagle.local
 * 127.0.0.1    reports.eagle.local     www.reports.eagle.local
 * 127.0.0.1    insights.eagle.local    www.insights.eagle.local
 * # More POC apps ...
 * */

const BASE_HOST   = 'eagle.local';
const SUB_DOMAINS = {
  splash:   'my',
  reports:  'reports',
  insights: 'insights'
  // More apps ...
};
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
    // More apps ...
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
        console.log('Redirect server ' + options.name + ' listening to port ::', server.port);
    });

    server.on('request', function (req) {
        console.log(options.name + ':: ', req.path);
    });
}


apps.forEach((appOptions) => createServer(appOptions));

// Sub domains proxy router
const proxyServer = proxy({
    host: BASE_HOST,
    messages: {
      invalid: 'I don\'t know about this subdomain',
      down: 'This app or service is down right now'
    },
    subdomains: {
        [SUB_DOMAINS.splash]  :  SPLASH_PAGE_PORT,
        [SUB_DOMAINS.insights]:  INSIGHTS_PORT,
        [SUB_DOMAINS.reports] :  REPORTS_PORT
        // Other app ...
    }
});

proxyServer.listen(
  PROXY_PORT,
  () => console.log(`MAIN server on [http://${SUB_DOMAINS.splash}.${BASE_HOST}:${PROXY_PORT}],
    with subdomains [${Object.values(SUB_DOMAINS)}]`)
);
