<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style type="text/css">
    body { margin: 30px; }
  </style>
  <title>Dropdown List Item Counter</title>
</head>
<body>
  <form>
    Choose your favorite color:
    <select id="mySelect">
      <option>Red</option>
      <option>Green</option>
      <option>Blue</option>
      <option>White</option>
    </select>
    <input type="button" onclick="getOptions()" value="Count and Show Items" />
  </form>

  <script>
    function getOptions() {
      const select = document.getElementById("mySelect");
      const count = select.length;
      alert("Total options: " + count);
    }
  </script>
</body>
</html>
