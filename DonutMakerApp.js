import DonutMaker from './DonutMaker.js';


const makeDonutBtn = document.querySelector('#makeDonutBtn'),
    autoClickerBtn = document.querySelector('#purchaseAutoClickerBtn'),
    donutMultiplierBtn = document.querySelector('#purchaseDonutMultiplierBtn'),
    myDonutsDiv = document.getElementById('myDonuts');

const createdDonut = new DonutMaker(0,0,100,0,10)

makeDonutBtn.addEventListener('click', () => {  
  createdDonut.createADonut();
  document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount;
})

autoClickerBtn.addEventListener('click', () => {
  createdDonut.purchaseAutoClicker();
  document.getElementById('current__autoClicker__count').innerHTML = createdDonut.autoClickerCount;
  document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount;
  document.getElementById('current__autoClicker__cost').innerHTML = createdDonut.autoClickerCost;
})

donutMultiplierBtn.addEventListener('click', () => {
  createdDonut.purchaseDonutMultiplier();
  document.getElementById('current__donutMultiplier__count').innerHTML = createdDonut.donutMultiplierCount;
  document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount;
  document.getElementById('current__donutMultiplier__cost').innerHTML = createdDonut.donutMultiplierCost;
  document.getElementById('current__donuts__per__click').innerHTML = createdDonut.getDonutMultiplier();
})

// var i = 1;
// var interval = setInterval(function() {
//   for (var i = 1, (autoClickerCount > 0), i++) {
//     donutCount += (1 * autoClickerCount);
//     document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount;
//   }
// }, 1000);

// var donutCount = 0;
function autoClick() {
    console.log('autoclick working');
    createdDonut.activateAutoClickers();
    console.log(createdDonut.donutCount);
    document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount;
}
setInterval(autoClick, 1000);


// function myCurrentDonuts(donuts) {
//     return (
//         'Current number of donuts: ' +
//         donuts.donutCount
//     );
// };

// create.addEventListener('click', () => {
//     const myDonuts = new DonutMaker(0);
//     const donutPara = document.createElement('div');
//     donutPara.innerText = numberOfDonuts(donuts);
//     div.appendChild(donutPara);

//     const makeDonutBtn = document.createElement('button');
//     makeDonutBtn.innerText = 'Make a Donut';
//     myDonutsDiv.appendChild(makeDonutBtn);

//     makeDonutBtn.addEventListener('click', () => {
//         createdDonut.clickToCreateADonut();
//         donutPara.innerText = 
//         'Current number of donuts: ' +
//         donuts.donutCount
//     }) 
// });





// const numberOfDonuts = (donuts) => {
//     return (
//         'Current number of donuts: ' +
//         donuts.donutCount
//     );
// };

// export const createDonutEvent = (variable, elem, obj) => {
//     variable.addEventListener('click', () => {
//         obj.clickToCreateADonut();
//         elem.innerText = numberOfDonuts(obj);
//     });
// };

// export const createActionButton = (parentElem, childElem, text) => {
//     childElem.innerText = text;
//     parentElem.appendChild(childElem);
// };









let buttons = document.getElementsByClassName('button');
for(let i=0; i<buttons.length; i++) {
  buttons[i].onclick = function(e) {
    let id = e.target.id.replace('Btn','');
    showModal(id);
  }
};

let closes = document.getElementsByClassName('close');
for(let i=0; i<closes.length; i++){
  closes[i].onclick = function(e){
      let id = e.target.id.replace('_closeBtn','');
      let modal = document.getElementById(id + '_modal');
      modal.style.display = 'none';
  }
};

function showModal(id){
    let modals = document.getElementsByClassName('modal-content');  
    for(let i=0; i<modals.length; i++){
       modals[i].style.display = 'none';
    }
  
    let modal = document.getElementById(id + '_modal');
    modal.style.display = 'block';
};



