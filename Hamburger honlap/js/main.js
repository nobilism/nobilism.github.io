function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    
    showSumPrice(price, amountNumber);
}  


function showSumPrice (price=1000, amountNumber=1) {
    var gridRadios1= document.getElementById ("gridRadios1");
    var gridRadios2= document.getElementById ("gridRadios2");
    var gridRadios3= document.getElementById ("gridRadios3");
    var gridRadios4= document.getElementById ("gridRadios4");
    var gridRadios5= document.getElementById ("gridRadios5");
    let selectedValue
    
    if (gridRadios1.checked==true)
        selectedValue=gridRadios1.value;
    else if (gridRadios2.checked==true)
        selectedValue=gridRadios2.value;
    else if (gridRadios3.checked==true)
        selectedValue=gridRadios3.value;
    else if (gridRadios4.checked==true)
        selectedValue=gridRadios4.value;
    else if (gridRadios5.checked==true)
        selectedValue=gridRadios5.value;

    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 darab hamburger vásárolható!");

    } else if (amountNumber < 1) {
        alert("Minimum egy terméket kell vásárolnia");
    }
      else {
        let amount = amountNumber * (price + parseInt(selectedValue));
        showAmount.innerHTML = amount;
    }
}

var weather= [10, 12, 13, 1, 30, 20, 6]
var monday= document.getElementById ("monday");
var tuesday= document.getElementById ("tuesday");
var wednesday= document.getElementById ("wednesday");
var thursday= document.getElementById ("thursday");
var friday= document.getElementById ("friday");
var saturday= document.getElementById ("saturday");
var sunday= document.getElementById ("sunday");

function weatherWidget () 
{
    for (let i =0;i< weather.length;i++) {
        if (i>1) {
            break;
        }
        alert(weather[i]); 
}
}
