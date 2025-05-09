const container = document.querySelector("div");

container.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const buttonName = event.target.dataset.name;
    alert(`You clicked on: ${buttonName}`);
  }
});
