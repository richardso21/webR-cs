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
