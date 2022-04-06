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

function changeContrast(element, colorTo) {
  for(var i = 0; i < element.length; i++){
    element[i].style.color = colorToChange;
  }
}

function changeMode() {
  if (themeBtn.innerHTML === "DARK MODE") {
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