const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Predefined question-answer pairs
const predefinedQA = {
  "How are you?": "I'm good, thank you!",
  "What is your name?": "My name is ChatBot.",
  "What can you do?": "I can answer predefined questions.",
  "Goodbye": "Goodbye! Have a nice day!",
  "How was your day?": "It’s nearing the end of the day, your phone dings and a “How was your day?” text stares back at you."
};

function sendMessage() {

  const userMessage = userInput.value.trim();

  if(userMessage === '') return;

  // Display user message
  displayMessage(userMessage, 'user');

  // Check predefined answers
  const answer = predefinedQA[userMessage];

  setTimeout(() => {

    if(answer){
      displayMessage(answer, 'bot');
    } else {
      displayMessage("I'm sorry, I don't understand.", 'bot');
    }

  }, 500);

  // Clear input
  userInput.value = '';
}

function displayMessage(message, sender) {

  const messageDiv = document.createElement('div');

  messageDiv.classList.add('message');

  if(sender === 'user'){
    messageDiv.classList.add('user');
  } else {
    messageDiv.classList.add('bot');
  }

  messageDiv.textContent = message;

  chatBox.appendChild(messageDiv);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}
