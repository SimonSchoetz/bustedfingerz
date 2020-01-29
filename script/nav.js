/**
 * Since Nodelists appear like an array but no methods are working there, 
 * you have to iterate through them with a for loop
 */
(() => {
    //Array of all nodeLists of all a in nav / Also calling eventListener below
    const navNodeList = [...document.querySelectorAll("nav a")];
    //Array of all nodeLists of all sections in main
    const sectionNodeList = [...document.querySelectorAll("main section")];

    const navFunction = function () {
        //mainClass = class name of the clicked nav button
        const mainClass = this.classList[0];
        const nav = document.querySelector(`.${mainClass}`);

        //If clicked nav doesn't contain .active in its class list
        if (!this.classList.contains("active")) {
            /**
            * Switch .active on click in the Nav
            */
            //traversing navNodeList
            navNodeList.forEach(list => {

                const cl = list.classList;
                //Remove .active from former tab
                if (cl.contains("active")) {
                    cl.remove("active");
                    nav.setAttribute("aria-expanded", "false")
                }
                //Add .active to active tab
                if (cl.contains(mainClass)) {
                    cl.add("active");
                    nav.setAttribute("aria-expanded", "true")
                }
            })

            /**
            * Change display property on sections
            */
            //traversing sectionNodeList
            sectionNodeList.forEach(classList => {
                const cl = classList.classList;
                // check if classList contains .invisible and if not, add it
                if (!cl.contains("invisible")) {
                    cl.add("invisible")
                }
                // when current classList = this input, remove .invisible
                if (cl.contains(mainClass)) {
                    cl.remove("invisible")
                }
            })

        }
    }
    navNodeList.forEach(array => {
        array.addEventListener("click", navFunction);
    })
})();