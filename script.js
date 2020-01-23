const navFunction = navInput => {
    const classes = ["home", "music", "news", "contact", "impressum"];
    const a = document.querySelector(`.${navInput}`);
    console.log("classlist 1: " + a.classList[1]);
    console.log("classlist 0: " + a.classList[0]);
    console.log("navInput: " + navInput)
    console.log(typeof a.classList[1])

    if (a.classList[1] === undefined) {
        a.classList.add("active");
    }
    // classes.forEach(input => {
    //     if (navInput === input) {
    //         a.classList.add("active")
    //     } else {
    //         a.classList.remove("active")
    //     }
    // })
}