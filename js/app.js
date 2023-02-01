'use strict';

console.log('hello');

let time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];


function Area(name, max, min, avg) {
  this.location = name;
  this.max = max;
  this.min = min;
  this.avg = avg;
  this.soldCookies = [];
  this.dailyTotal = 0;



  // let seattle = {
  //   location: 'seattle',
  //   max: 25,
  //   min: 65,
  //   avg: 6.3,
  //   soldCookies: [],
  //   dailyTotal: 0,

  this.customer = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.cookiesS = function () {
    for (let i = 0; i < time.length; i++) {
      let customerS = this.customer();
      let cookiesSold = Math.ceil(customerS * this.avg);
      this.soldCookies.push(cookiesSold);
      this.dailyTotal += cookiesSold
    }
  },

    this.render = function () {
      this.cookiesS();
      let cookieprofile = document.getElementById('Cookies');
      let ul = document.createElement('ul');
      cookieprofile.appendChild(ul);
      for (let i = 0; i < time.length; ++i) {
        let li = document.createElement('li');
        li.textContent = `${time[i]}: ${this.soldCookies[i]}`;
        // ul.appendChild(li);
      }
      let totalLi = document.createElement('li');
      totalLi.textContent = `Total: ${this.dailyTotal}`;
      // ul.appendChild(totalLi)
    }
}

Area.prototype.renderTable = function () {
  let openTable = document.querySelector('table');

  let tr = document.createElement('tr');
  let tdLocation = document.createElement('td');
  tdLocation.textContent = this.location;

  tr.appendChild(tdLocation)
  for (let i = 0; i < time.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${this.soldCookies[i]}`;
    tr.appendChild(td);
  }
  // for (let i = 0; i < time.length; i++) {
  //   let thTime = document.createElement('th');
  //   thTime.textContent = time[i];
  //   td.appendChild(thTime);
  // }
  openTable.appendChild(tr);
}

let seattlestore = new Area(
  'seattle',
  65,
  25,
  6.3);

let tokyostore = new Area(
  'tokyo',
  24,
  3,
  12);

let dubaistore = new Area(
  'dubai',
  28,
  11,
  3.7);

let parisstore = new Area(
  'paris',
  38,
  20,
  2.3);

let limastore = new Area(
  'lima',
  16,
  2,
  4.6);

seattlestore.render();
seattlestore.renderTable();
tokyostore.render();
tokyostore.renderTable();
dubaistore.render();
dubaistore.renderTable();
parisstore.render();
parisstore.renderTable();
limastore.render();
limastore.renderTable();



// }
// seattle.render()

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

