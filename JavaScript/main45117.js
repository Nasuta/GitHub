const button = document.getElementById('button');
const nameField = document.getElementById('name');
const surnameField = document.getElementById('surname');
const phoneField = document.getElementById('phone');

button.addEventListener('click', () => {
  const name = document.getElementById('imie').value;
  const surname = document.getElementById('nazwisko').value;
  const phone = document.getElementById('telefon').value;

  nameField.textContent = `Imię: ${name}`;
  surnameField.textContent = `Nazwisko: ${surname}`;
  phoneField.textContent = `Numer telefonu: ${phone}`;
});