tl = gsap.timeline();
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let btn = document.querySelector(".btn");
let copy = document.querySelector(".copy");
let color = document.querySelector("span.color");
document.body.style.background = localStorage.getItem("hexColor");
color.textContent = window.localStorage.getItem("hexColor");
color.style.color = window.localStorage.getItem("hexColor");
let pop = document.querySelector(".pop-up")

btn.addEventListener("click", () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
        window.localStorage.setItem("hexColor", hexColor);
    }
    if (hexColor === "#000000") {
        color.style.color = "#000000";
    }
    document.body.style.background = window.localStorage.getItem("hexColor");
    color.textContent = hexColor;
    color.style.color = hexColor;
});

copy.addEventListener("click", () => {
    copy_function();
    gsap.to(".pop-up", {
        y: 0,
        opacity:1,
        duration:0.5
    })
    setTimeout(() => {
        gsap.to(".pop-up", {
            y: 30,
            opacity: 0,
            duration: 0.5
        })
    },2500)
})

function copy_function() {
    navigator.clipboard.writeText(window.localStorage.getItem("hexColor"));
}


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
