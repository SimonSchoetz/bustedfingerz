(() => {
    //Array with selectors
    const selectors = ["html", "body", "header", "nav"]

    // for addEventListener and if statement
    const pageSwitch = document.querySelector("#switch");

    const switchClasses = () => {
        selectors.forEach(el => {
            const selector = document.querySelector(el)
            if (pageSwitch.checked) {
                selector.classList.add("SE")

            } else {
                selector.classList.remove("SE")
            }
        })
    }
    pageSwitch.addEventListener("click", switchClasses);
})();