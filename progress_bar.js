
const contact_me = document.getElementById("contact-me-btn");
const start_communication = document.getElementById("start-communication")



contact_me.addEventListener("mouseenter", () => {
    console.log(start_communication.classList);
    contact_me.classList.remove("cyan");
    contact_me.classList.remove("neon-cyan");
    contact_me.classList.add("black")
    contact_me.classList.add("black-text-to-slide")
})

contact_me.addEventListener('mouseleave', () => {
    console.log(start_communication.classList);
    contact_me.classList.add("cyan");
    contact_me.classList.add("neon-cyan");

    contact_me.classList.remove("black")
    contact_me.classList.remove("black-text-to-slide")
})


start_communication.addEventListener("mouseenter", () => {
    
    start_communication.classList.remove("cyan");
    start_communication.classList.add("magenata")
})

start_communication.addEventListener('mouseleave', () => {
    start_communication.classList.remove("black")
    start_communication.classList.remove("black-text-to-slide")
    start_communication.classList.add("cyan")
})
