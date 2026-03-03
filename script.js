document.addEventListener("DOMContentLoaded", function() {

  const input = document.getElementById("codeInput");
  const loginBox = document.getElementById("loginBox");
  const secretPage = document.getElementById("secretPage");
  const processText = document.getElementById("processText");
  const typingText = document.getElementById("typingText");

  /* =========================
     🎵 SOUND SYSTEM (FOLDER AUDIO)
  ========================== */

  function playSound(file) {
    const audio = new Audio();
    audio.src = file;
    audio.volume = 1;
    audio.play().catch(() => {});
  }

  function playKeySound(char) {

    if (char === " ") {
      playSound("./audio/space.mp3");
      return;
    }

    if (char === "\n") {
      playSound("./audio/enter.mp3");
      return;
    }

    const random = Math.floor(Math.random() * 6) + 1;
    playSound("./audio/key" + random + ".mp3");
  }

  /* =========================
     🔐 LOGIN SYSTEM
  ========================== */

  input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      if (input.value.trim() === "040306") {

        document.body.style.background = "black";
        loginBox.style.display = "none";
        secretPage.style.display = "flex";

        setTimeout(() => {
          processText.textContent = "ACCESS GRANTED";
          startTyping();
        }, 1500);
      }
    }
  });

  /* =========================
     ⌨️ TYPING EFFECT
  ========================== */

  function startTyping() {

    const text = 
`Initializing system...
Decrypting memory...
Accessing core...

For Elsza Az-Zahra (elel).
This is not a normal page.
This is a gateway.`;

    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        const char = text.charAt(i);
        typingText.textContent += char;
        playKeySound(char); // 🔥 suara aktif
        i++;
        setTimeout(typeWriter, 60);
      } else {
        document.getElementById("nextBtn").style.display = "inline-block";
      }
    }

    typeWriter();
  }

});