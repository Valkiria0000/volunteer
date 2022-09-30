function animateMobile() {
  const windowInnerWidth = window.innerWidth;
  console.log(windowInnerWidth);
  if (windowInnerWidth <= 760) {
    const portfolio = document.querySelectorAll(".portfolio__item");

    for (item of portfolio) {
      item.classList.remove("slideInRight", "slideInLeft");
      item.classList.add("fadeInUp");
    }
  }
}
animateMobile();
