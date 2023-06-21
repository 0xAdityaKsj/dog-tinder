import dogData from "./data.js";
import Dog from "./Dog.js";
let currentDogIndex = 0;
let currentDog = new Dog(dogData[currentDogIndex])
document.getElementById("accept-button").addEventListener('click', yes)
document.getElementById("reject-button").addEventListener('click', no)
render()

function yes() {
    if (currentDogIndex < dogData.length) {
        document.getElementById("like-badge").style.display = 'block'
        console.log('accept button is clicked')
        currentDogIndex += 1
        currentDog.setMatchStatus(true)
        currentDog = new Dog(dogData[currentDogIndex])
        setTimeout(render, 1000)
    }

}

function no() {
    if (currentDogIndex < dogData.length) {
        document.getElementById("nope-badge").style.display = 'block'
        console.log('reject button is clicked')
        currentDogIndex += 1
        currentDog.setMatchStatus(false)
        currentDog = new Dog(dogData[currentDogIndex])
        setTimeout(render, 1000)
    }

}

function render() {
    console.log('render function is called')
    document.getElementById('main').innerHTML = currentDog.getDogHtml()
}


