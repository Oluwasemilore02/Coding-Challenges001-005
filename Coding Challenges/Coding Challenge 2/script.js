const displayImg = document.getElementById("display-img");
const thumbContainer = document.getElementById("thumb-container");

thumbContainer.addEventListener("click", function (event) {
  if (event.target.tagName === "IMG") {
    displayImg.src = event.target.src;
  }
});
