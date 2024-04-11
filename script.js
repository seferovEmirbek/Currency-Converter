const form = document.querySelector(".container");
const resultText = document.querySelector("#result");
form.addEventListener("submit", calculate);

function calculate(e) {
    e.preventDefault();

    const formElements = form.elements;
    const fromValute = formElements.fromVal.value
    const toValute = formElements.toVal.value
    const amountValue = formElements.amount.value

    if (fromValute === toValute) {
        resultText.innerText = "Выберите разные валюты для конвертации.";
        return;
    }

    if (isNaN(amountValue)) {
        resultText.innerText = "Введите действительное число.";
        return;
    }

    const convertedValue = fx(amountValue).from(fromValute).to(toValute).toFixed(3);
    const resultMessage = `${amountValue + valuteSymbolse[fromValute]} = ${convertedValue + valuteSymbolse[toValute]}`
    resultText.innerText = resultMessage;
}

const valuteSymbolse = {
    "USD": "$",
    "RUB": "₽",
    "EUR": "€",
    "GBP": "£"
}

