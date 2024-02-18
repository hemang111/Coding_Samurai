document.getElementById("iconToggle").addEventListener("change", function () {
  var moonIcon = document.getElementById("moonIcon");
  var img = document.getElementById("imgo");

  if (this.checked) {
    img.style.display = "none";
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  } else {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  }
  const iconElements = document.getElementsByClassName("icon");
  for (var i = 0; i < iconElements.length; i++) {
    iconElements[i].style.color = this.checked ? "black" : "";
  }
  var rootStyle = document.documentElement.style;
  rootStyle.setProperty("--main-color", this.checked ? "black" : "");
  rootStyle.setProperty("--background-color", this.checked ? "white" : "");
  rootStyle.setProperty("--logo-color", this.checked ? "black" : "");
  rootStyle.setProperty("--border-color", this.checked ? "red" : "");
  rootStyle.getPropertyPriority;
});
// for the blog pagination
const buttons = document.querySelectorAll(".pid");
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    handleButtonClick(index);
  });
});
function handleButtonClick(index) {
  const cards = document.getElementsByClassName("project-card-content");
  for (var i = 0; i < cards.length; i++) {
    if (i === index) {
      cards[i].style.display = "grid";
    } else {
      cards[i].style.display = "none";
    }
  }
}
let i = 0;
document.getElementById("S1").addEventListener("mouseenter", function () {
  document.body.addEventListener("keydown", keydownHandler);
});

document.getElementById("S1").addEventListener("mouseleave", function () {
  document.body.removeEventListener("keydown", keydownHandler);
});

let keydownHandler = function (event) {
  const btn = document.getElementsByClassName("pid");

  if (event.key === "ArrowRight") {
    if (i < btn.length - 1) {
      btn[i + 1].click();
      i++;
    }
  } else if (event.key === "ArrowLeft") {
    if (i > 0) {
      btn[i - 1].click();
      i--;
    }
  }
};
