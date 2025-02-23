import './style.css'

const hamburgerIcon = document.getElementById('hamburger-icon');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('header');  // Select the header

hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');  // Toggle the 'active' class on nav-links
  header.classList.toggle('active');   // Optionally toggle the 'active' class on the header
});



