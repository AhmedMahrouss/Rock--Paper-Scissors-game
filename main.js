let rules = document.getElementById("rules");
let msg = document.querySelector(".msg");
let closee = document.querySelector(".close");
let reset = document.getElementById("reset");
let numScore = document.querySelector(".numscore :nth-child(2)");
let paper = document.querySelector(".top :first-child")
// Open message rule
rules.onclick = ()=>{
msg.style.display = "block"
}
// Close Message Rule
closee.onclick = ()=>{
msg.style.display = "none"
}
onload = ()=>{
msg.style.display = "block"
}

reset.onclick = ()=>{
numScore.innerHTML = '0'
}

