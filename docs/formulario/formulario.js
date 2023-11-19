const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const surnameInput = document.querySelector("#surname")
const emailInput = document.querySelector("#email")

form.addEventListener("submit", (event) =>{

    event.preventDefault();

    if(nameInput.value === "") {
    alert("por favor, preencha o seu nome ")
    return;
    }
    if(emailInput.value === ""){
        alert("por favor, preencha o seu emial ")
        return;  
    }

    form.submit();
});
