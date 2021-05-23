const menu = [
    {
      id: 1,
      title: "Choco strawbery",
      category: "cakes",
      price: 400,
      img: "cake1.jpg",
    },
    {
      id: 2,
      title: "Choco Milkshake",
      category: "milkshake",
      price: 80,
      img: "shake1.png",
    },
    {
      id: 3,
      title: "Choco Caramel",
      category: "icecream",
      price: 100,
      img: "icecream1.jpg",
    },
    {
      id: 4,
      title: "Marble vanila cake",
      category: "cakes",
      price: 1000,
      img: "cake2.jpg",
    },
    {
      id: 5,
      title: "Coffee Milkshake",
      category: "milkshake",
      price: 70,
      img: "shake2.jpg",
    },
    {
      id: 6,
      title: "Hill lava icecream",
      category: "icecream",
      price: 90,
      img: "icecream.jpg",
    },
    {
      id: 7,
      title: "Oreo Milkshake",
      category: "milkshake",
      price: 70,
      img: "shake3.jpg",
    },
    {
      id: 8,
      title: "Brownie lava cake",
      category: "cakes",
      price: 800,
      img: "cake3.jpg",
    },
    {
      id: 9,
      title: "Mini three scoop",
      category: "icecream",
      price: 50,
      img: "icecream2.jpg",
    },
    {
        id: 10,
        title: "Waffer Milkshake",
        category: "milkshake",
        price: 95,
        img: "shake4.jpg",
    },
    {
        id: 11,
        title: "Vanila Red Velvet",
        category: "cakes",
        price: 899,
        img: "cake4.jpg",
    },
    {
        id: 12,
        title: "Mini single Scoop",
        category: "icecream",
        price: 40,
        img: "icecream3.jpg",
    },
    {
        id: 13,
        title: "Crystall Milkshake",
        category: "milkshake",
        price: 65,
        img: "shake5.jpg",
    },
    {
        id: 14,
        title: "Caramel icecream",
        category: "icecream",
        price: 45,
        img: "icecream4.jpg",
    },
    {
        id: 15,
        title: "Broken Hill cake",
        category: "cakes",
        price: 999,
        img: "cake5.jpg",
    },
    {
        id: 16,
        title: "Family icecream",
        category: "icecream",
        price: 100,
        img: "icecream5.jpg",
    },
    {
        id: 17,
        title: "Cherry Milkshake",
        category: "milkshake",
        price: 75,
        img: "shake6.jpg",
    },
    {
        id: 18,
        title: "Happy B'day Cake",
        category: "cakes",
        price: 1199,
        img: "cake6.jpg",
    },
  ];

const navbar = document.getElementById("nav");
const content = document.querySelector(".items");
const btns = document.querySelectorAll(".btn-filter")
const orderList = document.querySelector('.order');
const item = document.querySelectorAll(".item");
const cartBtns = document.querySelectorAll(".place-order");
const clearBtn = document.querySelector(".clear");
const placeBtn = document.querySelector(".place")
const alertmsg = document.querySelector(".alert");
const totalPrice = document.querySelector(".totalPrice");
// const cartItem = document.querySelector(".cart-items");

let addToCart;
let amount;
let amountFinal;
let price = [];
let count = 0
let element;

// let fruits = [];
// fruits.push(2);
// console.log(fruits);
// console.log(fruits.length);
// let sum = 0;
// for(let i = 0; i<fruits.length;i++){
//   sum += fruits[i]
// }

// console.log(sum);



console.log(orderList);

console.log(content);



window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
})

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add('nav-disp');
    }
    else{
        navbar.classList.remove('nav-disp');
    }
    
})

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const btnCategory = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function(menuIt){
            if(menuIt.category === btnCategory){
                return menuIt;
            }
        })
        console.log(menuCategory);

        if(btnCategory === "all"){
            displayMenuItems(menu);
        }
        else{
            displayMenuItems(menuCategory)
        }
    })
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="item">
        <div class="img-container">
          <img src="${item.img}" alt="">
        </div>
        <div class="context">
          <h4>${item.title}</h4>
          <p>Rs.${item.price}</p>
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
        </div>
      </div>`

    })
    
    displayMenu = displayMenu.join("");
    console.log(displayMenu);
    content.innerHTML = displayMenu;
    
}
content.addEventListener("click",function(e){
  addToCart = e.target.parentElement.children[0].textContent;
  console.log(addToCart);

  amount = e.target.parentElement.children[1].textContent;
  amountFinal = parseInt(amount.slice(3));
  console.log(amountFinal);

  price.push(amountFinal);
  
  console.log(price);
  
  let i;
  let sum = 0
  for(i=0;i<price.length;i++){
    sum += price[i]
  }
  console.log(sum);

  // const price1 = document.createElement("p");
  // price1.classList.add("product-price");
  // price1.innerHTML = `Rs.${sum}`
  
  // cartItem.appendChild(price1);

  totalPrice.textContent = "Rs." +sum;



  element = document.createElement("article");
  console.log(element);
  element.classList.add("grocery-list");
  element.innerHTML = `<p>${addToCart} </p>
  <button class="delBtn" type="button"><i class="fa fa-trash del" aria-hidden="true"></i></button>`
  
  orderList.appendChild(element);
  count++;
  console.log(count);
  dispAlert("Item added","alert-success");

  const delBtn = element.querySelector(".delBtn");
  
  delBtn.addEventListener("click",function(e){
    
    const delItem = e.target.parentElement.parentElement;
    console.dir(delItem);

    let toBeSearched = delItem.children[0].innerText;
    console.log(toBeSearched);
    orderList.removeChild(delItem);
    
    let filter = "title";
    let word = toBeSearched;
    let filteredData = menu.filter(function(obj){
      return obj[filter] === word;
    })
    console.log(filteredData);
    const itemAmount = filteredData[0].price;
    console.log(itemAmount);

    for(let i = 0;i<price.length;i++){
      if(price[i] === itemAmount)
      {
        console.log(i);
        price.splice(i,1);
        console.log(price);
      }
    }

    let i;
    let sum = 0
    for(i=0;i<price.length;i++){
      sum += price[i]
    }
    console.log(sum);

    totalPrice.textContent = "Rs." +sum;
    
    dispAlert("Item removed","alert-fail");
  })

  console.log(orderList);

  
})

clearBtn.addEventListener("click",clearItems);

placeBtn.addEventListener("click",function(){
  placeItems();
  
})

function clearItems(){
  const clearItem = document.querySelectorAll(".grocery-list")
  clearItem.forEach(function(list){
    orderList.removeChild(list);
    totalPrice.textContent = " "
    price = [];
    count = 0;
    dispAlert("Item removed","alert-fail");
  })
}

function placeItems(){
  const clearItem = document.querySelectorAll(".grocery-list")
  console.log(clearItem);
  console.log(orderList.length);
  if(count > 0){
    setTimeout(function(){
      alert("Order Placed");
    },100)
    
    clearItem.forEach(function(list){
      orderList.removeChild(list);
      totalPrice.textContent = " "
      price = [];
      count = 0; 
    })
  }
  else{
    setTimeout(function(){
      alert("No items found");
    },100)
  }
}

function dispAlert(text,action){
    alertmsg.textContent = text;
    alertmsg.classList.add(action);
    alertmsg.classList.remove("alert");

    setTimeout(function(){
        alertmsg.textContent = "";
        alertmsg.classList.remove(action);
        
    },1000)

}



// localStorage.setItem("hi","natraj")
// localStorage.setItem("hi",["natraj","shanmuga"])

// console.log(localStorage.getItem("h1"));