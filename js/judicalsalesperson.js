var mode = localStorage.getItem("mode");
var acc  = localStorage.getItem("account");
let body = document.getElementById("body");
let themeBtn = document.getElementById("navbar-toggle");
let navbar = document.getElementsByClassName("navbar");
let navbarTitle = document.getElementsByClassName("navbar-title");
let navbarLink = document.getElementsByClassName("navbar-link");
let postsText = document.getElementsByClassName("posts-text");
let sections = document.getElementsByClassName("leftcolumns");
let postInner = document.getElementsByClassName("post-inner");
let postAuthorName = document.getElementsByClassName("post-author-name");
let postAuthorLink = document.getElementsByClassName("post-author-link");
let postOuter = document.getElementsByClassName("post-outer");
let postTitle = document.getElementsByClassName("post-title");
let postAuthor = document.getElementsByClassName("post-author");
let footer = document.getElementsByClassName("footer");

function changeColor(element, colorToChange) {
  for(var i = 0; i < element.length; i++){
    element[i].style.color = colorToChange;
  }
}

function changeTheme() {
  if (themeBtn.innerHTML === "DARK MODE") {
    localStorage.setItem("mode","dark");
    console.log("Light Mode To Dark");
    themeBtn.innerHTML = "LIGHT MODE";
    body.style.backgroundColor = "black";
    for(var i = 0; i < navbar.length; i++){
      navbar[i].style.backgroundColor = "lightgray";
    }
    changeColor(navbarTitle, "black");
    changeColor(navbarLink, "black");
    changeColor(postsText, "white");
    for(var i = 0; i < sections.length; i++){
      sections[i].style.backgroundColor = "#0f0f0f";
    }
    changeColor(postInner, "white");
    changeColor(postAuthorName, "white");
    changeColor(postAuthorLink, "white");
    changeColor(postOuter, "white");
    changeColor(postTitle, "white");
    for(var i = 0; i < postAuthor.length; i++){
      postAuthor[i].style.border = "1px solid white";
    }
    for(var i = 0; i < footer.length; i++){
      footer[i].style.backgroundColor = "lightgray";
    }
  } else if (themeBtn.innerHTML === "LIGHT MODE") {
    localStorage.setItem("mode", "light")
    console.log("Dark Mode To Light");
    themeBtn.innerHTML = "DARK MODE";
    body.style.backgroundColor = "white";
    for(var i = 0; i < navbar.length; i++){
      navbar[i].style.backgroundColor = "#4f4a4a";
    }
    changeColor(navbarTitle, "white");
    changeColor(navbarLink, "white");
    changeColor(postsText, "black");
    for(var i = 0; i < sections.length; i++){
      sections[i].style.backgroundColor = "lightgray";
    }
    changeColor(postInner, "black");
    changeColor(postAuthorName, "black");
    changeColor(postAuthorLink, "black");
    changeColor(postOuter, "black");
    changeColor(postTitle, "black");
    for(var i = 0; i < postAuthor.length; i++){
      postAuthor[i].style.border = "1px solid black";
    }
    for(var i = 0; i < footer.length; i++){
      footer[i].style.backgroundColor = "gray";
    }
  }
}

function onload() {
  // light mode dark mode
  if (mode === "dark") {
    console.log("Changed theme to dark from localstorage.");
    changeTheme();
  } else if (mode === "light") {
    console.log("Already light, no need to change theme.");
  } else {
    console.log("Cannot find data/incorrect, creating key.");
    localStorage.setItem("mode","light");
  }

  // account
  if (acc === "grandswager") {
    console.log("Detected grandswager site login.")
    document.getElementById("header-title").innerText = "Hello, grandswager.";
  } else if (acc === "Grandcoyote2") {
    console.log("Detected Grandcoyote2 site login.")
    document.getElementById("header-title").innerText = "Hello, Grandcoyote2.";
  } else if (acc === "perutzism") {
    console.log("Detected perutzism site login.")
    document.getElementById("header-title").innerText = "Hello, perutzism.";
  } else {
    console.log("Not Admin");
    localStorage.setItem("account", "Not Admin");
  }
}