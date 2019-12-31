//dynamic nav bar
// window.onscroll = function() {
//   scrollFunction();
// };
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (
    document.body.scrollTop > window.innerHeight / 2 ||
    document.documentElement.scrollTop > window.innerHeight / 2
  ) {
    let NavElement = document.querySelector("#nav-items");
    NavElement.classList.add("transform-nav");

    document
      .querySelectorAll(".a")
      .forEach(el => el.classList.add("transform-a"));
  } else {
    let NavElement = document.querySelector("#nav-items");
    NavElement.classList.remove("transform-nav");

    document
      .querySelectorAll(".a")
      .forEach(el => el.classList.remove("transform-a"));
  }
}

// // welcome-intro
// function welcomefunction() {
//   const welcome = document.querySelectorAll(".welcome-intro path");
//   // console.log(welcome);
//   for (let i = 0; i < welcome.length; i++) {
//     console.log(`Letter ${i} is ${welcome[i].getTotalLength()}`);
//   }
// }
