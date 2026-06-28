// Cube 3D dengan efek tilt tambahan
const cube = document.querySelector('.cube-3d');
const wrapper = document.querySelector('.cube-container');

if (wrapper && cube) {
    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        cube.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`;
        cube.style.animation = 'none';
    });
    wrapper.addEventListener('mouseleave', () => {
        cube.style.transform = '';
        cube.style.animation = 'spinCube 15s infinite linear';
    });
}