/*
* Purpose: To dynamically create a rudementary server using node js that can load html pages dynamically for a user
* Author: MKHA 
* Last Modified: 15/04/2023
*/
// Code from https://nodejs.org/en/docs/guides/getting-started-guide 
const http = require('http');
const hostname = '127.0.0.1';
const port = '3000';

const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World');
});

server.listen(port,hostname, () => {
    console.log(`Sever running at $http://${hostname}:${port}/`);
});