window.onload = () => {
  console.log("SAnd")
    const canvas: HTMLCanvasElement= document.getElementById("canvas") as HTMLCanvasElement
    HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext("2d") as CanvasRenderingContext2D;
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
    image.style.objectFit= "cover";
  
    function start(event:any) {
      amMalen = true;
      if (event.clientX != undefined) {
          maskeZeichnen(event.clientX, event.clientY);
      } else {
          maskeZeichnen(event.touches[0].clientX, event.touches[0].clientY);
      }
      event.preventDefault();
    }
  
    function zeichnen(event:any) {
      if (amMalen) {
        if (event.clientX != undefined) {
          maskeZeichnen(event.clientX, event.clientY);
        } else {
          maskeZeichnen(event.touches[0].clientX, event.touches[0].clientY);
        }
      }
  
      event.preventDefault();
    }
  
    function maskeZeichnen(_x:any, _y:any) {
      let tempCanvas: HTMLCanvasElement= document.createElement("canvas");
      tempCanvas.width= window.innerWidth
      tempCanvas.height= window.innerHeight
      let tempCtx: CanvasRenderingContext2D= tempCanvas.getContext("2d") as CanvasRenderingContext2D
      tempCtx.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height)
  
      let karte: CanvasPattern = context.createPattern(tempCanvas, "no-repeat") as CanvasPattern;
      context.fillStyle = karte;
      context.beginPath();
      context.arc(_x, _y, pinselWeite, 0, 2 * Math.PI, false);
      context.fill();
    }
  
    function stop(event:any) {
      if (amMalen) {
          amMalen = false;
      }
      event.preventDefault();
    }
  }