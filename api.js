async function fetchStore(){
  const res = await fetch(CONFIG.API_URL);
  return await res.json();
}

async function createOrder(data){
  const res = await fetch(CONFIG.API_URL,{
    method:"POST",
    body: JSON.stringify(data)
  });
  return await res.json();
}