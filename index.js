var length = document.querySelectorAll(".drum ").length;
var buttonPressCount = 0; 

for (var i = 0; i < length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttoninnerhtml = this.innerHTML;
        makeSound(buttoninnerhtml);
        buttonAnimation(buttoninnerhtml);
        buttonPressCount++; 

        if (buttonPressCount >= length * 2) {
            showCongratsVideo();
        }
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
    buttonPressCount++; 

    if (buttonPressCount >= length * 2) {
        showCongratsVideo();
    }
});

function makeSound(key) {
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
        default:
            console.log(key);
    }
}

function buttonAnimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 200);
}

function showCongratsVideo(videoPath = "videos/momo gif.mp4") {
    var congratsVideo = document.getElementById("congrats-video");
    if (congratsVideo) {
        return;
    }

    // Create a new video element
    var video = document.createElement("video");
    video.id = "congrats-video";
    video.src = videoPath; 
    video.controls = false; 
    video.autoplay = true; 
    video.style.position = "absolute"; 
    video.style.top = "50%"; 
    video.style.left = "50%"; 
    video.style.transform = "translate(-50%, -50%)"; 

    document.body.appendChild(video);
}