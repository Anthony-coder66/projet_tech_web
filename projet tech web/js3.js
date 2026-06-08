document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");
  const wannacryCard = document.querySelector(".wannacry-card");
  let index = 0;

  const text = "Comprendre les dangers du monde numérique";
  const heroText = document.querySelector(".hero p");

  let i = 0;
  let deleting = false;

  function typeWriter() {
    if (!heroText) return;

    if (!deleting) {
      heroText.textContent = text.substring(0, i);
      i++;

      if (i > text.length) {
        deleting = true;
        setTimeout(typeWriter, 1500);
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

  function showNextCard() {
    if (index < cards.length) {
      cards[index].classList.add("show");
      index++;
      setTimeout(showNextCard, 1500);
    } else {
      console.log("All threat cards displayed - stable mode ON");
    }
  }

  function showWannacry() {
    if (wannacryCard) {
      setTimeout(() => {
        wannacryCard.classList.add("show");
      }, 3500);
    }
  }

  showNextCard();
  typeWriter();
  showWannacry();

  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.1)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

});