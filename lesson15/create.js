let input1 = document.getElementById("intitle")
let input2 = document.getElementById("inimage")
let input3 = document.getElementById("inprice")
let createbtn = document.querySelector(".inbutton")

const API = 'https://66dfd7322fb67ac16f2740dd.mockapi.io/product'

async function createService() {
    const payload = {
        name: input1.value,
        avatar: input2.value,
        price: input3.value,
    }

    try {
         const res = await fetch(API, {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
         })
         const data = await res.json()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}

createbtn.addEventListener('click', createService)

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





