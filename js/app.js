'use strict';

console.log('hello');

let cookieprofile = document.getElementById('Cookies');
console.log(cookieprofile);

let cookiearticle = document.createElement('article');

cookieprofile.appendChild(cookiearticle);

let cookieh3 = document.createElement('h3');
cookieh3.textContent = 'Tasty'
cookiearticle.appendChild(cookieh3);

let time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm',];

let seattle = {
  location: 'seattle',
  max: 25,
  min: 65,
  avg: 6.3,
  avgNumbS: function () {
    let ul = document.createElement('ul');
    for (let i = 0; i < time[0].length; ++i); {
      console.log(time);
      let li = document.createElement('li');
      li.textContent = time[0];
      ul.appendChild(li);
      cookiearticle.appendChild(ul);
      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
  }

}

seattle.avgNumbS();


// let tokyo = {
//   location: 'tokyo',
//   max: 24,
//   min: 3,
//   avg: 12,
//   avgNumbT: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// }

// let dubai = {
//   location: 'dubai',
//   max: 38,
//   min: 11,
//   avg: 3.7,
//   avgNumbD: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// }

// let paris = {
//   location: 'paris',
//   max: 38,
//   min: 20,
//   avg: 2.3,
//   avgNumbP: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// }

// let lima = {
//   location: 'lima',
//   max: 16,
//   min: 2,
//   avg: 4.6,
//   avgNumbL: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   }
// }
