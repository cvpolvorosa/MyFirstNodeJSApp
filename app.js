const http = require('http');

const routes = require('./routes');

console.log(routes.someText);
const server = http.createServer(routes.handler); //executes the function that's stored in routes for incoming requests

server.listen(3000);