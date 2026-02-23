document.addEventListener("DOMContentLoaded", async ()=>{
  const store = await fetchStore();
  const grid = document.getElementById("grid");

  store.products.forEach(p=>{
    const first = p.variants[0];
    grid.innerHTML += `
      <div class="card" onclick="go('${p.product_id}')">
        <img src="${first.images.split('|')[0]}">
        <h3>${p.name}</h3>
        <div class="price">NT$ ${first.price_twd}</div>
      </div>
    `;
  });
});

function go(id){
  window.location.href = "product.html?id="+id;
}