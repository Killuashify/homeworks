const textBlock = document.querySelector("#text-block");
const toggleBtn = document.querySelector("button");

toggleBtn.addEventListener("click", () => {
  textBlock.classList.toggle("color-changed");
});
