"use strict";
/*console.log("Test")

const http = require('http');

let allPostData = "";

let server = http.createServer();

let port = process.env.PORT;
if (port == undefined) {
port = 5001
}

console.log("Port: " + port);

server.listen(port);

server.addListener("request", handleRequest);

function handleRequest (_request, _response) {
let postData = "";
_request.on('data', function (chunk) {
  postData += chunk;
});

_request.on('end', function (chunk){
  console.log("hello");
  console.log(_request.url);
  console.log(postData);

  allPostData += postData + "\n";

  _response.setHeader("content-type", "text/plain; charset=utf-8");
  _response.setHeader("Access-Control-Allow-Origin", "*");

  _response.write(
    "URL: " + _request.url + "\n" +
    "POST-Data: " + postData + "\n" +
    "------ \n" +
    "All POST-Data: \n" + allPostData);
    _respond.end();
});

}
*/ 
//# sourceMappingURL=main.js.map