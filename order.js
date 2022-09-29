function order() {
  const btns = document.querySelectorAll(".services__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", scrollCall);
  });

  function scrollCall(e) {
    const callLink = document.querySelector(".call-link");
    const goToLink = callLink.getBoundingClientRect().top + scrollY;

    window.scrollTo({
      top: goToLink,
      behavior: "smooth",
    });

    console.log(callLink);
    e.preventDefault();
  }
}
order();
