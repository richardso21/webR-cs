window.addEventListener("scroll", function(e) {
  const target = document.querySelector("#slider-content");

  var scrolled = window.pageYOffset;
  var rate = scrolled * -2;

  target.style.transform = "translate3d(" + rate + "px, 0px, 0px)";

  // const textTarget = document.querySelect;
});
