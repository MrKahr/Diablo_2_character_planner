/*
* Purpose: To dynamically create a rudementary server using node js that can load html pages dynamically for a user
* Author: MKHA 
* Last Modified: 15/04/2023
*/
// Code from https://nodejs.org/en/docs/guides/getting-started-guide 
let https;
try{
    https = require(https);
}
catch(error){
    console.error(`Error: ${error}. Https support not available`)
}

const hostname = '127.0.0.1';
const port  = '3000';
const server = https.createServer((req, res) => {
    res.statusCode = '200';
    res.end('Hello World');
});

server.listen(port, hostname, () =>{
    console.log(`Server running at ${hostname}:${port}`);
})
