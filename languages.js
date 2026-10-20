const btn_langue = document.getElementById('languages');
const nav_about = document.getElementById('nav_about');
const nav_projects = document.getElementById('nav_projects');
const nav_skills = document.getElementById('nav_skills');
const nav_contact = document.getElementById('nav_contact');
const nav_path = document.getElementById('nav_path');
const h1 = document.getElementById('h1');
const intro_paragraph = document.getElementById('intro_paragraph');
const contact_btn = document.getElementById('contact-me-btn');
const cv_download = document.getElementById('cv_download');
const title_about = document.getElementById('title_about');
const title_goal_exe = document.getElementById('title_goal_exe');

let h1_not_display = "Developper <br> Full-Stack";


btn_langue.addEventListener('click', (e) => {
    e.preventDefault();
    const h1_tampon = h1.getHTML();
    h1.innerHTML = h1_not_display;
    h1_not_display = h1_tampon
});

