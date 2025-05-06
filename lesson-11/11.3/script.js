function showRandomImage() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const imagePath = `img/${randomNumber}.jpg`;
  document.querySelector("img").src = imagePath;
}

window.addEventListener("DOMContentLoaded", () => {
  showRandomImage();

  const button = document.querySelector("button");
  button.addEventListener("click", showRandomImage);
});
