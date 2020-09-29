$(document).ready(() => {
  // Sticky header
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  //iTyped
  ityped.init(document.querySelector(".ityped"), {
    strings: ["пацієнти", "колеги"],
  });
});
