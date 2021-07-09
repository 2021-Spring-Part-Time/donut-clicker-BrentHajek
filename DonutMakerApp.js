import DonutMaker from './DonutMaker.js';

// let btnShow = document.querySelector('gameBtn');

const makeDonutBtn = document.querySelector('#makeDonutBtn'),
    autoClickerBtn = document.querySelector('#purchaseAutoClickerBtn'),
    donutMultiplierBtn = document.querySelector('#purchaseDonutMultiplierBtn'),
    myDonutsDiv = document.getElementById('myDonuts');

const createdDonut = new DonutMaker(0,0,100,0,10)

makeDonutBtn.addEventListener('click', () => {  
  createdDonut.createADonut();
  document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount.toFixed(2);
});

autoClickerBtn.addEventListener('click', () => {
  createdDonut.purchaseAutoClicker();
  document.getElementById('current__autoClicker__count').innerHTML = createdDonut.autoClickerCount;
  document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount;
  document.getElementById('current__autoClicker__cost').innerHTML = createdDonut.autoClickerCost;
});

donutMultiplierBtn.addEventListener('click', () => {
  createdDonut.purchaseDonutMultiplier();
  document.getElementById('current__donutMultiplier__count').innerHTML = createdDonut.donutMultiplierCount;
  document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount.toFixed(2);
  document.getElementById('current__donutMultiplier__cost').innerHTML = createdDonut.donutMultiplierCost.toFixed(2);
  document.getElementById('current__donuts__per__click').innerHTML = createdDonut.getDonutMultiplier().toFixed(2);
  // if(donutCount < donutMultiplierCost) {
  //   document.getElementById('#purchaseDonutMultiplierBtn').disabled = true;
  // } else { 
  //   disabled = false;
  // }
});

// function checkIfCanBuyDonutMultiplier() {
//   document.querySelector('#purchaseDonutMultiplierBtn');
//   if (donutCount < donutMultiplierCost) {
//     donutMultiplierBtn.disabled = true;
//   } else {
//     donutMultiplierBtn.disabled = false;
//   }
// }

// function checkIfICanBuyDonutMultiplier() {
//     var btn = document.getElementById('#purchaseDonutMultiplierBtn');
//     if (donutCount < donutMultiplierCost) {
//       purchaseDonutMultiplierBtn.disabled = true;
//     } else {
//       purchaseDonutMultiplierBtn.disabled = false;
//     }
// }

function autoClick() {
    createdDonut.activateAutoClickers();
    document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount.toFixed(2);
}
setInterval(autoClick, 1000);

// btnShow.addEventListener('click', () => {

// })
// gameBtn.addEventListener('greyOut', () => {
//   if(donutCount < donutMultiplierCost) btnShow.disabled = true
//   else btnShow.disabled = false;
// });

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



