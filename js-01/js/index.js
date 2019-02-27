// const greetings = "Hello World!";
// alert(greetings);

// number
// string
// boolean
// null
// undefined
// Object
// Symbol

// const age = 42;
// let isMerried = false;

// const userAge = parseInt(prompt("How old are you?"));
// alert("Next year you will be " + nextAge + " years old.");

// const userAge = parseInt(prompt("How old are you?"));
// userAge >= 18 ? alert("Adult") : alert("not Adult");

/* function checkAge(userAge) {
  if (userAge >= 18) {
    return "Adult";
  } else {
    return "not Adult";
  }
}

const userAge = parseInt(prompt("How old are you?"));
alert("You are " + checkAge(userAge)); */

// Task for you
// Modify function to show 'old' if you user is older than 100

function checkAge(userAge) {
  if (Number.isNaN(userAge)) {
    return "input is not correct";
  }
  if (userAge > 100) {
    return "older than 100 y.o.";
  } else {
    return "younger than 100 y.o.";
  }
}

const userAge = parseInt(prompt("How old are you?"));

alert("You are " + checkAge(userAge));
