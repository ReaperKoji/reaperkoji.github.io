document.addEventListener("DOMContentLoaded", function () {
  const typewriter = document.getElementById("typed-text");
  const cursor = document.querySelector(".cursor");

  if (!typewriter) return;

  const phrases = [
    "Yo, eu sou o ReaperKoji 🕶️💀",
    "CTF Addict | LFI Fanático",
    "Desenvolvedor de Ferramentas",
    "Hacking from the shadows"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let typingSpeed = 65;
  let pauseBetweenPhrases = 2000;

  function typePhrase() {
    if (charIndex < phrases[phraseIndex].length) {
      typewriter.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typePhrase, typingSpeed);
    } else {
      setTimeout(erasePhrase, pauseBetweenPhrases);
    }
  }

  function erasePhrase() {
    if (charIndex > 0) {
      typewriter.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erasePhrase, 35);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typePhrase, 300);
    }
  }

  typePhrase();
});
