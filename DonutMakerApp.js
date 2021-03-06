import DonutMaker from './DonutMaker.js';

const makeDonutBtn = document.querySelector('#makeDonutBtn'),
    autoClickerBtn = document.querySelector('#purchaseAutoClickerBtn'),
    donutMultiplierBtn = document.querySelector('#purchaseDonutMultiplierBtn'),
    resetButton = document.querySelector('#resetBtn'),
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
});

function autoClick() {
    createdDonut.activateAutoClickers();
    document.getElementById('current__donut__count').innerHTML = createdDonut.donutCount.toFixed(2);
}
setInterval(autoClick, 1000);

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

resetButton.addEventListener('click', () => {
  location = location;
});

