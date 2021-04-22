const submit__btn = document.querySelector("#submit__btn");
const username = document.querySelector("#username");
const form__control = document.querySelector(".form__control");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm__password = document.querySelector("#confirm__password");

function checkError(element) {
  if(element.value === "") {
    element.parentElement.classList.add("error");
    element.parentElement.classList.remove("success");
    element.nextElementSibling.innerHTML = "Input box cannot be empty";
    return false;
  } else {
    element.parentElement.classList.remove("error");
    element.parentElement.classList.add("success");
    return true;
  }
}

function checkPassword(pass, confirm_pass) {
  if(pass.value !== confirm_pass.value) {
    pass.nextElementSibling.innerHTML = "Enter same password";
    confirm_pass.nextElementSibling.innerHTML = "Enter same password";
    pass.parentElement.classList.add("error");
    confirm_pass.parentElement.classList.add("error");
  }
}

submit__btn.addEventListener('click', function() {
  checkError(username);
  checkError(email);
  checkError(password);
  if(checkError(confirm__password)) {
    checkPassword(password, confirm__password) 
  }
});