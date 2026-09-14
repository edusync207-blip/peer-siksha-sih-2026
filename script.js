// Show the login page automatically
// after 3 seconds.

setTimeout(function () {

    document.querySelector(".welcome-page").style.display = "none";

    document.querySelector(".login-page").style.display = "flex";

}, 3000);