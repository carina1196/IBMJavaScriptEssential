let count = 0;

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function displayCount() {
  document.getElementById("countDisplay").innerText = count;
  console.log("display count run");
}

function checkCountValue() {
  console.log("check count value run");
  if (count === 10) {
    alert("Your instagram post gained 10 followers! Conngratulations");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}
