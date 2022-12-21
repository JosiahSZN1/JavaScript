console.log("page loaded...");

function prePlay (element) {
    element.play();
}

function prePause (element) {
    element.pause();
    element.currentTime = 0;
}