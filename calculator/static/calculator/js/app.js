//app.js obsluhuje celú aktivitu na stránke a importuje jednolivé moduly, pre matematické výpočty

import { BasicCalculator } from './basic_operations.js'
import { MemoryOperations } from './memory_operations.js';

//inštancie
const basic_calc = new BasicCalculator();
const memory = new MemoryOperations();

//DOM elementy
const btnCalc = document.getElementById('result_button');
const out = document.getElementById('result-text');
const memoryOut = document.getElementById('memory-text');
const memory_container = document.getElementById('memory_buttons');

// obsluha vstupov pre základnú kalkulačku
btnCalc.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value) || 0;
    const num2 = parseFloat(document.getElementById('number2').value) || 0;
    const op = document.getElementById('operations').value;

    try {
        const operations = {
            '+': (num1, num2) => basic_calc.add(num1, num2),
            '-': (num1, num2) => basic_calc.subtract(num1, num2),
            '*': (num1, num2) => basic_calc.multiply(num1, num2),
            '/': (num1, num2) => basic_calc.divide(num1, num2),
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

// pamäťové operácie
memory_container.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName !== 'BUTTON') return;

    const action = clickedElement.value;

    const currentNumber = parseFloat(out.textContent) || 0;

    try {
        const memory_operations = {
            'm_plus': () => memory.m_plus(currentNumber),
            'm_minus': () => memory.m_minus(currentNumber),
            'm_reload': () => {
                const storedValue = memory.m_reload();
                memoryOut.textContent = storedValue;
            },
            'm_clean': () => {
                memory.m_clean();
            },
            'm_save': () => {
                memory.m_clean,
                memory.m_plus(currentNumber);
            }
        };
        
        if (memory_operations[action]) {
            memory_operations[action]();
        }
    } catch (err) {
        console.error("Chyba pamäte:", err);
    }
});