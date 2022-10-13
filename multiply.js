let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 12) + 1;

let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 12) + 1;

document.querySelector(".number-1").innerHTML = (randomNumber1);
document.querySelector(".number-2").innerHTML = (randomNumber2);
// let confetti = document.querySelector(".confetti");
// confetti.style.display = 'none';
var defaultEmoj = document.getElementById("defaultEmoji");
var incorrectEmoj = document.querySelector(".incorrect-emoji");
var correctEmoj = document.querySelector(".correct-emoji");
incorrectEmoj.style.display = 'none';
correctEmoj.style.display = 'none';

function check() {

  sum = randomNumber1 * randomNumber2;

  let x = document.getElementById("input-box").value;
  if (x != "" && x == randomNumber1 * randomNumber2) {
    document.querySelector(".sub-title").innerHTML = "Correct.";
    // confetti.style.display = 'block';
    correctEmoj.style.display = 'block';
    defaultEmoj.style.display = 'none';
    var audio = new Audio('correct-sound-effect.mp3');
    audio.play();
    return false;
  } else {
    document.querySelector(".sub-title").innerHTML = "Incorrect. The Answer Is " + sum + ".";
    incorrectEmoj.style.display = 'block';
    defaultEmoj.style.display = 'none';
    var audio = new Audio('incorrect-sound-effect.mp3');
    audio.play();
    return false;
  }
}

function refresh() {
  window.location.reload();
}
