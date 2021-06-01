'use strict'
let food =[];
let container = document.getElementById('container')
let table = document.createElement('table');
container.appendChild(table);
let tr1 = document.createElement('tr')
table.appendChild(tr1)
let th1 = document.createElement('th')
tr1.appendChild(th1)
th1.textContent = '  orderimage'

let th2 = document.createElement('th')
tr1.appendChild(th2);
th2.textContent = '  order details'
// let par1 = document.createElement('p');
// th2.appendChild(par1);


// let ulel = document.createElement('ul')
// container.appendChild(ulel);

let order = document.getElementById('order');

  function Foodlovers(customerName, foodtype){
      this.customerName = customerName;
      this.foodtype = foodtype;
// this.orderImg= orderImg;
// this.orderDetail = orderDetail;
// this.foodPrice = foodPrice;
this.min = 50;
this.max= 80;
this.randomNumber1=[];
food.push(this);

  }

 new Foodlovers(customerName,foodtype);

  let shawarma;
  let pizza;
  let burger;
  let foodArray = [burger,pizza,shawarma];

let imagePath = ['img/burger.jpg','img/pizza.jpg','img/shawarma.jpg'];


function generateImg(){
foodArray[0]= imagePath[0]
foodArray[1]= imagePath[1]
foodArray[2]= imagePath[2]

}
generateImg();
// console.log(food);

function settingItems(){
    let data = JSON.stringify(food)
    localStorage.setItem('food', data)
render();
}

function gettingItems(){
    let stringObj = localStorage.setItem('food');
    let normalObj = JSON.parse(stringObj);
    
    if (normalObj !== null);
    food = normalObj;

}

function render(){
    let par1 = document.createElement('p');
    th2.appendChild(par1);
    
    for (let i = 0; i < food.length; i++) {
    
        par1.textContent = `customer name: ${customerName}
        food type: ${foodtype}
        food price : ${randomNumber}`
    }


}

  Foodlovers.prototype.randomNumber = function(){
    this.randomNumber1.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
  }



let myForm = document.getElementById('myForm');
myForm.addEventListener('submit',ADDORDER);

function ADDORDER(event){
    event.preventDefault();
    let event1 = event.target.customerName.value
    let event2= event.target.foodtype.value
     let newFood = new Foodlovers(event1,event2);

newFood.randomNumber1();
render();
// newFood.generateImg();

}

