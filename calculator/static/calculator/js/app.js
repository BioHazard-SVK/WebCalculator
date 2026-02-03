//app.js obsluhuje celú aktivitu na stránke a importuje jednolivé moduly, pre matematické výpočty

import { BasicCalculator } from './basic_operations.js'
// import { Memory } from './memory_operations.js'

//inštancie
const calc = new BasicCalculator();
// const memory = new Memory();

//DOM elementy
const btnCalc = document.getElementById('result_button');
const out = document.getElementById('result-text');

btnCalc.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const op = document.getElementById('operations').value;

    try {
        const operations = {
            '+': (num1, num2) => calc.add(num1, num2),
            '-': (num1, num2) => calc.subtract(num1, num2),
            '*': (num1, num2) => calc.multiply(num1, num2),
            '/': (num1, num2) => calc.divide(num1, num2),
    };
    if(!operations[op]) {
        throw new Error("Neznáma operácia!");
    }
    const result = operations[op](num1, num2);
    out.textContent = result;
    } catch (err) {
        out.textContent = err.message;
    }
});