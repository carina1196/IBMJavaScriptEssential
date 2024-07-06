let count = 0;
const button =  document.getElementById("increaseFollower");
button.onclick = increaseCount();

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 10){
        alert('Your instagram post gained 10 followers! Conngratulations');
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!")
    }
}