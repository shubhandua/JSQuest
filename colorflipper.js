<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Flipper</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
            transition: background-color 0.5s ease;
        }
        .color-display {
            margin-bottom: 20px;
            font-size: 32px;
            font-weight: bold;
            background-color: rgba(0, 0, 0, 0.7);
            color: #fff;
            padding: 10px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        .btn {
            padding: 12px 24px;
            background-color: #6200ea;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        .btn:hover {
            background-color: #3700b3;
        }
    </style>
</head>
<body>
    <div class="color-display">#f0f0f0</div>
    <button class="btn" onclick="changeColor()">Change Color</button>

    <script>
        function getRandomHexColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        }

        function changeColor() {
            const newColor = getRandomHexColor();
            document.body.style.backgroundColor = newColor;
            document.querySelector('.color-display').textContent = newColor;
        }
    </script>
</body>
</html>
