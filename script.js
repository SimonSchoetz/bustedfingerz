const navFunction = fromNav => {
    const navInput = document.querySelector(`.${fromNav}`);
    console.log("navInput: " + navInput);


    //If pressed nav doesn't contain "active" in it's class list
    if (!navInput.classList.contains("active")) {
        const nodeList = document.querySelectorAll("nav a");
        console.log(document.querySelectorAll("nav a").length)
        console.log("Nav List: " + nodeList)

        for (let i = 0; i < nodeList.length; i++) {
            // check if classList contains "active" and delete it
            if (nodeList[i].classList.contains("active")) {
                nodeList[i].classList.remove("active")
            }
            // when current classList = fromNav input, add "active"
            if (nodeList[i].classList.contains(fromNav)) {
                nodeList[i].classList.add("active")
            }

        }



        // navList.forEach(el => {
        //     if (el.contains("active")) {
        //         el.classList.remove("active")
        //     }
        // })
    }

}



    // if pressed nav button is already active, do nothing 
    // if (navInput.classList.contains("active") && navInput.classList.contains(navInput)) { return null }

