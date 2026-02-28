const API_URL="https://script.google.com/macros/s/AKfycbzG6-Y8XTiYGNl2wbbKzWvSh6v0FnrRSqwopFwaGIdfe9hjFFxFhWnuY6wAkONXyqwkqg/exec";


const id=
new URL(location.href)
.searchParams.get("id");


let groupData;



async function loadGroup(){

const res=
await fetch(API_URL+
"?type=group&id="+id);

groupData=
await res.json();


title.innerText=
groupData.name;


mainImage.src=
groupData.image1;



groupData.options
.split(",")

.forEach(o=>{

const op=
document.createElement("option");

op.text=o;

option.add(op);

});


nickname.value=
localStorage.getItem("nickname")
||"";

}



function addCart(){

const nick=
nickname.value;


if(!nick){

alert("請輸入暱稱");

return;

}


localStorage.setItem(
"nickname",
nick);


const cart=
JSON.parse(
localStorage.getItem("cart")
||"[]");


cart.push({

name:groupData.name,

nickname:nick,

option:option.value,

qty:qty.value

});


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


alert("已加入跟團");

}



loadGroup();