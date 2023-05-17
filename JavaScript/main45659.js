
let submitForm = (event) => {
    event.preventDefault()

let fName = document.querySelector('[name = "fname"]')
let lName = document.querySelector ('[name= "lname"]')

console.log(`Name: ${fName.value}, Surname: ${lName.value}`)
}


let form = document.getElementById('form')



form.addEventListener ('submit', submitForm)










