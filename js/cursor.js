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

  const link = document.querySelectorAll("a");

  for (i = 0; link.length; i++) {
    link[i].addEventListener("mouseover", e => {
      cursor.classList.add("valid");
    });
    link[i].addEventListener("mouseout", e => {
      cursor.classList.remove("valid");
    });
  }
}
