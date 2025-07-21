  let form = document.getElementById("signup-form");
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let passwordEl = document.getElementById("password")
  let confirmPasswordEl = document.getElementById("confirm-password")
  let messageEl = document.getElementById("message");
function validatePassword() {
  let password = passwordEl.value
  let confirmPassword = confirmPasswordEl.value
  const pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!pattern.test(password)) {
    messageEl.textContent =
      "Password must be at least 8 characters long and include a letter, a number, and a symbol.";
    messageEl.style.color = "red";
    return false;
  }
  if (password !== confirmPassword) {
    messageEl.textContent ="Passwords do not match. Please enter the correct password.";
    messageEl.style.color='red'
    return false;
  }
  messageEl.textContent = "Password is matched";
  messageEl.style.color = "green";
  return true;
}

passwordEl.addEventListener('input',validatePassword)
confirmPasswordEl.addEventListener('input',validatePassword)

form.addEventListener('submit',function(e){
  e.preventDefault()
  if(validatePassword()){
    alert('form submition successful')
    form.submit()
  }else{
    alert('before submiting check all the details')
  }
})