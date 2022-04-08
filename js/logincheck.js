var acc = localStorage.getItem("account");
let user = document.getElementById("username");
let pass = document.getElementById("password");

function login() {  
  if (user.value === "grandswager" && pass.value === "whyareyoumeantomeandstopbullyme1233rghhjuy2d*5^%#$%#*(54e45\ew^%&t3ygfrht7y43u") {
    console.log("login to grandswager");
    localStorage.setItem("account", "grandswager");
    window.location.href = "/";
  } else if (user.value === "Grandcoyote2" && pass.value === "aweg^&ehJGAwjeHG7R|ree}RewrER{P&33HGJ'KJDFSHGFlre/sR'fDF::DfHDFfe023+#_%)(*") {
    console.log("login to Grandcoyote2");
    localStorage.setItem("account", "Grandcoyote2");
    window.location.href = "/";
  } else if (user.value === "perutzism" && pass.value === "themostgamingpasswordofallgamersthatcouldgameharderthengamescouldgamewithkevlessgooooooo") {
    console.log("login to perutzism");
    localStorage.setItem("account", "perutzism");
    window.location.href = "/";
  } else if (user.value === "adsadfgh") {
    console.log("wrong account");
    localStorage.setItem("account", "Not Admin");
    window.location.href = "/";
  }
}