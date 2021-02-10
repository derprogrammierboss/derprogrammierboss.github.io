function revealMessage() {
  var x = document.getElementById("hiddenMessage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}