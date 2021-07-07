/*namespace shakeNFlash {
    const flashDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("flash");
  
    // create device motion/orientation manager and register motion callback
    const motionManager: DeviceMotionAndOrientationManager = new DeviceMotionAndOrientationManager();
    motionManager.onAcceleration = onAcceleration;
  
    // create start screen and register device motion/orientation manager
    const startScreen: StartScreen = new StartScreen("start-screen");
    startScreen.addResourceManager(motionManager);
    startScreen.start();
  
    function onAcceleration(x: number, y: number, z: number): void {
      const normX: number = Math.min(1, Math.max(0, 0.05 * x));
      const normY: number = Math.min(1, Math.max(0, 0.05 * y));
      const normZ: number = Math.min(1, Math.max(0, 0.05 * z));
      const accMag: number = normX * normX + normY * normY + normZ + normZ;
  
      flashDiv.style.opacity = Math.min(1, accMag).toString();
    }
  }*/
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