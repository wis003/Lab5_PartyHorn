// main.js

document.getElementById("radio-air-horn").addEventListener("change", changeSoundHorn);
document.getElementById("radio-car-horn").addEventListener("change", changeSoundCar);
document.getElementById("radio-party-horn").addEventListener("change", changeSoundParty);

function changeSoundHorn() {
    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    document.getElementById("sound-image").alt = "Air Horn";
}
function changeSoundCar() {
    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    document.getElementById("sound-image").alt = "Car Horn";
}
function changeSoundParty() {
    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    document.getElementById("sound-image").alt = "Party Horn";
}

document.getElementById("honk-btn").addEventListener("click", playSound);

function playSound(event) {
    document.getElementById("horn-sound").play();
    event.preventDefault();
}
