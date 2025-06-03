<script>
function createTable() {
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  const rows = 3;
  const columns = 4;

  for (let i = 0; i < rows; i++) {
    const newRow = table.insertRow();
    for (let j = 0; j < columns; j++) {
      const newCell = newRow.insertCell();
      newCell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
</script>
