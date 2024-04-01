document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.info h1');
  
    function scrollText() {
      textElement.style.transform = 'translateX(100%)';
  
      textElement.animate(
        [
          { transform: 'translateX(100%)' },
          { transform: 'translateX(-100%)' }
        ],
        {
          duration: 10000,
          iterations: Infinity,
          easing: 'linear'
        }
      );
    }
  
    scrollText();
  });
  