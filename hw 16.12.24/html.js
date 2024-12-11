let jana = document.querySelector("#text")

jana.innerHTML = "<p class ='new-title'>HW: Introduction to DOM </p>"
console.log(jana.textContent);
// 2
document.getElementById("fullName").textContent = "Ернар красапчик";

// 3
let hobby = document.getElementsByClassName("hobby")

hobby[0].innerHTML = "<b> Sleping </b>"
hobby[1].innerHTML = "<b> speed </b>"
hobby[2].innerHTML = "<b> drink water </b>"
