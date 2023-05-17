let str1 = "Uwielbiam JavaScript";
let str2 = "Jestem świetnym programistą";

function longerWords(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

console.log(longerWords(str1, str2));



