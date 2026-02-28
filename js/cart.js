
let cart=
JSON.parse(
localStorage.getItem("cart")
||"[]");


function render(){

cartItems.innerHTML="";


let total=0;


cart.forEach((c,i)=>{


cartItems.innerHTML+=

`

${i+1}.

${c.name}

${c.option}

+${c.qty}

<br>

`;


total+=
Number(c.qty);


});


total.innerText=
total;

}



function copyCart(){

let text="MAARU訂單\n\n";


text+="暱稱："+cart[0].nickname+"\n\n";


cart.forEach((c,i)=>{


text+=

(i+1)+". "+c.name+"\n"+

c.option+

" +"+c.qty+

"\n\n";


});


navigator.clipboard.writeText(text);


alert("已複製LINE訂單");

}


render();