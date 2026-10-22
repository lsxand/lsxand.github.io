const items = document.querySelectorAll('.lf[data-project]');
const cards = document.querySelectorAll('.project-card');
const HIDE_DELAY = 500; // ms avant que la card parte
let hideTimer;

function showCard(project) {
    clearTimeout(hideTimer);
    cards.forEach(card =>
        card.classList.toggle('is-active', card.id === `card-${project}`)
    );
}

function scheduleHide() {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => {
        cards.forEach(card => card.classList.remove('is-active'));
    }, HIDE_DELAY);
}

items.forEach(item => {
    const project = item.dataset.project;
    item.addEventListener('mouseenter', () => showCard(project));
    item.addEventListener('focusin', () => showCard(project));
    item.addEventListener('mouseleave', scheduleHide);
    item.addEventListener('focusout', scheduleHide);
});

cards.forEach(card => {
    card.addEventListener('mouseenter', () => clearTimeout(hideTimer));
    card.addEventListener('mouseleave', scheduleHide);
});


