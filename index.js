import dogData from "./data";
import Dog from "./Dog";

let dog1 = new Dog(dogData[0])
render()

function render() {
    console.log('render function is called')
    document.getElementById('main').innerHTML = dog1.getDogHtml()
}



console.log('hello world')
