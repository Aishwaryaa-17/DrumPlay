//detecting Button press

var numofbtn = document.querySelectorAll(".drum").length;

for(var i=0; i<numofbtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var btninnerHTML = this.innerHTML;
        makeSound(btninnerHTML);
        btnAnimation(btninnerHTML);
    });
}

//Detecting Keyboard press

document.addEventListener('keydown',function(event){
    makeSound(event.key.toLowerCase());
    btnAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default: console.log(key);
            break;
    }
}
function btnAnimation(currentkey){
    var activebtn = document.querySelector("." + currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100);
}

