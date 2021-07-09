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
        /*setTimeout(function(){
          bottleShake();
        },3000);*/
    }
    
   

    

   /*function bottleShake(){
        var element:any = document.getElementById("bottle");
        element.classList.add("bottleShake");
    }*/
}