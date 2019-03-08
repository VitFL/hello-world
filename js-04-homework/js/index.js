const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');
const endsWithSymbol = () => ['.', '%', '-', '+', '*', '/'].some(symbol => display.value.endsWith(symbol));

digits.forEach(digit => digit.addEventListener('click', () => (display.value += digit.innerText)));

operators.forEach(operator =>
  operator.addEventListener('click', e => {
    if (e.target.innerText !== '-' && !display.value) return;
    if (!endsWithSymbol()) {
      display.value += e.target.innerText;
    } else if (display.value.length > 1) {
      display.value = display.value.slice(0, -1) + e.target.innerText;
    }
  })
);

dot.addEventListener('click', () => {
  if (!endsWithSymbol()) display.value += '.';
});

equal.addEventListener('click', () => {
  if (!endsWithSymbol() && display.value) display.value = eval(display.value);
});

backspace.addEventListener('click', () => (display.value = display.value.slice(0, -1)));

clear.addEventListener('click', () => (display.value = ''));
