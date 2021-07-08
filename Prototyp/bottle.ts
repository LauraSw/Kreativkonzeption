namespace bottle {
    window.onload = () => {
        var shake: HTMLElement = document.getElementById('shakeButton') as HTMLElement;

        console.log(shake);
        shake.addEventListener('click', bottleTurn);
    }
    



    function bottleTurn() {
        console.log("clicked")
        var element:any = document.getElementById("bottle");
        element.classList.add("bottleTurn");
        //bottleShake();
    }
    
    /*function bottleShake(){
        var element:any = document.getElementById("bottle");
        element.classList.add("bottleShake");
    }*/
    

    


    /*const bottle: HTMLElement = <HTMLElement>document.getElementById("bottle");
  
    // create device motion/orientation manager and register motion callback
    const motionManager: DeviceMotionAndOrientationManager = new DeviceMotionAndOrientationManager();
    motionManager.onAcceleration = onAcceleration;

    const startScreen: StartScreen = new StartScreen("start-screen");
    startScreen.addResourceManager(motionManager);
    startScreen.start();
  
    function onAcceleration(x: number, y: number, z: number): void {
      const normX: number = Math.min(1, Math.max(0, 0.05 * x));
      const normY: number = Math.min(1, Math.max(0, 0.05 * y));
      const normZ: number = Math.min(1, Math.max(0, 0.05 * z));
      const accMag: number = normX * normX + normY * normY + normZ + normZ;
  
      bottle.style.opacity = Math.min(1, accMag).toString();
    }
  }*/
}