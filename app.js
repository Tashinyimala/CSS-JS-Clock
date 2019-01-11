const secondHand  = document.querySelector('.second-hand');
const minuteHand  = document.querySelector('.min-hand');
const hourHand    = document.querySelector('.hour-hand');

function getDegree(value) {
    return ((value / 60) * 360) + 90;
}

function setDate() {
    const now       = new Date();
    const seconds   = now.getSeconds();
    const secondDeg = getDegree(seconds);
    const minutes   = now.getMinutes();
    const minuteDeg = getDegree(minutes);
    const hours     = now.getHours();
    const hourDeg   = ((hours / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    secondHand.textContent     = "sec: " + seconds; 

    minuteHand.style.transform = `rotate(${minuteDeg}Deg)`;
    minuteHand.textContent     = "min: " + minutes; 

    hourHand.style.transform   = `rotate(${hourDeg}Deg)`;
    hourHand.textContent       = "hour: " + hours; 
}

setInterval(setDate, 1000);