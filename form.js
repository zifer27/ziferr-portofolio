const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('.btn-submit');
        const original = btn.innerHTML;
        btn.innerHTML = '<span>Mengirim...</span>';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = '✅ <span>Terkirim!</span>';
            btn.style.background = 'linear-gradient(135deg, #00d4ff, #7b2ffc)';
            form.reset();
            setTimeout(() => {
                btn.innerHTML = original;
                btn.style.background = '';
                btn.disabled = false;
            }, 2500);
        }, 1500);
    });
}