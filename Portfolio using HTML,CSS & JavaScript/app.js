document.getElementById('scrollDown').addEventListener('click', function() {
    window.scrollTo(0, document.body.scrollHeight);
  });



  
  var links = document.querySelectorAll('.many1');
    links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      var targetId = this.getAttribute('href').substring(1); 
      var targetDiv = document.getElementById(targetId); 
      if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });