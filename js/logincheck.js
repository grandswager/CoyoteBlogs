var acc = localStorage.getItem("account");
let user = document.getElementById("username");
let pass = document.getElementById("password");

function login() {
  if (user.value === "grandswager" && pass.value === "Benny") {
    console.log("login to grandswager");
    localStorage.setItem("account", "grandswager");
    window.location.href = "/";
  } else if (user.value === "Grandcoyote2" && pass.value === "Alex") {
    console.log("login to Grandcoyote2");
    localStorage.setItem("account", "Grandcoyote2");
    window.location.href = "/";
  } else if (user.value === "perutzism" && pass.value === "Cyrus") {
    console.log("login to perutzism");
    localStorage.setItem("account", "perutzism");
    window.location.href = "/";
  } else {
    console.log("wrong account");
    localStorage.setItem("account", "Not Admin");
    window.location.href = "/";
  }
}