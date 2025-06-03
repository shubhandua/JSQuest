<script>
function changeContent() {
  let row = 1;
  let column = 1;
  let newText = "Updated Cell";

  let table = document.getElementById("myTable");

  if (table.rows[row] && table.rows[row].cells[column]) {
    table.rows[row].cells[column].innerHTML = newText;
  } else {
    alert("That cell doesn't exist.");
  }
}
</script>
