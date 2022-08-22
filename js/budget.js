

document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerCostInput = document.getElementById('per-player-cost');
    const perPlayerCostInputString = perPlayerCostInput.value;
    const perPlayerCostValue = parseFloat(perPlayerCostInputString);

    const aLength = selectArray.length;

    const playersCost = perPlayerCostValue * aLength;
    console.log(playersCost);

    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = playersCost;
})