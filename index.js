// script.js

// Select DOM elements
const totalDepositEl = document.getElementById("totalDeposit");
const totalWithdrawEl = document.getElementById("totalWithdraw");
const totalBalanceEl = document.getElementById("totalBalance");
const amountInput = document.getElementById("amount");
const depositButton = document.getElementById("depositButton");
const withdrawButton = document.getElementById("withdrawButton");

// Initialize amounts
let totalDeposit = 0;
let totalWithdraw = 0;
let totalBalance = 0;

// Update UI
function updateUI() {
  totalDepositEl.innerText = `$${totalDeposit.toFixed(2)}`;
  totalWithdrawEl.innerText = `$${totalWithdraw.toFixed(2)}`;
  totalBalanceEl.innerText = `$${totalBalance.toFixed(2)}`;
}

// Handle deposit
depositButton.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (amount > 0) {
    totalDeposit += amount;
    totalBalance += amount;
    updateUI();
    amountInput.value = ""; // Clear input field
  } else {
    alert("Enter a valid amount to deposit!");
  }
});

// Handle withdraw
withdrawButton.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (amount > 0 && amount <= totalBalance) {
    totalWithdraw += amount;
    totalBalance -= amount;
    updateUI();
    amountInput.value = ""; // Clear input field
  } else if (amount > totalBalance) {
    alert("Insufficient balance!");
  } else {
    alert("Enter a valid amount to withdraw!");
  }
});

















































