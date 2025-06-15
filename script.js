function shakeBall() {
  const questionInput = document.getElementById("question");
  const question = questionInput.value.trim().toLowerCase();
  const answerDiv = document.getElementById("answer");
  const ball = document.getElementById("ball");
  const historyList = document.getElementById("history");
  const sound = document.getElementById("sound");

  if (question === "") {
    answerDiv.textContent = "Please ask a question!";
    return;
  }

  // Shake animation
  ball.classList.add("shake");
  answerDiv.textContent = "🎱...";
  answerDiv.style.backgroundColor = "transparent";
  sound.play();

  setTimeout(() => {
    let response = "";

    // Smart AI-style responses
    if (question.includes("your name")) {
      response = "I'm Magic 8-Ball AI!";
    } else if (question.includes("my name")) {
      response = "I think it's Kritika, right? 😄";
    } else if (question.includes("who")) {
      response = "That's a deep question. Be specific.";
    } else if (question.includes("what")) {
      response = "Let me think... it depends on the situation.";
    } else if (question.includes("when")) {
      response = "Soon... Patience is the key.";
    } else if (question.includes("where")) {
      response = "Somewhere close to your heart 💖";
    } else if (question.includes("why")) {
      response = "Because the universe works in mysterious ways.";
    } else if (question.includes("how")) {
      response = "With hard work and a little bit of magic ✨";
    } else if (question.includes("love")) {
      response = "Love is beautiful. Follow your heart ❤️";
    } else if (question.includes("lucky number")) {
      const lucky = Math.floor(Math.random() * 100);
      response = `Your lucky number is ${lucky}! 🍀`;
    } else {
      response = "Hmm... can you rephrase that? 🤔";
    }

    const colors = ["#ff6b6b", "#6bff95", "#6bcaff", "#ffd36b", "#c86bff", "#ff6bcd"];
    answerDiv.textContent = response;
    answerDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    ball.classList.remove("shake");

    // Add to history
    const li = document.createElement("li");
    li.textContent = question;
    historyList.prepend(li);

    // Reset
    questionInput.value = "";
    questionInput.focus();
  }, 1200);
}