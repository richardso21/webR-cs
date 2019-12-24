//dynamic nav bar
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    let NavElement = document.querySelector("#nav-items");
    NavElement.classList.add("transform-nav");
    let aElement = document.querySelectorAll(".a");
    var x;
    for (x = 0; aElement.length; x++) {
      aElement[x].classList.add("transform-a");
    }
  } else {
    let NavElement = document.querySelector("#nav-items");
    NavElement.classList.remove("transform-nav");
    let aElement = document.querySelectorAll(".a");
    var x;
    for (x = 0; aElement.length; x++) {
      aElement[x].classList.remove("transform-a");
    }
  }
}

//cursor follower
window.onload = function() {
  cursorfunction();
  // clickfunction();
  // welcomefunction();
};

function cursorfunction() {
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", e => {
    cursor.setAttribute(
      "style",
      "top: " + (e.clientY - 10) + "px; left: " + (e.clientX - 10) + "px;"
    );
  });

  document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  });

  const link = document.querySelectorAll('a');

  for (i=0; link.length; i++) {
    link[i].addEventListener("mouseover", e => {
      cursor.classList.add("valid");
    });
    link[i].addEventListener("mouseout", e => {
      cursor.classList.remove("valid");
    });
  }
}

// function hoverfunction() {
//   const cursor = document.querySelector(".cursor");
// }

// function clickfunction() {
//   const cursor = document.querySelector(".cursor");
// }

// // welcome-intro
// function welcomefunction() {
//   const welcome = document.querySelectorAll(".welcome-intro path");
//   // console.log(welcome);
//   for (let i = 0; i < welcome.length; i++) {
//     console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`);
//   }
// }
