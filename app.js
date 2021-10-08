const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let btn = document.querySelector(".btn");
let color = document.querySelector(".bg");


btn.addEventListener("click",()=>{
    let hexColor = '#';
    for(let i = 0;i < 6;i++){
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.background = hexColor
    color.textContent = hexColor
    console.log(hexColor);
    if(hexColor === "#000000"){
        btn.style.color = "#fff";
        btn.style.borderColor = "#888888"
    }
})

// get random number
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}