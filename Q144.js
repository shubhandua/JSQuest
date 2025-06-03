<script>
function getOptions() {
  const select = document.getElementById("mySelect");
  const total = select.options.length;
  let message = `Total options: ${total}\n`;

  for (let i = 0; i < total; i++) {
    message += `${select.options[i].text}\n`;
  }

  alert(message);
}
</script>
