const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const hand = document.querySelectorAll('.hand')



function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    if (secondsDegrees === 90) {
        hand.forEach(hand => hand.style.transition = 'none')
    } else {
        hand.forEach(hand => hand.style.transition = '') //removes the inline style to refer to stylesheet
    }
}
setInterval(setDate, 1000);