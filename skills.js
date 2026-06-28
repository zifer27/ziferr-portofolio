const items = document.querySelectorAll('.skill-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            const fill = entry.target.querySelector('.skill-fill');
            const percent = entry.target.querySelector('.skill-percent');
            const target = parseInt(entry.target.dataset.percent) || 0;
            setTimeout(() => {
                if (fill) fill.style.width = target + '%';
                if (percent) {
                    let current = 0;
                    const step = target / 35;
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) { current = target; clearInterval(timer); }
                        percent.textContent = Math.round(current) + '%';
                    }, 20);
                }
            }, i * 100);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });
items.forEach(item => observer.observe(item));