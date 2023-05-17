let num1 = 2;
let num2 = 5;

function testNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let test = testNumber(num1, num2);
console.log("testNumber " + test);
