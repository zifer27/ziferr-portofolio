// Preloader
window.addEventListener('load', () => {
    document.getElementById('preloader').classList.add('hidden');
});

// Custom Cursor
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .btn, .project-card, .social-link, .rating-card').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
});