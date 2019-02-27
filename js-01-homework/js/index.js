const a = parseInt(prompt('Enter value for "a"'));
const b = parseInt(prompt('Enter value for "b"'));
const c = parseInt(prompt('Enter value for "c"'));

function calcDiscr(a, b, c) {
  return b * b - 4 * a * c;
}

function solveQuadr(a, b, c) {
  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    return "input is not correct";
  }

  const d = calcDiscr(a, b, c);

  if (d < 0) {
    return "The equation has no real solutions!";
  } else if (d === 0) {
    return "x=" + (-b / 2) * a;
  } else {
    return (
      "x1=" +
      (-b + Math.sqrt(d)) / (2 * a) +
      "; x2=" +
      (-b - Math.sqrt(d)) / (2 * a)
    );
  }
}

alert(solveQuadr(a, b, c));
