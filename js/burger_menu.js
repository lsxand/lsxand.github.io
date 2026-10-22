const burgerBtn = document.getElementById('burger_btn');
const navLinks = document.getElementById('nav_links');
const navLinks_a = document.querySelectorAll('.nav-links li a');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    navLinks.classList.toggle('active');
});

navLinks_a.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active')
    });
})