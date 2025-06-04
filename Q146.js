<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Sphere Volume Calculator</title>
</head>
<body>
  <h2>Input radius value and get the volume of a sphere.</h2>
  <form id="sphereForm">
    <label>Radius</label><br />
    <input type="number" id="radius" step="any" /><br /><br />
    <label>Volume</label><br />
    <input type="text" id="volume" readonly /><br /><br />
    <button type="button" onclick="calculateVolume()">Calculate</button>
  </form>

  <script>
    function calculateVolume() {
      const radius = parseFloat(document.getElementById("radius").value);
      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      document.getElementById("volume").value = volume.toFixed(4);
    }
  </script>
</body>
</html>
