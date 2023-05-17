let dodaj = document.getElementById("dodaj");
let usun = document.getElementById("usun");
let tekst = document.getElementById("tekst");

dodaj.addEventListener("click", function() {
  tekst.textContent = "Kitty Cat";
});

usun.addEventListener("click", function() {
  tekst.textContent = "";
});

