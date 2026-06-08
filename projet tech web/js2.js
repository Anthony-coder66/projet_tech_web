
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");
  const heroText = document.querySelector(".hero p");

  // ===================================================
  // 1. CARDS CUMULATIVE + RESET 20 SECONDS LOOP
  // ===================================================
  let index = 0;

  function resetCards() {
    cards.forEach(card => card.classList.remove("show"));
  }

  function startCardsLoop() {

    index = 0;
    resetCards();

    const interval = setInterval(() => {

      if (index < cards.length) {
        cards[index].classList.add("show");
        index++;
      }

      // rehefa vita daholo
      if (index >= cards.length) {

        clearInterval(interval);

        setTimeout(() => {

          startCardsLoop(); // restart

        }, 30000);
      }

    }, 1500);

  }

  startCardsLoop();


  // ===================================================
  // 2. TYPEWRITER TEXT (HERO)
  // ===================================================
  const text =
    "Comprendre les bases du monde numérique et de la sécurité informatique";

  let i = 0;
  let deleting = false;

  function typeWriter() {

    if (!heroText) return;

    if (!deleting) {
      heroText.textContent = text.substring(0, i);
      i++;

      if (i > text.length) {
        deleting = true;

        setTimeout(typeWriter, 500);
        return;
      }

    } else {
      heroText.textContent = text.substring(0, i);
      i--;

      if (i < 0) {
        deleting = false;
        i = 0;
      }
    }

    setTimeout(typeWriter, 60);
  }

  typeWriter();
 
document.querySelectorAll(".btn").forEach(btn => {

  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });

});
});