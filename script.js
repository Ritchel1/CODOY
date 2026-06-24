const text = "Happy Monthsary My Love ❤️";

let i = 0;

function type() {

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(type,100);

}

}

type();

const startDate = new Date("2025-01-01");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff / (1000*60*60*24));

document.getElementById("counter").innerHTML =
`${days} Days Together ❤️`;

}

setInterval(updateCounter,1000);

document.getElementById("openLetter")
.addEventListener("click",()=>{

const box = document.getElementById("letterBox");

box.style.display="block";

});

function createHeart(){

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.classList.add("heart");

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*3+3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,300);

document.getElementById("loveBtn")
.addEventListener("click",()=>{

alert(
"Thank you for being my favorite person ❤️"
);

});