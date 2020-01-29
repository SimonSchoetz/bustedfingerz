/**
 * Fallback in case of noscript: all sections will be shown.
 * This code hides every section except of home in case js works as expected
 */
(() => {
    const sectionNodeList = [...document.querySelectorAll("main section")];
    window.onload = () => {
        sectionNodeList.forEach(list => {
            list.classList.add("invisible");
        })
        document.querySelector(".home-page").classList.remove("invisible");

    }
})()

