// https://www.npmjs.com/package/static-server

var StaticServer = require('static-server');
var server = new StaticServer({
    rootPath: './static/insights',     // required, the root of the server file tree
    port: 8081,                          // required, the port to listen
    name: 'insights-http-server',      // optional, will set "X-Powered-by" HTTP header
    host: '127.0.0.1',                 // optional, defaults to any interface
    cors: '*',
    debug: true,                        // optional, defaults to undefined
    followSymlink: true,                // optional, defaults to a 404 error
    templates: {
      index: 'index.html'
    }
});

server.start(function () {
    console.log('Server listening to', server.port);
});

server.on('request', function (req, res) {
    // req.path is the URL resource (file name) from server.rootPath
    // req.elapsedTime returns a string of the request's elapsed time
    console.log('req.path', req.path);
});


var server2 = new StaticServer({
    rootPath: './static/reports',     // required, the root of the server file tree
    port: 8082,                          // required, the port to listen
    name: 'insights-http-server',      // optional, will set "X-Powered-by" HTTP header
    host: '127.0.0.1',                 // optional, defaults to any interface
    cors: '*',
    debug: true,                        // optional, defaults to undefined
    followSymlink: true,                // optional, defaults to a 404 error
    templates: {
        index: 'index.html'
    }
});

server2.start(function () {
    console.log('Server listening to', server2.port);
});

server2.on('request', function (req, res) {
    // req.path is the URL resource (file name) from server.rootPath
    // req.elapsedTime returns a string of the request's elapsed time
    console.log('req.path', req.path);
});


