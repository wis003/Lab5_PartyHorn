// listener for change in volume
document.getElementById("volume-number").addEventListener("input", changeVolumeNumber);
document.getElementById("volume-slider").addEventListener("input", changeVolumeSlider);

function changeVolumeNumber() {
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;

    let vol = document.getElementById("volume-slider").value;
    if(vol == 0) {
        document.getElementById("honk-btn").disabled = true;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    }
    else if(vol >=1 && vol <= 33) {
        document.getElementById("honk-btn").disabled = false;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(vol >= 34 && vol <= 66) {
        document.getElementById("honk-btn").disabled = false;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        document.getElementById("honk-btn").disabled = false;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
}

function changeVolumeSlider() {
    document.getElementById("volume-number").value = document.getElementById("volume-slider").value;

    let vol = document.getElementById("volume-slider").value;
    if(vol == 0) {
        document.getElementById("honk-btn").disabled = true;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    }
    else if(vol >=1 && vol <= 33) {
        document.getElementById("honk-btn").disabled = false;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else if(vol >= 34 && vol <= 66) {
        document.getElementById("honk-btn").disabled = false;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else {
        document.getElementById("honk-btn").disabled = false;
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
}

// listener for change in sound
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
    document.getElementById("horn-sound").volume = (document.getElementById("volume-number").value) / 100;
    document.getElementById("horn-sound").play();
    event.preventDefault();
}
