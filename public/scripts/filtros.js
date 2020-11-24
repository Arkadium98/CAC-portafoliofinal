// Get the container element
let btnContainer = document.getElementById("btn-row");

// Get all buttons with class="btn-proyecto" inside the container
let btns = btnContainer.getElementsByClassName("btn-proyecto");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("btn-active");
    current[0].className = current[0].className.replace(" btn-active", "");
    this.className += " btn-active";
  });
}

//Showing all projects
document.getElementById("btn-todos").onclick = function () {
  let all = document.querySelectorAll(".proyecto");
  for (let i = 0; i < all.length; i++) {
    all[i].style.display = "inline-block";
  }
};

//Showing programming projects
document.getElementById("btn-C++").onclick = function () {
  let all = document.querySelectorAll(".proyecto");
  for (let i = 0; i < all.length; i++) {
    if (all[i].classList.contains("C++")) {
      all[i].style.display = "inline-block";
    } else {
      all[i].style.display = "none";
    }
  }
};

document.getElementById("btn-C#").onclick = function () {
  let all = document.querySelectorAll(".proyecto");
  for (let i = 0; i < all.length; i++) {
    if (all[i].classList.contains("C#")) {
      all[i].style.display = "inline-block";
    } else {
      all[i].style.display = "none";
    }
  }
};

//Showing develpoment projects
document.getElementById("btn-diseno").onclick = function () {
  let all = document.querySelectorAll(".proyecto");
  for (let i = 0; i < all.length; i++) {
    if (all[i].classList.contains("diseno")) {
      all[i].style.display = "inline-block";
    } else {
      all[i].style.display = "none";
    }
  }
};

//Showing design projects
document.getElementById("btn-hidraulica").onclick = function () {
  let all = document.querySelectorAll(".proyecto");
  for (let i = 0; i < all.length; i++) {
    if (all[i].classList.contains("hidraulica")) {
      all[i].style.display = "inline-block";
    } else {
      all[i].style.display = "none";
    }
  }
};
