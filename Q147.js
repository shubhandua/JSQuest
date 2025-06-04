<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Random Image Display</title>
</head>
<body>
  <h2>Click the button to see a random image</h2>
  <button onclick="showRandomImage()">Show Image</button>
  <br><br>
  <img id="randomImage" src="" width="300" height="200" alt="Random will appear here" />

  <script>
    const images = [
      "https://via.placeholder.com/300x200/ff7f7f/333333?text=Image+1",
      "https://via.placeholder.com/300x200/7fbfff/333333?text=Image+2",
      "https://via.placeholder.com/300x200/7fff7f/333333?text=Image+3",
      "https://via.placeholder.com/300x200/ffff7f/333333?text=Image+4"
    ];

    function showRandomImage() {
      const index = Math.floor(Math.random() * images.length);
      document.getElementById("randomImage").src = images[index];
    }
  </script>
</body>
</html>
