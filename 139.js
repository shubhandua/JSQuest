<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
</head>
<body>
  <p>
    <a id="w3r" 
       href="https://www.w3resource.com" 
       type="text/html" 
       hreflang="en-us" 
       rel="nofollow" 
       target="_blank">
      W3Resource
    </a>
  </p>
  <button onclick="getAttributes()">Click here to get attributes value</button>

  <script>
    function getAttributes() {
      const link = document.getElementById("w3r");
      const href = link.getAttribute("href");
      const hreflang = link.getAttribute("hreflang");
      const rel = link.getAttribute("rel");
      const target = link.getAttribute("target");
      const type = link.getAttribute("type");

      alert(
        "href: " + href + "\n" +
        "hreflang: " + hreflang + "\n" +
        "rel: " + rel + "\n" +
        "target: " + target + "\n" +
        "type: " + type
      );
    }
  </script>
</body>
</html>
