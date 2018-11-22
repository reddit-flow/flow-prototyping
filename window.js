//This is the window management code.
/* This function resizes the sidebar-content and main-container containers when
 * the application is started or the window is resized.
 *
 * Important: If you change the constants in this function, you must also change
 * the appropriate constants in the stylesheet.
 */
function resizeContainers() {
    var em = parseFloat(getComputedStyle(document.body).fontSize); //Calculate how many pixels an em is
    document.getElementById("sidebar-content").style.maxHeight = //This is the main content of the sidebar
        String(innerHeight - em * 8) + "px";
    document.getElementById("main-content").style.maxHeight = //This is the main content of the page
        String(innerHeight - em * 4) + "px";
}
// This code is run whenever the window is resized.
addEventListener("resize", function () {
    resizeContainers();
});
//This code is run when the application is started.
addEventListener("load", function () {
    resizeContainers();
});
console.log("Window management code loaded");
