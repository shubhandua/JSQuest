let res = document.getElementById("res");

function appendToResult(value) {
    res.innerHTML += value;
}

function clearResult() {
    res.innerHTML = "";
}

function evaluateResult() {
    let expression = res.innerHTML;
    let operator = expression.match(/[+\-*/]/);
    if (operator) {
        let [operand1, operand2] = expression.split(operator);
        operand1 = parseInt(operand1, 2);
        operand2 = parseInt(operand2, 2);
        let result;
        switch (operator[0]) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = Math.floor(operand1 / operand2);
                break;
        }
        res.innerHTML = result.toString(2);
    }
}

document.getElementById("btn0").onclick = () => appendToResult("0");
document.getElementById("btn1").onclick = () => appendToResult("1");
document.getElementById("btnClr").onclick = clearResult;
document.getElementById("btnEql").onclick = evaluateResult;
document.getElementById("btnSum").onclick = () => appendToResult("+");
document.getElementById("btnSub").onclick = () => appendToResult("-");
document.getElementById("btnMul").onclick = () => appendToResult("*");
document.getElementById("btnDiv").onclick = () => appendToResult("/");
