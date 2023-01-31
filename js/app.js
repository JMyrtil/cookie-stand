'use strict';

console.log('hello');


let time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let seattle = {
  location: 'seattle',
  max: 25,
  min: 65,
  avg: 6.3,
  soldCookies: [],
  dailyTotal: 0,
  customer: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  cookiesS: function () {
    for (let i = 0; i < time.length; i++) {
      let customerS = this.customer();
      let cookiesSold = Math.ceil(customerS * this.avg);
      console.log(cookiesSold);
      this.soldCookies.push(cookiesSold);
      this.dailyTotal += cookiesSold
    }
  },

  render: function () {
    this.cookiesS();
    let cookieprofile = document.getElementById('Cookies');
    let ul = document.createElement('ul');
    cookieprofile.appendChild(ul);
    for (let i = 0; i < time.length; ++i) {
      let li = document.createElement('li');
      li.textContent = `${time[i]}: ${this.soldCookies[i]}`;
      ul.appendChild(li);
    }
    let totalLi = document.createElement('li');
    totalLi.textContent = `Total: ${this.dailyTotal}`;
    ul.appendChild(totalLi)
  }
}
seattle.render()

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
