// crud
// c - creat, post
// R - READ, GET
// U - UPDATE, PUT
// D - DELATE, DEALTE
 
const API = 'https://66dfd7322fb67ac16f2740dd.mockapi.io/product'
let result = document.querySelector('.result')
async function getService() {
    try{
    const res = await fetch(API)
    const data = await res.json('')
    console.log(data);
    showService(data)
    } catch (error) {
        console.log(error)
        result.innerHTML = 'NOT FOUNT 404'
    }
    
}
getService();


async function showService(data) {
    result.innerHTML = data.map((item) =>{
        return`
         <div class="service">
        <img src="${item.avatar}" alt="">
        <div class="info">
            <b>${item.name}</b>
            <p>${item.price}</p>
        </div>
        <div class="btns">
            <button onclick='updateProduct(1)(${item.id})' class="update">update</button>
            <button  onclick='deleteService(${item.id})' class="delete">delete</button>
        </div>
    </div>
        `
        
    }).join("")
}

async function deleteServis(id) {
    let check = confirm("сиз очурууну каалайсызбы")
    if(!check){
        return
    }
    try {
        const res = await fetch(`${API}/${id}`,{
            method: "delete"
        })
        if (res.status === 200) (
            getService()
        )
    } catch (error){

    }
    
}

let currentId = null;

const modal = document.getElementById("modal");
let editId = null;

async function openEdit(id) {
  editId = id;

  const res = await fetch(`${API}/${id}`);
  const p = await res.json();

  document.getElementById("editTitle").value = p.name;
  document.getElementById("editImage").value = p.avatar;
  document.getElementById("editPrice").value = p.price;

  modal.classList.add("active");
}

document.getElementById("saveBtn").onclick = async () => {
  try {
    const res = await fetch(`${API}/${editId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("editTitle").value,
        avatar: document.getElementById("editImage").value,
        price: document.getElementById("editPrice").value,
      }),
    });

    if (!res.ok) throw new Error("Ката: " + res.status);

    modal.classList.remove("active");
    getProducts();
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("closeBtn").onclick = () =>
  modal.classList.remove("active");

modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("active");
};

