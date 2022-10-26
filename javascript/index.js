const inputBill = document.getElementById("bill");
const hidden = document.getElementById("hidden");
const tipAmount = document.getElementById("amount");
const totalAmount = document.getElementById("totalAmount");
const numberOfPersons = document.getElementById("numberOfPersons");
const resetBtn = document.getElementById("resetBtn");

document.querySelectorAll("#tipBtn").forEach(function (percentageKey) {
  percentageKey.addEventListener("click", function () {
    const value = percentageKey.dataset.value;
    const percentage = value / 100;

    if (numberOfPersons.value > 0 && inputBill.value > 0) {
      resetBtn.removeAttribute("disabled");
      resetBtn.classList.add("resetBtn");
      hidden.classList.remove("error");
      hidden.innerText = "";
      numberOfPersons.classList.remove("inputError");

      const tipAmountPerPerson =
        (inputBill.value * percentage) / numberOfPersons.value;
      tipAmount.innerText = "$" + tipAmountPerPerson.toFixed(2);

      const totalPercentage = inputBill.value * percentage;
      const totalBill = Number(inputBill.value) + totalPercentage;

      const totalPerPerson = totalBill / numberOfPersons.value;
      totalAmount.innerText = "$" + totalPerPerson.toFixed(2);
    } else if (inputBill.value <= 0 && numberOfPersons.value > 0) {
      hidden.classList.remove("error");
      hidden.innerText = "";
      numberOfPersons.classList.remove("inputError");
      alert("Valor da conta menor ou igual zero");
    } else {
      hidden.classList.add("error");
      hidden.innerText = "Não pode ser zero";
      numberOfPersons.classList.add("inputError");
    }
  });
});

// Botão Resetar
document.getElementById("resetBtn").addEventListener("click", function () {
  inputBill.value = 0;
  numberOfPersons.value = 0;
  tipAmount.innerText = "$0.00";
  totalAmount.innerText = "$0.00";
  hidden.classList.remove("error");
  hidden.innerText = "";
  numberOfPersons.classList.remove("inputError");
  resetBtn.classList.remove("resetBtn");
});
