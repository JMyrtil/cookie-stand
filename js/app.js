'use strict';

console.log('hello');

let time = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let areaHead = document.querySelector('thead');
let areaBody = document.querySelector('tbody');
let areaFoot = document.querySelector('tfoot');

function Area(name, max, min, avg,) {
  this.location = name;
  this.max = max;
  this.min = min;
  this.avg = avg;
  this.soldCookies = [];
  //console.log(this.soldCookies)
  this.dailyTotal = 0;
  //console.log(this.dailyTotal)

  // let seattle = {
  //   location: 'seattle',
  //   max: 25,
  //   min: 65,
  //   avg: 6.3,
  //   soldCookies: [],
  //   dailyTotal: 0,

  this.customer = function () {
    // console.log(Math.floor((Math.random() * (this.max - this.min + 1) + this.min)*this.avg));
    return Math.floor((Math.random() * (this.max - this.min + 1) + this.min) * this.avg)
  };
  this.cookiesS = function () {
    for (let i = 0; i < time.length; i++) {
      let customerS = this.customer();
      let cookiesSold = Math.ceil(customerS * this.avg);
      this.soldCookies.push(cookiesSold);
      this.dailyTotal += cookiesSold;
    }
    this.soldCookies.push(this.dailyTotal);
  };
  this.render = function () {
    this.cookiesS();
    //   let cookieprofile = document.getElementById('Cookies');
    //   let ul = document.createElement('ul');
    //   cookieprofile.appendChild(ul);
    //   for (let i = 0; i < time.length; ++i) {
    //     let li = document.createElement('li');
    //     li.textContent = `${time[i]}: ${this.soldCookies[i]}`;
    //   // ul.appendChild(li);
    // }
    // let totalLi = document.createElement('li');
    // totalLi.textContent = `Total: ${this.dailyTotal}`;
    // ul.appendChild(totalLi)
  }
};

let seattlestore = new Area(
  'seattle',
  65,
  25,
  6.3);
seattlestore.cookiesS();


let tokyostore = new Area(
  'tokyo',
  24,
  3,
  12);
tokyostore.cookiesS();


let dubaistore = new Area(
  'dubai',
  28,
  11,
  3.7);
dubaistore.cookiesS();


let parisstore = new Area(
  'paris',
  38,
  20,
  2.3);
parisstore.cookiesS();


let limastore = new Area(
  'lima',
  16,
  2,
  4.6);
limastore.cookiesS();

let allstore = [seattlestore, tokyostore, dubaistore, parisstore, limastore];

//Header Content

let HeaderRow = function () {
  //Header Row Title
  let headerRow = document.createElement('tr');
  areaHead.appendChild(headerRow);
  let thTitle = document.createElement('th');

  thTitle.textContent = 'Cookie Chart';

  headerRow.appendChild(thTitle);
  for (let i = 0; i < time.length; i++) {
    let thTime = document.createElement('th');
    thTime.textContent = time[i];
    headerRow.appendChild(thTime);
  };
  let total = document.createElement('th');
  total.textContent = 'Daily Location Total';
  headerRow.appendChild(total)
};
HeaderRow()


//Body Row


let BodyRow = function () {
  for (let i = 0; i < allstore.length; i++) {
    let tr = document.createElement('tr');
    areaBody.appendChild(tr);
    let tdLocation = document.createElement('th');
    tdLocation.textContent = allstore[i].location;
    tr.appendChild(tdLocation);
    // let x = allstore[i];
    //console.log(allstore[i]);

    for (let j = 0; j < time.length + 1; j++) {
      let td = document.createElement('td');

      // let y = allstore[i].soldCookies[j];
      //console.log(y);

      td.textContent = `${allstore[i].soldCookies[j]}`;
      //console.log(allstore[i].soldCookies[j]);
      tr.appendChild(td)
    };
  };
};
BodyRow()


//Footer Row

let FooterRow = function () {
  let footerRow = document.createElement('tr');
  areaFoot.appendChild(footerRow);
  let fr = document.createElement('th');
  fr.textContent = 'Hourly Total';
  footerRow.appendChild(fr);
  for (let i = 0; i < time.length; i++) {
    let endTotal = 0
    let cookieHour = 0
    for (let j = 0; j < allstore.length; j++) {
      let e = allstore[j].soldCookies[i];
      endTotal += e;
      // console.log(e);
      cookieHour += endTotal;
      console.log(cookieHour);
      // for (let z = cookieHour; z = cookieHour; z++ ) {
      //   let a = z;
      //   console.log(a);
      // };
    
      
    
    }
    
    let cH = document.createElement('td');
    cH.textContent = cookieHour;
    let fd = document.createElement('td');
    fd.textContent = endTotal;
    footerRow.appendChild(fd);
    // footerRow.appendChild(cH);

  };
  // let locationF = document.createElement('td');
  // footerRow.appendChild(locationF);

};
FooterRow();

Area.prototype.renderTable = function () {









  // openTable.appendChild(headerRow)
  // openTable.appendChild(tr)
  // openTable.appendChild(footerRow)
};
Area.prototype.renderTable()




// seattlestore.render();
// seattlestore.renderTable();
// tokyostore.render();
// tokyostore.renderTable();
// dubaistore.render();
// dubaistore.renderTable();
// parisstore.render();
// parisstore.renderTable();
// limastore.render();
// limastore.renderTable();



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

