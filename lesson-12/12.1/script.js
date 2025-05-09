let savedLink = "";

document.getElementById("inputLinkBtn").addEventListener("click", function () {
  const input = prompt("Enter the link (including https:// or http://):");
  if (input && (input.startsWith("http://") || input.startsWith("https://"))) {
    savedLink = input;
    alert("Link saved!");
  } else {
    alert("Invalid link. Please try again.");
  }
});

document.getElementById("redirectBtn").addEventListener("click", function () {
  if (savedLink) {
    window.location.href = savedLink;
  } else {
    alert("First, enter the link.");
  }
});
