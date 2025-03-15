<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
    <style>
        body { display: flex; height: 100vh; justify-content: center; align-items: center; background-color: #f0f2f5; }
        .calculator { background: #fff; padding: 20px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        input { width: 100%; height: 50px; text-align: right; font-size: 24px; margin-bottom: 10px; }
        button { width: 22%; height: 50px; margin: 5px 1%; font-size: 20px; cursor: pointer; }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="result" readonly>
        <br>
        <button onclick="appendValue('7')">7</button>
        <button onclick="appendValue('8')">8</button>
        <button onclick="appendValue('9')">9</button>
        <button onclick="clearResult()">C</button>
        <br>
        <button onclick="appendValue('4')">4</button>
        <button onclick="appendValue('5')">5</button>
        <button onclick="appendValue('6')">6</button>
        <button onclick="appendValue('+')">+</button>
        <br>
        <button onclick="appendValue('1')">1</button>
        <button onclick="appendValue('2')">2</button>
        <button onclick="appendValue('3')">3</button>
        <button onclick="appendValue('-')">-</button>
        <br>
        <button onclick="appendValue('0')">0</button>
        <button onclick="appendValue('.')">.</button>
        <button onclick="calculateResult()">=</button>
        <button onclick="appendValue('*')">*</button>
        <br>
        <button onclick="appendValue('/')">/</button>
    </div>

    <script>
        function appendValue(value) {
            document.getElementById('result').value += value;
        }

        function clearResult() {
            document.getElementById('result').value = '';
        }

        function calculateResult() {
            try {
                document.getElementById('result').value = eval(document.getElementById('result').value);
            } catch {
                document.getElementById('result').value = 'Error';
            }
        }
    </script>
</body>
</html>
