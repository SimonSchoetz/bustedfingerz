/**
 * Since Nodelists appear like an array but no methods are working there, 
 * you have to iterate through them with a for loop
 */
(() => {
    const navFunction = fromNav => {
        //fromNav = class name of the clicked nav button
        const navInput = document.querySelector(`.${fromNav}`);

        //If clicked nav doesn't contain .active in its class list
        if (!navInput.classList.contains("active")) {
            /**
            * Switch .active on click in the Nav
            */
            //NodeList of all a in nav
            const navNodeList = document.querySelectorAll("nav a");
            //iterating nodeList
            for (let i = 0; i < navNodeList.length; i++) {
                const item = navNodeList[i].classList;
                // check if classList contains "active" and delete it
                if (item.contains("active")) {
                    item.remove("active")
                }
                // when current classList = fromNav input, add "active"
                if (item.contains(fromNav)) {
                    item.add("active")
                }

            }
            /**
            * Change display property on sections
            */
            //NodeList of all sections in main
            const sectionNodeList = document.querySelectorAll("main section");
            //iterating nodeList
            for (let i = 0; i < sectionNodeList.length; i++) {
                const item = sectionNodeList[i].classList;
                // check if classList contains .invisible and if not, add it
                if (!item.contains("invisible")) {
                    item.add("invisible")
                }
                // when current classList = fromNav input, remove .invisible
                if (item.contains(fromNav)) {
                    item.remove("invisible")
                }
            }
        }
    }
})();