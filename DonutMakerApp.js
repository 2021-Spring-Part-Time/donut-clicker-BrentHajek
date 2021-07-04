// const container = (document.querySelector('.container').innerText =
//   'mmmmmmmmm doughnuts.... ahhhhhhh!');

// function myPopupFunction() {
//   var popup = document.getElementsById('fredPopup');
//   popup.classList.toggle('show');
// }

var modal = document.getElementById("myModal");

var btn = document.getElementById("fredBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};





// import { create } from 'istanbul-reports';
// import DonutMaker from './DonutMaker.js';
// import { createActionButton, createDonutEvent } from './utils.js';

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