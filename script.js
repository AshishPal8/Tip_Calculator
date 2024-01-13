const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

function calculateBill() {
  const bill = Number(billInput.value);
  let tipPercentage = Number(tipInput.value) / 100;
  tipAmount = bill * tipPercentage;
  total = bill + tipAmount;
  const perPersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
}
function increasePeople() {
  numberOfPeople += 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
}
function decreasePeople() {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
}
