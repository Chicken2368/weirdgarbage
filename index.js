// Preload audio files
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var fattyrealthemetune = new Audio("sounds/fattyrealthemetune.mp3");

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    });
}

function playSound(key) {
    var audio;

    switch (key) {
        case "w":
            audio = tom1;
            break;

        case "a":
            audio = tom2;
            break;

        case "s":
            audio = tom3;
            break;

        case "d":
            audio = tom4;
            break;

        case "j":
            audio = crash;
            break;

        case "k":
            audio = kick;
            break;

        case "fatty":
            audio = fattyrealthemetune;
            break;

        default:
            console.log(key);
            break;
    }

    if (audio) {
        audio.currentTime = 0; // Reset audio to the beginning before playing
        audio.play();
    }
}
