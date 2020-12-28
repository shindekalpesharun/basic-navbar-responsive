const burger = document.querySelector(".burger");
const mobile = document.querySelector(".mobile");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    mobile.style.display = "initial";
  } else {
    mobile.style.display = "none";
  }
});
