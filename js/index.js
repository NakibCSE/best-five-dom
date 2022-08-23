// Calculate players expenses
document
  .getElementById("budget-calculate").addEventListener("click", function () {
    const nodeList = document.querySelectorAll("ol li");
    const nodeLength = nodeList.length;
    const playerBudgetString = document.getElementById("perplayer-ammount").value;
    const playerBudget = parseInt(playerBudgetString);

    // input validation
    if(isNaN(playerBudget))
    {
      alert('Please enter a number');
    }
    else if(playerBudget < 0){
      alert('Please enter a positive number');
    }
    else
    {
      const playerExpenses = document.getElementById("player-expenses");
      const expenses = nodeLength * playerBudget;
      playerExpenses.innerText = expenses;
    }
  });

//function to select  player
function addListener(name, id) {
  document.getElementById(id).addEventListener("click", function () {

    // call function from common function add player
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


// total expenses calculation 
document.getElementById("calculate-total")
  .addEventListener("click", function () {
    const managerInput = document.getElementById("manager-input").value;
    const managerValue = parseInt(managerInput);
    const coachInput = document.getElementById("coach-input").value;
    const coachValue = parseInt(coachInput);
    const playerExpenses = document.getElementById("player-expenses").innerText;
    const playerExpensesValue = parseInt(playerExpenses);
    const finalTotal = document.getElementById("total-final");

    //input validation
    if(isNaN(managerValue) || isNaN(coachValue) || isNaN(playerExpensesValue)){
      alert('Please enter a number');
    }
    else if(managerValue < 0 || coachValue < 0 || playerExpensesValue < 0){
      alert('Please enter a positive number');
    }
    else
    {
      const total = managerValue + coachValue + playerExpensesValue;
      finalTotal.innerText = total;
    }
  });