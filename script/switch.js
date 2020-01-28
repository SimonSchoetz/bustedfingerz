(() => {
    const pageSwitch = document.querySelector("#switch");

    const switchClasses = () => {

        const body = document.querySelector("body");

        if (pageSwitch.checked) {
            body.classList.add("SE")
        } else {
            body.classList.remove("SE")
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