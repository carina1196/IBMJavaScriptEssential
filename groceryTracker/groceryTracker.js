let price1;
let price2;
let price3;


function calculateGrocery() {
    price1 = parseFloat(document.getElementById('grocery1').value);
    price2 = parseFloat(document.getElementById('grocery2').value);
    price3 = parseFloat(document.getElementById('grocery3').value);
    
    let totalAmount = price1 + price2 + price3;
    document.getElementById("totalAmount").innerText = `The total amount is: $${totalAmount}`;
}
//parseFloat converts string value to a float