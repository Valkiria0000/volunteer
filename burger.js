function burger() {
  const menu = document.querySelector(".menu");
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", function (e) {
    if (this.closest(".burger")) {
      menu.style = `
     display: block;
     `;
      menu.classList.toggle("menu__active");
      burger.children[0].classList.toggle("burger-active");
    }
  });
}
burger();
