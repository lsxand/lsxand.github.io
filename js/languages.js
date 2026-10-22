

// const btn_langue = document.getElementById('btn_langue');
const flag_desktop = document.getElementById('flag_desktop');
const flag_phone = document.getElementById('flag_phone');
const nav_home = document.getElementById('home');
const nav_about = document.getElementById('nav_about');
const nav_projects = document.getElementById('nav_projects');
const nav_skills = document.getElementById('nav_skills');
const nav_path = document.getElementById('nav_path');
const h1 = document.getElementById('h1');
const intro_paragraph = document.getElementById('intro_paragraph');
const contact_btn_paragraph = document.getElementById('contact_btn_paragraph');
const contact_btn = document.getElementById('contact-me-btn');
const cv_download = document.getElementById('cv_download');
const title_about = document.getElementById('title_about');
const title_goal_exe = document.getElementById('title_goal_exe');
const professional_goal_paragraph = document.getElementById('professional_goal_paragraph');
const job_board_card_paragraph = document.getElementById('job_board_card_paragraph');
const oummakids_card_paragraph = document.getElementById('oummakids_card_paragraph');
const vet_card_paragraph = document.getElementById('vet_card_paragraph');
const h2_path = document.getElementById('h2_path');
const epitech_2026_2029 = document.getElementById('epitech_2026_2029');
const imts_2024_2026 = document.getElementById('imts_2024_2026');
const mooc_cybersecurity = document.getElementById('mooc_cybersecurity');
const man_2021_2022 = document.getElementById('man_2021_2022');
const bac_2018_2021 = document.getElementById('bac_2018_2021');
const h2_experiences = document.getElementById('h2_experiences');
const oummakids_exp_paragraph = document.getElementById('oummakids_exp_paragraph');
const lac_exp_paragraph = document.getElementById('lac_exp_paragraph');
const grappe_exp_paragraph = document.getElementById('grappe_exp_paragraph');
const versatile = document.getElementById('versatile');
const versatile_exp_paragraph = document.getElementById('versatile_exp_paragraph');
const startloc_exp_paragrap = document.getElementById('startloc_exp_paragraph');
const h2_skills = document.getElementById('h2_skills');
const h3_soft_skills = document.getElementById('h3_soft_skills');
const soft_skills_relationnal = document.getElementById('soft_skills_relationnal');
const soft_skills_open_mind = document.getElementById('soft_skills_open_mind');
const soft_skills_curious = document.getElementById('soft_skills_curious');
const soft_skills_learning_capacity = document.getElementById('soft_skills_learning_capacity');
const soft_skills_logic = document.getElementById('soft_skills_logic');
const soft_skills_team_spirit = document.getElementById('soft_skills_team_spirit');
const h3_languages = document.getElementById('h3_languages');
const languages_french = document.getElementById('languages_french');
const languages_english = document.getElementById('languages_english');
const h3_stacks = document.getElementById('h3_stacks');
const h3_framework = document.getElementById('h3_framework');
const h3_tools = document.getElementById('h3_tools');
const location_footer = document.getElementById('location_footer');
const start_communication = document.getElementById('start_communication');
const see_job_board_btn = document.getElementById('see_job_board_btn');
const see_oummakids_btn = document.getElementById('see_oummakids_btn');
const see_vet_btn = document.getElementById('see_vet_btn');


let flag_src = "./assets/fr_flag.svg";
let flag_alt = "french flag";
let _nav_home = "Home/"
let _nav_about = "About/";
let _nav_projects = "Projects/";
let _nav_path = "Path/";
let _nav_skills = "Skills/";
let _h1 = "Developper <br> Full-Stack";
let _intro_paragraph = "I like discover new things, new technology and <span class='green'>challenge myself</span>. II am invested in my work and love teamwork. Currently studying computer science and soon to be a student at Epitech, looking for a job that would allow me to finance my studies while developing my professional experience. Versatile, <span class='green'>motivated</span> and highly <span class='green'>adaptable profile</span>.</p>";
let _contact_btn_paragraph = "If you have a project, don't hesitate to <a href='#contact' class='cyan neon-cyan  contact-btn' id='contact-me-btn'>contact_me</a>";
let _contact_btn = "Contact_me";
let _cv_download = "Download my CV";
let _title_about = "About_me/";
let _title_goal_exe = "Professional_goal.exe";
let _professional_goal_paragraph = "Passionate about web technologies and programming, I build my academic and professional career with determination. My upcoming integration at Epitech represents a key step in my goal of becoming an expert developer. <br> I am looking for professional opportunities that allow me to combine funding for my studies and skills development. My varied experience, from catering to sales and development, demonstrates my ability to quickly adapt to new environments and meet diverse challenges.";
let _job_board_card_paragraph = "Development of a recruitment platform where candidates can apply for job openings.To be completed as part of an Epitech project.";
let _oummakids_card_paragraph = "Development of a recruitment platform that allows candidates to view job postings and apply for them. Project completed as part of an Epitech project.";
let _vet_card_paragraph = "Development of a showcase website for an emergency veterinarian, at his request, to expand his online presence.";
let _h2_path = "Path/";
let _epitech_2026_2029 = "Pre-MSC, leading to a degree in Information Systems Architecture (BAC+5). An approach focused on carrying out real-world projects and on independence";
let _imts_2024_2026 = "Training in digital professions and earning the professional certification as a Web and Mobile Web Developer (DWWM) – RNCP Level 5 (BAC+2).";
let _mooc_cybersecurity = "ANSSI's SecNumAcadémie Cybersecurity MOOC (100%)";
let _man_2021_2022 = "Continuing Education in Hospitality and Restaurant Management, an introduction to business management, institutional and restaurant cooking, as well as table service.";
let _bac_2018_2021 = "General Baccalaureate, with a specialization in Mathematics, Digital Technology, and Science Computer Science.";
let _h2_experiences = "Experiences";
let _oummakids_exp_paragraph = "Back-end development in a pair programming setting for a web platform designed to connect parents with babysitters, during an internship as part of a team of three developers, on behalf of a private client based in Paris.";
let _lac_exp_paragraph = "Serving breakfast in the dining room, preparing and restocking the buffet, and greeting and serving guests at their tables.";
let _grappe_exp_paragraph = "Use of high-temperature ovens, preparation of dishes, as well as preparation of condiments. Cleaning the kitchen and other kitchen areas and equipment.";
let _versatile = "2023 - 2024 VERSATILE";
let _versatile_exp_paragraph = "Temporary worker in several fields, including a stationery store (3ma), a fish market (Cora), a self-service deli (Super U), an assembly-line factory (Lisbeth), a fast-food restaurant (Burger King), as well as grape harvesting.";
let _startloc_exp_paragrap = "Telemarketing, contract sales, personalized customer support, and training on how to use the ZOHO software.";
let _h2_skills = "Skills/";
let _h3_soft_skills = "Soft-Skills";
let _soft_skills_relationnal = "Good relationnal";
let _soft_skills_open_mind = "Open mind";
let _soft_skills_curious = "Curious";
let _soft_skills_learning_capacity;
let _soft_skills_logic = "Logic";
let _soft_skills_team_spirit = "Team spirit";
let _h3_languages = "Languages";
let _languages_french = "French - Native";
let _languages_english = "English";
let _h3_stacks = "Stacks";
let _h3_framework = "Framework & DBMS";
let _h3_tools = "Tools";
let _start_communication = "Start communication"
let _location_footer = "Location";
let _see_projects_btn = "See projects";





flag_phone.addEventListener('click', (e) => {
    e.preventDefault();
    changeLanguage(flag_phone);
});

flag_desktop.addEventListener('click', (e) => {
    e.preventDefault();
    changeLanguage(flag_desktop);
})


function changeLanguage(flag) {

    const flag_src_ = flag.getAttribute('src');
    const flag_alt_ = flag.getAttribute('alt');
    flag.setAttribute('src', flag_src);
    flag.setAttribute('alt', flag_alt);
    flag_src = flag_src_;
    flag_alt = flag_alt_;

    const h1_ = h1.getHTML();
    h1.innerHTML = _h1;
    _h1 = h1_;

    const nav_home_ = home.getHTML();
    nav_home.innerHTML = _nav_home;
    _nav_home = nav_home_;

    const nav_about_ = nav_about.getHTML();
    nav_about.innerHTML = _nav_about;
    _nav_about = nav_about_;


    const nav_projects_ = nav_projects.getHTML();
    nav_projects.innerHTML = _nav_projects;
    _nav_projects = nav_projects_;

    const nav_skills_ = nav_skills.getHTML();
    nav_skills.innerHTML = _nav_skills;
    _nav_skills = nav_skills_;

    const nav_path_ = nav_path.getHTML();
    nav_path.innerHTML = _nav_path;
    _nav_path = nav_path_;

    const intro_paragraph_ = intro_paragraph.getHTML();
    intro_paragraph.innerHTML = _intro_paragraph;
    _intro_paragraph = intro_paragraph_;

    const contact_btn_paragraph_ = contact_btn_paragraph.getHTML();
    contact_btn_paragraph.innerHTML = _contact_btn_paragraph;
    _contact_btn_paragraph = contact_btn_paragraph_;

    const contact_btn_ = contact_btn.getHTML();
    contact_btn.innerHTML = _contact_btn;
    _contact_btn = contact_btn_;

    const cv_download_ = cv_download.getHTML();
    cv_download.innerHTML = _cv_download;
    _cv_download = cv_download_;

    const title_about_ = title_about.getHTML();
    title_about.innerHTML = _title_about;
    _title_about = title_about_;

    const title_goal_exe_ = title_goal_exe.getHTML();
    title_goal_exe.innerHTML = _title_goal_exe;
    _title_goal_exe = title_goal_exe_;

    const professional_goal_paragraph_ = professional_goal_paragraph.getHTML();
    professional_goal_paragraph.innerHTML = _professional_goal_paragraph;
    _professional_goal_paragraph = professional_goal_paragraph_;

    const job_board_card_paragraph_ = job_board_card_paragraph.getHTML();
    job_board_card_paragraph.innerHTML = _job_board_card_paragraph;
    _job_board_card_paragraph = job_board_card_paragraph_;

    const oummakids_card_paragraph_ = oummakids_card_paragraph.getHTML();
    oummakids_card_paragraph.innerHTML = _oummakids_card_paragraph;
    _oummakids_card_paragraph = oummakids_card_paragraph_;

    const vet_card_paragraph_ = vet_card_paragraph.getHTML();
    vet_card_paragraph.innerHTML = _vet_card_paragraph;
    _vet_card_paragraph = vet_card_paragraph_;

    const h2_path_ = h2_path.getHTML();
    h2_path.innerHTML = _h2_path;
    _h2_path = h2_path_;

    const epitech_2026_2029_ = epitech_2026_2029.getHTML();
    epitech_2026_2029.innerHTML = _epitech_2026_2029;
    _epitech_2026_2029 = epitech_2026_2029_;

    const imts_2024_2026_ = imts_2024_2026.getHTML();
    imts_2024_2026.innerHTML = _imts_2024_2026;
    _imts_2024_2026 = imts_2024_2026_;

    const mooc_cybersecurity_ = mooc_cybersecurity.getHTML();
    mooc_cybersecurity.innerHTML = _mooc_cybersecurity;
    _mooc_cybersecurity = mooc_cybersecurity_;

    const man_2021_2022_ = man_2021_2022.getHTML();
    man_2021_2022.innerHTML = _man_2021_2022;
    _man_2021_2022 = man_2021_2022_;

    const bac_2018_2021_ = bac_2018_2021.getHTML();
    bac_2018_2021.innerHTML = _bac_2018_2021;
    _bac_2018_2021 = bac_2018_2021_;

    const h2_experiences_ = h2_experiences.getHTML();
    h2_experiences.innerHTML = _h2_experiences;
    _h2_experiences = h2_experiences_;

    const oummakids_exp_paragraph_ = oummakids_exp_paragraph.getHTML();
    oummakids_exp_paragraph.innerHTML = _oummakids_exp_paragraph;
    _oummakids_exp_paragraph = oummakids_exp_paragraph_;

    const lac_exp_paragraph_ = lac_exp_paragraph.getHTML();
    lac_exp_paragraph.innerHTML = _lac_exp_paragraph;
    _lac_exp_paragraph = lac_exp_paragraph_;

    const grappe_exp_paragraph_ = grappe_exp_paragraph.getHTML();
    grappe_exp_paragraph.innerHTML = _grappe_exp_paragraph;
    _grappe_exp_paragraph = grappe_exp_paragraph_;

    const versatile_ = versatile.getHTML();
    versatile.innerHTML = _versatile;
    _versatile = versatile_;

    const versatile_exp_paragraph_ = versatile_exp_paragraph.getHTML();
    versatile_exp_paragraph.innerHTML = _versatile_exp_paragraph;
    _versatile_exp_paragraph = versatile_exp_paragraph_;

    const startloc_exp_paragrap_ = startloc_exp_paragrap.getHTML();
    startloc_exp_paragrap.innerHTML = _startloc_exp_paragrap;
    _startloc_exp_paragrap = startloc_exp_paragrap_;

    const h2_skills_ = h2_skills.getHTML();
    h2_skills.innerHTML = _h2_skills;
    _h2_skills = h2_skills_;

    const h3_soft_skills_ = h3_soft_skills.getHTML();
    h3_soft_skills.innerHTML = _h3_soft_skills;
    _h3_soft_skills = h3_soft_skills_;

    const soft_skills_relationnal_ = soft_skills_relationnal.getHTML();
    soft_skills_relationnal.innerHTML = _soft_skills_relationnal;
    _soft_skills_relationnal = soft_skills_relationnal_;

    const soft_skills_open_mind_ = soft_skills_open_mind.getHTML();
    soft_skills_open_mind.innerHTML = _soft_skills_open_mind;
    _soft_skills_open_mind = soft_skills_open_mind_;

    const soft_skills_curious_ = soft_skills_curious.getHTML();
    soft_skills_curious.innerHTML = _soft_skills_curious;
    _soft_skills_curious = soft_skills_curious_;

    const soft_skills_learning_capacity_ = soft_skills_learning_capacity.getHTML();
    soft_skills_learning_capacity.innerHTML = _soft_skills_learning_capacity;
    _soft_skills_learning_capacity = soft_skills_learning_capacity_;

    const soft_skills_logic_ = soft_skills_logic.getHTML();
    soft_skills_logic.innerHTML = _soft_skills_logic;
    _soft_skills_logic = soft_skills_logic_;

    const soft_skills_team_spirit_ = soft_skills_team_spirit.getHTML();
    soft_skills_team_spirit.innerHTML = _soft_skills_team_spirit;
    _soft_skills_team_spirit = soft_skills_team_spirit_;

    const h3_languages_ = h3_languages.getHTML();
    h3_languages.innerHTML = _h3_languages;
    _h3_languages = h3_languages_;

    const languages_french_ = languages_french.getHTML();
    languages_french.innerHTML = _languages_french;
    _languages_french = languages_french_;

    const languages_english_ = languages_english.getHTML();
    languages_english.innerHTML = _languages_english;
    _languages_english = languages_english_;

    const h3_stacks_ = h3_stacks.getHTML();
    h3_stacks.innerHTML = _h3_stacks;
    _h3_stacks = h3_stacks_;

    const h3_framework_ = h3_framework.getHTML();
    h3_framework.innerHTML = _h3_framework;
    _h3_framework = h3_framework_;

    const h3_tools_ = h3_tools.getHTML();
    h3_tools.innerHTML = _h3_tools;
    _h3_tools = h3_tools_;

    const location_footer_ = location_footer.getHTML();
    location_footer.innerHTML = _location_footer;
    _location_footer = location_footer_;

    const start_communication_ = start_communication.getHTML();
    start_communication.innerHTML = _start_communication;
    _start_communication = start_communication_;

    const see_projects_btn_ = see_job_board_btn.getHTML();
    see_job_board_btn.innerHTML = _see_projects_btn;
    see_oummakids_btn.innerHTML = _see_projects_btn;
    see_vet_btn.innerHTML = _see_projects_btn;
    _see_projects_btn = see_projects_btn_;

    return;
}