// Define arrays of messages for each button type
const cheerUpMessages = [
    "Cheer up! Things will get better!",
    "Don't worry, be happy!",
    "Every day is a new beginning. Take a deep breath and start again.",
    "You are stronger than you think!",
    "The best way to predict your future is to create it!",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Difficult roads often lead to beautiful destinations.",
    "The only way to do great work is to love what you do."
];
  
const motivationalMessages = [
    "You can do this!",
    "Believe in yourself and all that you are.",
    "Success is not final. Failure is not fatal. It is the courage to continue that counts.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "Your limitation? It's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "If you want to achieve greatness stop asking for permission.",
    "The harder you work for something, the greater you'll feel when you achieve it."
];
  
const goodJobMessages = [
    "Great job! Keep up the good work!",
    "You're doing amazing!",
    "Your hard work is paying off!",
    "Success is not a destination, it's a journey. Keep going!",
    "The only way to do great work is to love what you do.",
    "You're making incredible progress!",
    "I'm impressed by your dedication!",
    "Keep pushing yourself, you're capable of amazing things!",
    "Every small step counts towards big achievements!",
    "Don't stop now, you're on a roll!"
  ];
  
  // Function to generate a random message based on the button clicked
  function generateMessage(buttonType) {
    let message;
    switch (buttonType) {
      case "sad":
        // Get a random index from the cheerUpMessages array
        const cheerUpIndex = Math.floor(Math.random() * cheerUpMessages.length);
        // Get the message at the random index
        message = cheerUpMessages[cheerUpIndex];
        break;
      case "motivation":
        // Get a random index from the motivationalMessages array
        const motivationIndex = Math.floor(Math.random() * motivationalMessages.length);
        // Get the message at the random index
        message = motivationalMessages[motivationIndex];
        break;
      case "happy":
        // Get a random index from the goodJobMessages array
        const goodJobIndex = Math.floor(Math.random() * goodJobMessages.length);
        // Get the message at the random index
        message = goodJobMessages[goodJobIndex];
        break;
      default:
        // If an invalid button type is passed, return a default message
        message = "Keep up the good work!";
    }
    // Get the message container element
    const messageContainer = document.getElementById("message-container");
    // Remove any existing messages
    messageContainer.innerHTML = "";
    // Create a new paragraph element
    const messageElement = document.createElement("p");
    // Set the innerHTML of the paragraph element to the message
    messageElement.innerHTML = message;
    // Append the message element to the message container
    messageContainer.appendChild(messageElement);
  }

const sadButton = document.getElementById("sad-button");
const motivationButton = document.getElementById("motivation-button");
const happyButton = document.getElementById("happy-button");

sadButton.addEventListener("click", () => {
  generateMessage("sad");
});

motivationButton.addEventListener("click", () => {
  generateMessage("motivation");
});

happyButton.addEventListener("click", () => {
  generateMessage("happy");
});