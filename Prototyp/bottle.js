"use strict";
var bottle;
(function (bottle) {
    window.onload = () => {
        var shake = document.getElementById('shakeButton');
        console.log(shake);
        shake.addEventListener('click', bottleTurn);
    };
    function bottleTurn() {
        console.log("clicked");
        var element = document.getElementById("bottle");
        element.classList.add("bottleTurn");
        /*setTimeout(function(){
          bottleShake();
        },3000);*/
    }
    /*function bottleShake(){
         var element:any = document.getElementById("bottle");
         element.classList.add("bottleShake");
     }*/
})(bottle || (bottle = {}));
//# sourceMappingURL=bottle.js.map