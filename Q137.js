<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>JS DOM paragraph style</title>
</head>
<body>
  <p id='text'>JavaScript Exercises - w3resource</p>
  <div>
    <button id="jsstyle" onclick="js_style()">Style</button>
  </div>

  <script>
    function js_style() {
      const para = document.getElementById("text");
      para.style.fontSize = "20px";
      para.style.color = "blue";
      para.style.fontWeight = "bold";
    }
  </script>
</body>
</html>
