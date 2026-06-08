
document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".card");

  if (!cards.length) return;

  let index = 0;

  // ===============================
  // SHOW CARDS ONE BY ONE
  // ===============================
  function showNextCard() {

    if (index < cards.length) {

      cards[index].classList.add("show");
      index++;

      setTimeout(showNextCard, 1200);

    } else {
      // rehefa feno → STABLE MODE (tsy miala intsony)
      console.log("ACCESS GRANTED - All protection cards displayed");
    }
  }

  showNextCard();

});