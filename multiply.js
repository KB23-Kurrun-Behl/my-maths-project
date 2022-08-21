let randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 12) + 1;

let randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 12) + 1;

document.querySelector(".number-1").innerHTML = (randomNumber1);
document.querySelector(".number-2").innerHTML = (randomNumber2);

function check() {

  sum = randomNumber1 * randomNumber2;

  let x = document.getElementById("input-box").value;
  if (x != "" && x == randomNumber1 * randomNumber2) {
      document.querySelector(".sub-title").innerHTML = "Correct.";
      return false;
  } else {
      document.querySelector(".sub-title").innerHTML = "Incorrect. The Answer Is " + sum + ".";
      return false;
  }
}

function refresh() {
  window.location.reload();
}
