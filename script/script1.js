window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;0.2
    parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px'; // Adjust the multiplier for speed
});
