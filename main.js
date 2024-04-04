document
  .querySelector(".btn-burger")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".link-bloc").classList.toggle("active");
    document.querySelector(".header").classList.toggle("active");
  });
