const navFunction = fromNav => {
    //fromNav = class name of the clicked nav button
    const navInput = document.querySelector(`.${fromNav}`);

    //If pressed nav doesn't contain "active" in its class list
    if (!navInput.classList.contains("active")) {
        //returns nodeList of the nav a's
        const nodeList = document.querySelectorAll("nav a");
        //iterating nodeList
        for (let i = 0; i < nodeList.length; i++) {
            const item = nodeList[i].classList;
            // check if classList contains "active" and delete it
            if (item.contains("active")) {
                item.remove("active")
            }
            // when current classList = fromNav input, add "active"
            if (item.contains(fromNav)) {
                item.add("active")
            }

        }
    }
}
