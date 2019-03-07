const display = document.querySelector('.display');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const dot = document.querySelector('.dot');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const endsWithSybmol = () => [dot, ...operators].some(symbol => display.value.endsWith(symbol.innerText));

digits.forEach(digit => digit.addEventListener('click', () => (display.value += digit.innerText)));
operators.forEach(operator => operator.addEventListener('click', addOperator));
dot.addEventListener('click', () => {
  if (!endsWithSybmol()) display.value += '.';
});
equal.addEventListener('click', () => {
  if (!endsWithSybmol()) display.value = eval(display.value);
});
clear.addEventListener('click', () => (display.value = ''));

function addOperator(e) {
  if (e.target.innerText !== '-' && !display.value) return;
  !endsWithSybmol() ? (display.value += e.target.innerText) : (display.value = display.value.slice(0, -1) + e.target.innerText);
}
