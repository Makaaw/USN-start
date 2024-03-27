var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", handleLogin);

function handleLogin(event) {
  event.preventDefault(); // stans standard form sin handling, gir muligheit til å validere input før nettlesar forlet sida

  var username = document.getElementById("username-input").value;
  var password = document.getElementById("password-input").value;
  console.log(username, password);
  
  if (username === "brukernavn" && password === "passord") {
    // Riktig brukernavn og passord
    window.location.href = "#";
  } else {
    // Feil brukernavn og passord
    alert("Feil brukernavn eller passord");
  }
}