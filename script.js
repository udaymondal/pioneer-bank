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
  const depositAmount = document.getElementById('depositAmount').value;
  const depositNumber = parseFloat(depositAmount);
  console.log(depositNumber);

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

function updateSpanText(id, depositNumber){
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const totalAmount = currentNumber + depositNumber;
  document.getElementById(id).innerText = totalAmount;
}

