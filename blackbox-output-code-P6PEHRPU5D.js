document.getElementById('flirtButton').addEventListener('click', function() {
    document.getElementById('flirtMessage').classList.remove('hidden');
    document.getElementById('messageForm').classList.remove('hidden');
    this.style.display = 'none';
    
    // Animate hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${index * 2}s`;
    });
});

document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementById('message').value;
    alert(`Message sent: "${message}" (In a real setup, this would email you or her!)`);
    // For actual sending, integrate with a service like Formspree: https://formspree.io/
});