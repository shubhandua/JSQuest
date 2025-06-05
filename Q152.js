document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  const input = document.getElementById("name");
  const error = document.getElementById("errorMsg");

  if (input.value.trim() === "") {
    error.textContent = "Name is required.";
  } else {
    error.textContent = "";
    
    alert("Form submitted!");
  }
});
