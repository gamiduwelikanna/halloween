function checkAnswers() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    if (q1 && q2 && q3 && q1.value === "correct" && q2.value === "correct" && q3.value === "correct") {
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('result-container').style.display = 'block';
    } else {
        alert("Oops! It looks like you have some incorrect answers. Try again!");
    }
}
