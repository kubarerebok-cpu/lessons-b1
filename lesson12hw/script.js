let array = [
  {
    id: 1,
    title: "BESTSELLER",
    Image: "./images.png/images.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 2,
    title: "SOLITAIRE",
    Image: "../images.png/images.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 3,
    title: "PLATINUM",
    Image: "./images.png/images.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
  {
    id: 4,
    title: "CHEAP",
    Image: "./images.png/images.png",
    desc: "Trendy models of our experts, for the love of your life selected",
    prise: 100,
  },
]

let products = document.querySelector(".products")
let show = array.map((item) => {
  return `
     <div class="cart">
       <img src="${item.Image}" alt="">
          <h3>${item.title}</h3>
          <p>Trendy models of our experts, for the love of your life selected</p>
          <button>Discover now</button>
    </div>
    `
})
products.innerHTML = show.join("");




const  kkk = [
    {
        id: 1,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
     {
        id: 2,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
     {
        id: 3,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
     {
        id: 4,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
     {
        id: 5,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
]


let too1 = document.querySelector(".too1")
let num = kkk.map((item) => {
  return `
    <div class="tooich">
                    <img src="${item.Image}" alt="">
                    <h3>${item.title}</h3>
                    <p>Gold 585 | 0,100 ct. | tw, si
€ 365,-</p>
                </div>`
})
too1.innerHTML = num.join("");




let ppp = [
    {
         id: 1,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
     {
         id: 2,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
    {
         id: 3,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
    {
         id: 4,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
    {
         id: 5,
        title: "123GOLD",
        Image:"./images.png/image copy.png",
        desc: "Gold 585 | 0,100 ct. | tw, si€ 365,-",
        prise: 100,
    },
    
    
] 


let mmm0 = document.querySelector(".mmm0")
let lp = kkk.map((item) => {
  return `
    <div class="mmm0-">
                    <img src="${item.Image}" alt="">
                    <h3>${item.title}</h3>
                    <p>Gold 585 | 0,100 ct. | tw, si
€ 365,-</p>
                </div>`
})
mmm0.innerHTML = lp.join("");






















