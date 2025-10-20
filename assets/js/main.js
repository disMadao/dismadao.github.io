document.addEventListener('DOMContentLoaded', function () {
  // Update year in footer
  var yearSpan = document.getElementById('year');
  if (yearSpan) { yearSpan.textContent = String(new Date().getFullYear()); }
  
  // Highlight active navigation item
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.nav a');
  
  navLinks.forEach(function(link) {
    var linkPath = link.getAttribute('href');
    
    // Home page
    if (currentPath === '/' || currentPath === '/index.html') {
      if (linkPath === '/' || linkPath.endsWith('/')) {
        link.classList.add('active');
      }
    } 
    // Other pages
    else if (linkPath !== '/' && currentPath.includes(linkPath.replace(/\//g, ''))) {
      link.classList.add('active');
    }
  });
});



