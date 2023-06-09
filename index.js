import dogData from "./data";
import Dog from "./Dog";


function render() {
    console.log('render function is called')
    document.getElementById('main').innerHTML = dog1.getDogHtml()
}

let dog1 = new Dog(dogData[0])
render()
console.log('hello world')
