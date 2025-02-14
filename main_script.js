function showPage(pageNum) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(`page${pageNum}`).classList.add('active');
}

function celebrate() {
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart', 'floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.5;
    document.body.appendChild(heart);
    setTimeout(() => {heart.remove();}, 5000);
}