// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        console.log("setMatchStatus is called")
        this.hasBeenSwiped = true;
        this.hasBeenLiked = bool;
    }

    getDogHtml() {
        console.log("getDogHtml is called")
        const { name, age, avatar, bio } = this;
        return `<section class="sec1">
                    <img src="images/badge-like.png" id="like-badge">
                    <img src="images/badge-nope.png" id="nope-badge">
                    <img src=${avatar} class="dog_img" alt="dog rex image">
                    <div class="name">${name},${age}</div>
                    <div class="bio">${bio}</div>
                </section>`
    }
}

export default Dog;