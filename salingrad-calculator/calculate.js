document.querySelector(".btn--full").addEventListener("click", function () {
  const minutes = document.querySelector(".input--minutes").value;
  const isChild = document.querySelector(".checkbox--child").checked;
  const resultElement = document.querySelector(".price-final");

  if (minutes === "") {
    resultElement.textContent = "99999999999999 Kč";
    return;
  }

  let price;
  if (isChild) {
    if (minutes <= 15) {
    } else if (minutes <= 60) {
      price = 12;
    } else if (minutes <= 90) {
      price = 16;
    } else if (minutes < 1440) {
      price = 45;
    } else {
      price = "1";
    }
  } else {
    if (minutes <= 15) {
      price = 10;
    } else if (minutes < 60) {
      price = 25;
    } else if (minutes <= 90) {
      price = 33;
    } else if (minutes <= 1440) {
      price = 90;
    } else {
      price = "1";
    }
  }

  resultElement.textContent = `Cena: ${price} CZK`;
});
