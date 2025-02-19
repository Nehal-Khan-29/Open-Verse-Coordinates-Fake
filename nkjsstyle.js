document.addEventListener('DOMContentLoaded', () => {

// Wait for 3 seconds
setTimeout(() => {
  // typing 1
  const typed1 = new Typed(".typing1", {
      strings: [
          "<span style='color:red'>WHY YOU WANNA GO THERE, YOU GOT A DEATH WISH OR WHAT?</span>"
      ],
      typeSpeed: 50,
      showCursor: false,

  });

  // typing 2
  const typed2 = new Typed(".typing2", {
      strings: [
          "<span>-71.00, 25.00</span>"
      ],
      typeSpeed: 50,
      showCursor: false,

  });

    
}, 1800); 



      
  //-----------------------------------------------------------------------frontbg--------------------------------------------------------------------
  
      // Initialising the canvas
      var canvas = document.querySelector('#frontbg'),
      ctx = canvas.getContext('2d');
  
      // Setting the width and height of the canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      // Setting up the letters
      var letters = 'DELTA';
      letters = letters.split('');
  
      // Setting up the columns
      var fontSize = 10,
      columns = canvas.width / fontSize;
  
      // Setting up the drops
      var drops = [];
      for (var i = 0; i < columns; i++) {
      drops[i] = 1;
      }
  
      // Setting up the draw function
      function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, .1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = 'red';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
      }
      }
      // Loop the animation
      setInterval(draw, 33);
  
  
  
  
  
  //-----------------------------------------------------------------------Percent--------------------------------------------------------------------
  
  });
  