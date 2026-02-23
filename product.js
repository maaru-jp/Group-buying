document.addEventListener("DOMContentLoaded", async ()=>{
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  const store = await fetchStore();
  const product = store.products.find(p=>p.product_id===id);

  const container = document.getElementById("product");

  container.innerHTML = `
    <h2>${product.name}</h2>
    ${product.variants.map(v=>`
      <div class="variant">
        <h4>${v.style}</h4>
        <div class="price">NT$ ${v.price_twd}</div>
        <p>剩餘 ${v.stock}</p>
        <input type="number" id="qty-${v.variant_id}" value="1" min="1">
        <button onclick="addToCart('${v.variant_id}',${v.price_twd})">
          加入
        </button>
      </div>
    `).join("")}

    <button onclick="checkout()">前往LINE結帳</button>
  `;
});

let cart=[];

function addToCart(id,price){
  const qty = parseInt(document.getElementById(`qty-${id}`).value);
  cart.push({variant_id:id,qty,price_twd:price});
}

async function checkout(){
  const customer="LINE客戶";
  const total = cart.reduce((s,i)=> s+i.price_twd*i.qty,0);

  const order = await createOrder({
    customer,
    total,
    items:cart
  });

  const text = `訂單編號：${order.orderId}`;
  window.location.href =
    "https://line.me/R/msg/text/?"+encodeURIComponent(text);
}