const el = document.querySelector('.typed-text');
if (el) {
    const words = ['Web Developer', 'Flutter Enthusiast', 'Python Lover', 'Future Full-Stack', 'Siswa Kelas 8', 'Tech Explorer'];
    let wi = 0, ci = 0, deleting = false;

    function type() {
        const word = words[wi];
        if (deleting) {
            el.textContent = word.substring(0, ci - 1);
            ci--;
            if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, 400); return; }
            setTimeout(type, 30 + Math.random() * 20);
        } else {
            el.textContent = word.substring(0, ci + 1);
            ci++;
            if (ci === word.length) { deleting = true; setTimeout(type, 2000); return; }
            setTimeout(type, 60 + Math.random() * 30);
        }
    }
    setTimeout(type, 600);
}