function testNumber(num1, num2) {
  let result1 = num1 + num2;
  let result2 = num1 - num2;
  let result3 = num1 * num2;

  if (result1 < 0 || result2 < 0 || result3 < 0) {
    console.log("Wynik jest nieprawidłowy");
  } else {
    console.log(`Wynik dodawania wynosi ${result1}`);
    console.log(`Wynik odejmowania wynosi ${result2}`);
    console.log(`Wynik mnożenia wynosi ${result3}`);
  }
}
