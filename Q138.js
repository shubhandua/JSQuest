<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Return first and last name from a form - w3resource</title>
</head>
<body>
  <form id="form1" onsubmit="return getFormvalue()">
    First name: <input type="text" name="fname" value="David"><br>
    Last name: <input type="text" name="lname" value="Beckham"><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    function getFormvalue() {
      const form = document.getElementById("form1");
      const firstName = form.fname.value;
      const lastName = form.lname.value;
      alert(firstName + " " + lastName);
      return false;
    }
  </script>
</body>
</html>
