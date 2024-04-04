const menuBtn = document.querySelector(".btn-burger");
const linkBloc = document.querySelector(".link-bloc");

menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(linkBloc);
  linkBloc.classList.toggle("active");
});
