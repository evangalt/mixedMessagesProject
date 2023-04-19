  // Define an array of good fortune messages
  const messages = [
    "Continue working hard and you will soon see the fruits of your labor!",
    "Your future is bright and full of possibility!",
    "Good things come to those who wait, so keep waiting!",
    "Your positive attitude will lead to success in all areas of your life!",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The best way to predict your future is to create it!",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Don't watch the clock; do what it does. Keep going.",
    "You can't go back and change the beginning, but you can start where you are and change the ending."
  ];

// Function to generate a random message from the messages array
function generateMessage() {
    // Get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);
    // Get the message at the random index
    const message = messages[randomIndex];
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
