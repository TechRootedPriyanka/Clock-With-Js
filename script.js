setInterval(setClock, 1000)

const hoursHand = document.querySelector('[data-hours-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondsHand = document.querySelector('[data-seconds-hand]')

function setClock() {
    const currenrDate = new Date()
    const secondsRatio = currenrDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currenrDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currenrDate.getHours()) / 12
    setRotation(secondsHand, secondsRatio)
    setRotation(minutesHand, minutesRatio)
    setRotation(hoursHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()