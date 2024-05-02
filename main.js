const email = document.getElementById("email");
const error = document.getElementById("error");
const notify = document.getElementById("notify");

function validateEmail (email) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

notify.addEventListener("click", function (e) {
  e.preventDefault();

  if (validateEmail(email.value)) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
});