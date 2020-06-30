document.addEventListener("DOMContentLoaded", () => {
  /* --- toggle the navbutton --- */
  const burger_btn = document.getElementById("burger_btn");
  const icon = document.getElementsByClassName("icon");
  const mobile_nav_content = document.getElementsByClassName("mobile_nav_content");
  burger_btn.addEventListener("click", () => {
    icon[0].classList.toggle("close");
    mobile_nav_content[0].classList.toggle("show");
  });
  /* --- changing the color of navlinks- if their were clickes a class "clicked" is added" --- */
  const links = document.getElementsByClassName("nav-links");
  function handleClick(e) {
    let viewportWidth = window.innerWidth;
    for (let i = 0; i < links.length; i++) {
      if (viewportWidth <= 992) {
        mobile_nav_content[0].classList.remove("show");
        icon[0].classList.remove("close");
      } else {
        if (links[i].classList.contains("clicked")) {
          links[i].classList.remove("clicked");
        }
        e.target.classList.add("clicked");
      }
    }
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", handleClick);
  }
});
