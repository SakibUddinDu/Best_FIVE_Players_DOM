const playersDiv = document.getElementById("players");
const selectButtons = document.querySelectorAll(".select_btn");

const calculateBtn = document.querySelector("#calculate_btn");
const calculateTotalBtn = document.querySelector("#calculate_total_btn");

const ul = document.getElementById("unordered_list");

const perPlayerCost =parseInt(document.querySelector("#per_player_cost").value);
const playersExpenses = document.querySelector("#players_expenses");
console.log(playersExpenses)

const coach_fee = parseInt(document.getElementById("coach_fee").value);
const manager_fee = parseInt(document.getElementById("manager_fee").value);
// console.log(manager_fee);

const total = document.getElementById("total");

// selecting players
const players=[];

function addToCart(e) {
    players.push(e.target.parentNode.children[0].textContent);
    const player=document.createElement('li');
    for (let i = 0; i < players.length; i++) {
        player.innerText=players[i];
        ul.appendChild(player);  
    }
}
for (let i = 0; i < selectButtons.length; i++) {
    const btn = selectButtons[i];
    btn.addEventListener('click', addToCart
)}

// calculate players expenses
function calculatePlayerExpenses() {
    const playerCost = perPlayerCost*players.length;
   playersExpenses.innerText = playerCost;
//    console.log(playersExpenses.innerText);
   return playerCost;
}
calculateBtn.addEventListener('click', calculatePlayerExpenses);

function calculateTotal(){
    const totalCost= calculatePlayerExpenses() + manager_fee + coach_fee;
    total.innerText= totalCost;
}
