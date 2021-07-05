import DonutMaker from './DonutMaker.js';


// const create = document.querySelector('makeDonutBtn'),
//     div = document.querySelector('div');


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



