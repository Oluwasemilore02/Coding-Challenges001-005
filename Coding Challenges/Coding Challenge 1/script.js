let user = "";

document
  .querySelector("#startChallenge").addEventListener("click", function () {
    user = prompt("Please enter your username:");
    document.querySelector('span').textContent = user;
  });
