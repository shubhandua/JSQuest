<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Insert row in a table - w3resource</title>
</head>
<body>
  <table id="sampleTable" border="1">
    <tr><td>Row1 cell1</td><td>Row1 cell2</td></tr>
    <tr><td>Row2 cell1</td><td>Row2 cell2</td></tr>
  </table>
  <br>
  <input type="button" onclick="insert_Row()" value="Insert row">

  <script>
    function insert_Row() {
      const table = document.getElementById("sampleTable");
      const newRow = table.insertRow(); // Adds a new row at the end
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      cell1.innerHTML = "New cell1";
      cell2.innerHTML = "New cell2";
    }
  </script>
</body>
</html>
