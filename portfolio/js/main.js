// transparent bar
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('nav');
  
    // Add scroll listener
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      } else {
        nav.style.backgroundColor = "transparent";
      }
    });
  });  