let scoreText = document.querySelector(".score-text"),
  score = 0;
if (window.localStorage.score) {
  window.localStorage.score > 0
    ? (scoreText.innerHTML = window.localStorage.score)
    : "";
  potatoImageChange();
} else {
  window.localStorage.score = score;
}
document.body.addEventListener("click", (_) => {
  potatoClick();
});

document.body.addEventListener("keyup", (_) => {
  potatoClick();
});

function potatoClick() {
  audioPlay();
  window.localStorage.score++;
  scoreText.innerHTML = window.localStorage.score;
  potatoImageChange();
  slapAnimation();
}

function audioPlay() {
  let slapEffect = new Audio("./slap.mp3");
  slapEffect.play();
}
function potatoImageChange() {
  if (window.localStorage.score >= 100) {
    document.images[0].src = "./img/potato-six.png";
  }
  if (window.localStorage.score >= 400) {
    document.images[0].src = "./img/potato-four.png";
  }
  if (window.localStorage.score >= 800) {
    document.images[0].src = "./img/potato-five.png";
  }
  if (window.localStorage.score >= 1500) {
    document.images[0].src = "./img/potato-three.png";
  }
  if (window.localStorage.score >= 5000) {
    document.images[0].src = "./img/potato-two.png";
  }
  if (window.localStorage.score >= 10000) {
    document.images[0].src = "./img/potato-zero.png";
  }
  if (window.localStorage.score >= 20000) {
    document.images[0].src = "./img/pngwing.com-dick.png";
  }
}
function slapAnimation() {
  let random = Math.floor(Math.random() * 30);
  document.images[0].style.transform = `rotate(${random}deg)`;
  setTimeout((_) => {
    document.images[0].style.transform = "rotate(0deg)";
  }, 100);
}
