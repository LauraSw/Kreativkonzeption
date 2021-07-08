"use strict";
window.onload = () => {
    console.log("SAnd");
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let pinselWeite = 50;
    let amMalen = false;
    const image = new Image();
    image.onload = function () {
        canvas.addEventListener("touchstart", start, false);
        canvas.addEventListener("touchmove", zeichnen, false);
        canvas.addEventListener("mousedown", start, false);
        canvas.addEventListener("mousemove", zeichnen, false);
        canvas.addEventListener("touchend", stop, false);
        canvas.addEventListener("mouseup", stop, false);
        canvas.addEventListener("mouseout", stop, false);
    };
    image.src = "./img/mapImg.jpg"; //Bildpfad
    image.style.objectFit = "cover";
    function start(event) {
        amMalen = true;
        if (event.clientX != undefined) {
            maskeZeichnen(event.clientX, event.clientY);
        }
        else {
            maskeZeichnen(event.touches[0].clientX, event.touches[0].clientY);
        }
        event.preventDefault();
    }
    function zeichnen(event) {
        if (amMalen) {
            if (event.clientX != undefined) {
                maskeZeichnen(event.clientX, event.clientY);
            }
            else {
                maskeZeichnen(event.touches[0].clientX, event.touches[0].clientY);
            }
        }
        event.preventDefault();
    }
    function maskeZeichnen(_x, _y) {
        let tempCanvas = document.createElement("canvas");
        tempCanvas.width = window.innerWidth;
        tempCanvas.height = window.innerHeight;
        let tempCtx = tempCanvas.getContext("2d");
        tempCtx.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height);
        let karte = context.createPattern(tempCanvas, "no-repeat");
        context.fillStyle = karte;
        context.beginPath();
        context.arc(_x, _y, pinselWeite, 0, 2 * Math.PI, false);
        context.fill();
    }
    function stop(event) {
        if (amMalen) {
            amMalen = false;
        }
        event.preventDefault();
    }
};
//# sourceMappingURL=map.js.map