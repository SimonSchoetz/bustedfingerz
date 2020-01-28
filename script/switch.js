(() => {
    const pageSwitch = document.querySelector("#switch");
    const html = document.querySelector("html")
    const body = document.querySelector("body");
    const nav = document.querySelector("nav");
    const header = document.querySelector("header")

    //Color Gradient for header
    const gradientAP = "linear-gradient( rgb(203, 201, 203), rgb(203, 201, 203), rgb(203, 201, 203), rgb(203, 201, 203), rgb(203, 201, 203), rgba(255, 255, 0, 0))"
    const gradientSE = "linear-gradient( rgb(41, 40, 41), rgb(41, 40, 41), rgb(41, 40, 41), rgb(41, 40, 41), rgb(41, 40, 41), rgba(255, 255, 0, 0))"


    const switchClasses = () => {
        let headerBG = document.querySelector("header");

        if (pageSwitch.checked) {
            // headerBG.style.backgroundImage = gradientSE;
            html.classList.add("SE")
            body.classList.add("SE")
            nav.classList.add("SE")
            header.classList.add("SE")

        } else {
            // headerBG.style.backgroundImage = gradientAP;
            html.classList.remove("SE")
            body.classList.remove("SE")
            nav.classList.remove("SE")
            header.classList.remove("SE")

        }
        // if (!pageSwitch.checked) {
        //     console.log("unchecked!")
        // }

        // unchecked = 
        // -> base / delete yet to make style class
        // -> hide mastering page
        // -> show artist page nav & content
        // checked = 
        // -> add yet to make style class
        // -> hide artist page
        // -> show mastering nav & page

    }
    pageSwitch.addEventListener("click", switchClasses);

})();