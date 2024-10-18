function getAnswer() {
    const answers = ["Yes", "No", "Maybe"];
    const emojis = ["😊", "🙅", "🤔"];
    const randomIndex = Math.floor(Math.random() * answers.length);

    const userQuestion = document.getElementById("question").value;
    const answerElement = document.getElementById("answer");
    const emojiElement = document.getElementById("emoji");
    const messageElement = document.getElementById("message");

    if (userQuestion.trim() === "") {
        answerElement.innerText = "Please ask a question!";
        emojiElement.innerText = "❓";
        messageElement.classList.add("hidden");
    } else {
        answerElement.innerText = answers[randomIndex];
        emojiElement.innerText = emojis[randomIndex];
        messageElement.classList.remove("hidden");
    }

    // Trigger animations for the answer and emoji
    answerElement.style.opacity = '0';
    emojiElement.style.opacity = '0';
    messageElement.style.opacity = '0';

    setTimeout(() => {
        answerElement.style.animation = 'fadeInScale 0.5s ease forwards';
        emojiElement.style.animation = 'fadeInScale 0.5s ease forwards, shake 0.5s ease';
        messageElement.style.animation = 'fadeInScale 0.5s ease forwards';
    }, 100); 
}
