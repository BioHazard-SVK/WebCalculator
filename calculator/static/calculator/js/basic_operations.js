document.addEventListener('DOMContentLoaded', function() {
        const btn = document.getElementById('button');
        const out = document.getElementById('result-text');
        operations = document.getElementById('operations');

        btn.addEventListener('click', function() {
                const num1 = parseFloat(document.getElementById('number1').value);
                const num2 = parseFloat(document.getElementById('number2').value);
                const mathOp = operations.value;

                if (isNaN(num1) || isNaN(num2)) {
                         out.textContent = "Chyba: Nezadal si čísla.";
                         return;
                }

                let result;
                switch (mathOp) {
                        case '+': result = num1 + num2; break;
                        case '-': result = num1 - num2; break;
                        case '*': result = num1 * num2; break;
                        case '/': 
                                result = num1 != 0 ? num1 / num2: "Delenie nulou nie je dovolené."; 
                                break;
                        default: result = "Neznáma operácia.";
                }
                out.textContent = result;
        }); 
});

