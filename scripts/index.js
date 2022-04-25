// Store the wallet amount to your local storage with key "amount"
function addTowallet(){
    
    let valueOfwallet = document.getElementById("amount").value;
    let prevAmt = localStorage.getItem("wallet") || 0;
   
      localStorage.setItem("wallet",+valueOfwallet +  +prevAmt);
    

    let walletAmt = localStorage.getItem("wallet");
   
    let actualAmt = document.getElementById("wallet");
    actualAmt.textContent = walletAmt
    
  }