<!DOCTYPE html>
<html>
<head>
    <title>Random Quote Generator</title>
    <style>
        body { display: flex; height: 100vh; justify-content: center; align-items: center; background-color: #e3f2fd; }
        .container { text-align: center; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); }
        h1 { font-size: 24px; margin-bottom: 20px; }
        #quote { font-style: italic; margin-bottom: 20px; }
        button { background-color: #42a5f5; color: #fff; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; }
        button:hover { background-color: #1e88e5; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Random Quote Generator</h1>
        <p id="quote">Click the button to get inspired!</p>
        <button onclick="generateQuote()">New Quote</button>
    </div>

    <script>
        const quotes = [
            "The only limit to our realization of tomorrow is our doubts of today.",
            "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            "Believe you can and you're halfway there.",
            "You are never too old to set another goal or to dream a new dream.",
            "Success usually comes to those who are too busy to be looking for it."
        ];

        function generateQuote() {
          zz  const randomIndex = Math.floor(Math.random() * quotes.length);
            document.getElementById("quote").innerText = quotes[randomIndex];
        }
    </script>
</body>
</html>
