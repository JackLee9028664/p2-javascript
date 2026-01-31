

    const emojis = ["😀", "😎", "🤖", "🚀", "🎉"];

    let index = 0;
    const emojiElement = document.getElementById("emoji");

    
    emojiElement.textContent = emojis[index];

    
    setInterval(() => {
      index++;
      if (index >= emojis.length) {
        index = 0;
      }

      emojiElement.textContent = emojis[index];
    }, 500);