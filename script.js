setInterval(setClock, 1000)


const secondHand = document.querySelector('[data-second-hand]')
const minutedHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    
    setRotation(secondHand, secondRatio)
    setRotation(minutedHand, minuteRatio)
    setRotation(hourHand, hourRatio)


}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360 )
}
setClock();
