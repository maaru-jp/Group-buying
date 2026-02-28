const API_URL="https://script.google.com/macros/s/AKfycbzG6-Y8XTiYGNl2wbbKzWvSh6v0FnrRSqwopFwaGIdfe9hjFFxFhWnuY6wAkONXyqwkqg/exec";


let groups=[];


async function loadGroups(){

const res=
await fetch(API_URL+
"?type=groups");

groups=
await res.json();

render();

updateCart();

}



function render(){

activeGroups.innerHTML="";
comingGroups.innerHTML="";


groups.forEach(g=>{

const card=
createCard(g);


if(g.status=="active")
activeGroups.appendChild(card);


if(g.status=="coming")
comingGroups.appendChild(card);


});


}



function createCard(g){

const div=
document.createElement("div");

div.className="group-card";


div.onclick=()=>{

location.href=
"group.html?id="+g.id;

};



div.innerHTML=`

<div class="slider">

<div class="slide-track"
id="track_${g.id}">


<img src="${g.image1}">
<img src="${g.image2}">
<img src="${g.image3}">


</div>

<div class="arrow"
onclick="slideLeft(event,'${g.id}')">

‹

</div>

<div class="arrow"
style="right:10px"
onclick="slideRight(event,'${g.id}')">

›

</div>

</div>



<div class="group-title">

${g.name}

<br>

${countdown(g.end)}

</div>

`;

return div;

}



function countdown(end){

const diff=
new Date(end)-
new Date();


const d=
Math.floor(diff/
86400000);

return "剩"+d+"天結團";

}



function updateCart(){

let cart=
JSON.parse(
localStorage.getItem("cart")
||"[]");


cartCount.innerText=
cart.length;

}


function goCart(){

location.href=
"cart.html";

}



loadGroups();