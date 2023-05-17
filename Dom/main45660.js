let form = document.getElementById("container");
let allAgreeChx = document.getElementById("all-agree");
// console.log(form);

const validate = (event) => {
  let name = document.getElementById ('name')
  let email = document.getElementById ('email')
  let agree1 = document.getElementById("agree-1");
  let agree2 = document.getElementById("agree-2");
  let errors = document.getElementById("errors");

  errors.innerHTML = ''
 
  if (name.value.trim() === ''){

    let noNameError = document.createElement('li')
    noNameError.innerText = 'Please write your name'
    errors.appendChild(noNameError)
    console.log(`no name`);
  }

  if (email.value.trim() === ''){
    let noEmailError = document.createElement('li')
    noEmailError.innerText = 'Please write your email'
    errors.appendChild(noEmailError)
    console.log(`no email`);

  }

  if (!email.value.includes ('@')){
    // let noAtError = document.createElement('li')
    // noAtError.innerText = 'Email is incorect'
    // errors.appendChild(noAtError)
    // console.log(`no at`);

  }


  if (!agree1.checked) {
    let noAgree1Error = document.createElement('li')
    noAgree1Error.innerText = 'Please check the box'
    errors.appendChild(noAgree1Error)
    console.log(`no name`);


  }


  if (errors.children.length > 0) {
    event.preventDefault();

  }

  
   
  console.log(`validate()`);
};

const allAgree = (event) => {
  let agree1 = document.getElementById("agree-1");
  let agree2 = document.getElementById("agree-2");
  agree1.checked = event.target.checked;
  agree2.checked = event.target.checked;

  agree1.disabled = event.target.checked;
  agree2.disabled = event.target.checked;

  console.log(event.target.checked);
  // console.log(agree2);
};

form.addEventListener("submit", validate);
allAgreeChx.addEventListener("change", allAgree);
