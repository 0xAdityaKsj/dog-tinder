// Create the Dog class here

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml() {
        console.log("getDogHtml is called")
        const { name, age, avatar, bio } = this;
        return `    
        
                    <header>
                        <img src="images/icon-profile.png" class="header_logo side_logo" alt="profile">
                        <img src="images/logo.png" class="header_logo center_logo" alt="logo">
                        <img src="images/icon-chat.png" class="header_logo side_logo" alt="chat icon">
                    </header>
                    <main>
                        <section class="sec1">
                            <img src=${avatar} class="dog_img" alt="dog rex image">
                            <div class="name">${name},${age}</div>
                            <div class="bio">${bio}</div>
                        </section>
                    </main>
                    <footer>
                        <img src="images/icon-cross.png" id="cross" alt="cross icon">
                        <img src="images/icon-heart.png" id="heart" alt="heart icon">
                    </footer>`
    }

}

export default Dog;