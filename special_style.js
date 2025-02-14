// Add floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.fontSize = '24px';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.animation = 'float-up 3s linear';
    document.body.appendChild(heart);

    setTimeout(() => {heart.remove();}, 3000);
}

setInterval(createHeart, 300);

// CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            transform: translateY(100vh);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);