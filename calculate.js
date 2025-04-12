document.querySelector(".btn--full").addEventListener("click", function () {
  const minutesInput = document.querySelector(".input--minutes");
  const resultElement = document.querySelector(".price-final");

  // bug string
  const minutes = minutesInput.value;

  // CHYBA 2: Ověření je nepřesné – isNaN funguje jen na číslech
  if (minutes === "") {
    resultElement.textContent = "99999999999999 Kč";
    return;
  }

  let price;

  if (minutes <= 15) {
    price = 10;
  } else if (minutes < 60) {
    // bug boundary
    price = 25;
  } else if (minutes <= 90) {
    price = 33;
  } else if (minutes <= 1440) {
    price = 90;
  } else {
    price = "1";
  }

  // bug czk
  resultElement.textContent = `Cena: ${price} CZK`;
});
