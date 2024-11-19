// Smooth scrolling to the projects section
document.getElementById('view-projects-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector('#projects');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
  
