document
  .querySelector(".btn--calculate")
  .addEventListener("click", function () {
    const valueSpent = parseFloat(
      document.querySelector(".input--spent").value
    );
    const resultElement = document.querySelector(".discount-value");

    let discount = 0;

    if (valueSpent < 0) {
      discount = valueSpent;
    } else if (valueSpent > 5000) {
      discount = valueSpent - (valueSpent / 100) * 2;
    } else if (valueSpent > 10000) {
      discount = valueSpent - (valueSpent / 100) * 5;
    } else if (valueSpent > 15000) {
      discount = valueSpent - (valueSpent / 100) * 8;
    }

    resultElement.textContent = discount;
  });
