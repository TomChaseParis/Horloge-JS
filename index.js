// Appeler la fonction setClock chaque seconde
setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date(); // Constructeur
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 60;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

}

// Déclencher la rotation de l'horloge
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360) // Va chercher la rotation dans le CSS
}

setClock();

