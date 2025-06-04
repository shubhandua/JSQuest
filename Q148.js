<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Highlight Bold on Hover</title>
  <style>
    .highlight {
      background-color: yellow;
    }
  </style>
</head>
<body>

  <p>
    <a href="#" 
       onmouseover="highlightBold(true)" 
       onmouseout="highlightBold(false)">
       On mouse over here bold words of the following paragraph will be highlighted
    </a>
  </p>

  <p id="text">
    We have just started <b>this</b> section for the users 
    (<b>beginner</b> to intermediate) who <b>want</b> to work 
    with <b>various</b> JavaScript <b>problems</b> and write scripts online 
    to <b>test</b> their JavaScript <b>skill</b>.
  </p>

  <script>
    function highlightBold(toggle) {
      const boldElements = document.querySelectorAll('#text b');
      boldElements.forEach(el => {
        if (toggle) {
          el.classList.add('highlight');
        } else {
          el.classList.remove('highlight');
        }
      });
    }
  </script>

</body>
</html>
