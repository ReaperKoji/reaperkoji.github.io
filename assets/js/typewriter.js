document.addEventListener("DOMContentLoaded", function () {
  const typewriter = document.getElementById("typed-text");
  if (!typewriter) return;

  const text = "Yo, eu sou o ReaperKoji 🕶️💀";
  typewriter.textContent = "";
  let i = 0;
  const delayBeforeStart = 500;
  const typingSpeed = 50;

  setTimeout(() => {
    function typing() {
      if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(typing, typingSpeed);
      }
    }
    typing();
  }, delayBeforeStart);
});
