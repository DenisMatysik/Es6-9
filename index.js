const input = document.getElementById("input");
const choseCurrency = document.getElementById("choseCurrency");
// курс аплбт по отношению к BYN
const currencyUsd = 3.27;
const currencyEur = 3.55;
const currencyCny = 2.04;
const currencyRub = 2.65/100;
const currencyByn = 1;

input.addEventListener("input", moneyConvert);
choseCurrency.addEventListener("change", moneyConvert)

function moneyConvert (){
    switch (choseCurrency.value){
        case "byn":
            document.getElementById("usd").innerHTML = input.value*currencyUsd;
            document.getElementById("eur").innerHTML = input.value*currencyEur;
            document.getElementById("cny").innerHTML = input.value*currencyCny;
            document.getElementById("rub").innerHTML = input.value*currencyRub;
            document.getElementById("byn").innerHTML = input.value;
        break;
        case "usd":
            document.getElementById("usd").innerHTML = input.value;
            document.getElementById("eur").innerHTML = input.value*(currencyUsd/currencyEur);
            document.getElementById("cny").innerHTML = input.value*(currencyUsd/currencyCny);
            document.getElementById("rub").innerHTML = input.value*(currencyUsd/currencyRub);
            document.getElementById("byn").innerHTML = input.value*(currencyUsd/currencyByn);
        break;
        case "eur":
            document.getElementById("usd").innerHTML = input.value*(currencyEur/currencyUsd);
            document.getElementById("eur").innerHTML = input.value;
            document.getElementById("cny").innerHTML = input.value*(currencyEur/currencyCny);
            document.getElementById("rub").innerHTML = input.value*(currencyEur/currencyRub);
            document.getElementById("byn").innerHTML = input.value*(currencyEur/currencyByn);
        break;
        case "cny":
            document.getElementById("usd").innerHTML = input.value*(currencyCny/currencyUsd);
            document.getElementById("eur").innerHTML = input.value*(currencyCny/currencyEur);
            document.getElementById("cny").innerHTML = input.value;
            document.getElementById("rub").innerHTML = input.value*(currencyCny/currencyRub);
            document.getElementById("byn").innerHTML = input.value*(currencyCny/currencyByn);
        break;
        case "rub":
            document.getElementById("usd").innerHTML = input.value*(currencyRub/currencyUsd);
            document.getElementById("eur").innerHTML = input.value*(currencyRub/currencyEur);
            document.getElementById("cny").innerHTML = input.value*(currencyRub/currencyCny);
            document.getElementById("rub").innerHTML = input.value;
            document.getElementById("byn").innerHTML = input.value*(currencyRub/currencyByn);
        break;
    }
}
// advanced level 
document.getElementById("dateNow").innerHTML = "Текущая дата:"+ new Date().toLocaleDateString();
const showBtn = document.getElementById("show");

showBtn.addEventListener("click", showInfAboutCurrency);
document.getElementById("choseDate").addEventListener("input", activeBtn);

function activeBtn (){
    if (document.getElementById("choseDate").value===0){
        showBtn.setAttribute("disabled", true)  
    } else {
        showBtn.removeAttribute("disabled")
    }
}
function showInfAboutCurrency(){
    const date = document.getElementById("choseDate").value;
    document.getElementsByClassName("dateInf")[0].innerHTML= `Курс валют на ${date}`;
    const newCurrencyUsd = (currencyUsd*(100-(Math.random()*10))/100).toFixed(4);
    const newCurrencyEur = (currencyEur*(100-(Math.random()*10))/100).toFixed(4);
    const newCurrencyCny = (currencyCny*(100-(Math.random()*10))/100).toFixed(4);
    const newCurrencyRub = (currencyRub*(100-(Math.random()*10))/100).toFixed(4);
    document.getElementsByClassName("usd")[0].innerHTML =  newCurrencyUsd+"$";
    document.getElementsByClassName("eur")[0].innerHTML =  newCurrencyEur+"€";
    document.getElementsByClassName("cny")[0].innerHTML =  newCurrencyCny+"&yen";
    document.getElementsByClassName("rub")[0].innerHTML =  newCurrencyRub+"₽";
}