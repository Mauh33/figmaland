document
  .querySelector(".btn-burger")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".link-bloc").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
  });

const link = document.querySelectorAll(".link-bloc a");

document.querySelectorAll('a[href^="#"').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
