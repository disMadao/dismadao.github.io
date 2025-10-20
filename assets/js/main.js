document.addEventListener('DOMContentLoaded', function () {
  // Update year in footer
  var yearSpan = document.getElementById('year');
  if (yearSpan) { yearSpan.textContent = String(new Date().getFullYear()); }
  
  // Highlight active navigation item
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.nav a');
  var homeActivated = false;
  
  navLinks.forEach(function(link) {
    var linkPath = link.getAttribute('href');
    var linkText = link.textContent.trim();
    
    // Check if on a specific page (not home)
    if (currentPath.includes('/publications/') && linkText === 'Publications') {
      link.classList.add('active');
      homeActivated = true;
    } 
    else if (currentPath.includes('/students/') && linkText === 'Students') {
      link.classList.add('active');
      homeActivated = true;
    }
    else if (currentPath.includes('/services/') && linkText === 'Services') {
      link.classList.add('active');
      homeActivated = true;
    }
    // Home page - only activate if no other page is active
    else if (linkText === 'Home' && !homeActivated && (currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/'))) {
      link.classList.add('active');
    }
  });
  
  // If still no active link, activate Home
  var hasActive = document.querySelector('.nav a.active');
  if (!hasActive) {
    navLinks.forEach(function(link) {
      if (link.textContent.trim() === 'Home') {
        link.classList.add('active');
      }
    });
  }
});



