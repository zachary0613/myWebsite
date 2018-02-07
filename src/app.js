var http = require('http');

var userCount = 0;
http.createServer(function (request, response) {
    console.log('New connection');
    userCount++;

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.write('We have had '+userCount+' visits!\n');
    response.write('Zachary Stump\n')
    response.write('zachary0613@gmail.com\n')
    response.write('410.739.6545')
    response.end();
}).listen(8080);

console.log('Server started');
