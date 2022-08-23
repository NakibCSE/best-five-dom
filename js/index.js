// Calculate players expenses
document
  .getElementById("budget-calculate").addEventListener("click", function () {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    const playerBudget = document.getElementById("perplayer-ammount").value;
    const playerBudgetValue = parseInt(playerBudget);
    if (playerBudgetValue < 0) {
      return alert("Give positive value please");
    }
    const playerExpenses = document.getElementById("player-expenses");
    const expenses = nodeLength * playerBudgetValue;
    playerExpenses.innerText = expenses;
  });

//function select  player
function addListener(name, id) {
  document.getElementById(id).addEventListener("click", function () {

    // call function from common function
    addPlayer(name);
    document.getElementById(id).classList.add("disabled");
  });
}

addListener("sakib", "select");
addListener("tamim", "select2");
addListener("masrafi", "select3");
addListener("musfiq", "select4");
addListener("taskin", "select5");
addListener("anamul", "select6");
addListener("mahmud", "select7");
addListener("mehedi", "select8");
addListener("rubel", "select9");


// function for total expenses calculation 
document.getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerInput = document.getElementById("manager-input").value;
    const managerValue = parseInt(managerInput);
    const coachInput = document.getElementById("coach-input").value;
    const coachValue = parseInt(coachInput);
    const playerExpenses = document.getElementById("player-expenses").innerText;
    const playerExpensesValue = parseInt(playerExpenses);
    const finalTotal = document.getElementById("total-final");
    if (managerValue < 0 || coachValue < 0 || playerExpensesValue < 0) {
      return alert("Please enter a positive value");
    }
    const total = managerValue + coachValue + playerExpensesValue;
    finalTotal.innerText = total;
  });