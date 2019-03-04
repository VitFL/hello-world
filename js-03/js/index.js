/*  */
let teslaX = {};
teslaX.model = 'Model X';
teslaX.brand = 'Tesla';
teslaX.price = 1200000;
teslaX.beep = beep;
console.log(teslaX.model);
teslaX.beep();

/*  */
let teslaS = {
  model: 'Model S',
  brand: 'Tesla',
  price: 80000,
  beep: beep,
};
console.log(teslaS.model);
teslaS.beep();

function beep() {
  console.log(this.brand + ' ' + this.model + ' beep-beep!');
}

/* Constructor function */
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  // this.beep = beep; - Not a good practice; look below for better way to do this;
  return this;
}

Car.prototype.beep = beep;

let tavria = new Car('ZAZ', 'Tavria', 500);
console.dir(tavria);
tavria.beep();

let slavuta = Object.create(tavria);
console.dir(JSON.stringify(slavuta));
// Wrong beep behavior
slavuta.beep();
// Fixing beep behavior
slavuta.model = 'Slavuta';
console.dir(JSON.stringify(slavuta));
slavuta.beep();

const tavriaJSON = JSON.stringify(tavria);
console.log(tavriaJSON);
let tavriaNova = JSON.parse(tavriaJSON);
console.log(tavriaNova);

/*  */

class SuperCar extends Car {
  constructor(brand, model, price) {
    super(brand, model, price);
  }
  beep() {
    console.log(`SuperCar ${this.brand} ${this.model} beep-beep!`);
  }
}

const ferrariLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 300000);
ferrariLaFerrari.beep();
console.dir(ferrariLaFerrari);

/*        Set object        */

const nums = [1, 2, 3, 33, 44, 42, 1, 2, 42, 5];

const uniqueSet = new Set(nums);

const uniqNums = [...uniqueSet];

console.log(uniqNums);

/*        filter method        */

const odds = uniqNums.filter(el => el % 2);
console.log(odds);

const even = uniqNums.filter(el => el % 2 === 0);
console.log(even);

/*        reduce method        */

// [1, 2, 3, 33, 44, 42, 5]
const sum = odds.reduce((acc, el) => acc + el, 0);
console.log(sum);
