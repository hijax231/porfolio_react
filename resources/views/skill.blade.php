
 <script src="{{ asset('js/TagCanvas.js') }}"></script>

<script>

    window.onload = function() {
        try {
          TagCanvas.Start('myCanvas','tags',{
            textColour: 'white',
            outlineColour:  'white',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
          });
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      };
</script>
<body>
   <div style=" 
   margin: auto;
   width: 50%;
  

   ">
    <div id="myCanvasContainer" height="100vh">
      <canvas width="350" height="350" id="myCanvas">
        <p>Anything in here will be replaced on browsers that support the canvas element</p>
      </canvas>
    </div align="center">
    <div id="tags">
      <ul>
      
        <li><a href="">PHP</a></li>
        <li><a href="">Jquery</a></li>
        <li><a href="">Python</a></li>
        <li><a href="">Mysql</a></li>
        <li><a href="">Monggo</a></li>
        <li><a href="">Boostrap</a></li>
        <li><a href="">Laravel</a></li>
        <li><a href="">Codeigniter</a></li>
        <li><a href="">React Native</a></li>
        <li><a href="">React Js</a></li>
        <li><a href="">Kotlin</a></li>
        <li><a href="">Javascript</a></li>
        <li><a href="">Java</a></li>
        <li><a href="">.Net</a></li>
        <li><a href="">Visual Basic</a></li>
        <li><a href="">Unity</a></li>
        <li><a href="">C#</a></li>
        <li><a href="">Axios</a></li>
    </ul>
      </ul>
    </div>
    <div>
  </body> 
