// login button event handler
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
    console.log("Login Area Vanished, we twicked CSS");
  });

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function (){
  const depositNumber = getInputNumber('depositAmount');

  // const currentDeposit = document.getElementById('currentDeposit').innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNumber + currentDepositNumber;
  // console.log(totalDeposit);

  // document.getElementById('currentDeposit').innerText = totalDeposit;
  updateSpanText("currentDeposit", depositNumber);
  // const currentBalance = document.getElementById('currentBalance').innerText;
  // const currentBalanceNumber = parseFloat(currentBalance);
  // const totalBalance = currentBalanceNumber + depositNumber;
  // document.getElementById('currentBalance').innerText = totalBalance;
  updateSpanText("currentBalance", depositNumber);
  document.getElementById('depositAmount').value = "";
})

//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
  const withdrawNumber = getInputNumber('withdrawAmount');

  updateSpanText('currentWithdraw', withdrawNumber);
  updateSpanText('currentBalance', -1*withdrawNumber)

  document.getElementById('withdrawAmount').value = "";

})

function getInputNumber(id){
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpanText(id, depositNumber){
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = currentNumber + depositNumber;
  document.getElementById(id).innerText = totalAmount;
}

