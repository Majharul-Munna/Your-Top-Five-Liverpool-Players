
document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerCostInput = document.getElementById('per-player-cost');
    const perPlayerCostInputString = perPlayerCostInput.value;
    const perPlayerCostValue = parseFloat(perPlayerCostInputString);

    const aLength = selectArray.length;

    const playersCost = perPlayerCostValue * aLength;

    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = playersCost;
})

document.getElementById('calculate-total-btn').addEventListener('click', function(){
    const managerCostInput = document.getElementById('manager');
    const managerCostInputString = managerCostInput.value;
    const managerCostValue = parseFloat(managerCostInputString);

    const coachCostInput = document.getElementById('coach');
    const coachCostInputString = coachCostInput.value;
    const coachCostValue = parseFloat(coachCostInputString);

    const playersExpenses = document.getElementById('player-expenses');
    const playersExpensesStr = playersExpenses.innerText;
    const playersExpensesValue = parseFloat(playersExpensesStr);

    const newTotalCost = playersExpensesValue + managerCostValue + coachCostValue;

    const totalCost = document.getElementById('final-total');
    totalCost.innerText = newTotalCost;

})