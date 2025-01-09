const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');
const timer = document.querySelector('.timer');

let currentPhase = 0; // 0: Red, 1: Yellow, 2: Green
const phases = [
    { light: redLight, duration: 60 },    // Red light for 60 seconds
    { light: yellowLight, duration: 5 }, // Yellow light for 5 seconds
    { light: greenLight, duration: 60 }   // Green light for 60 seconds
];

let remainingTime = phases[currentPhase].duration;

function updateSignal() {
    // Reset all lights
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');

    // Activate the current phase light
    phases[currentPhase].light.classList.add('active');
    timer.textContent = remainingTime;
    if (currentPhase == 0) {
        timer.style.color = "red";
    } else if (currentPhase == 1) {
        timer.style.color = "yellow";
    } else {
        timer.style.color = "rgb(0, 255, 0)";
    }

    const interval = setInterval(() => {
        remainingTime--;
        timer.textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(interval);
            currentPhase = (currentPhase + 1) % phases.length; // Move to next phase
            remainingTime = phases[currentPhase].duration;
            updateSignal();
        }
    }, 1000);
}

updateSignal(); // Start the traffic signal system