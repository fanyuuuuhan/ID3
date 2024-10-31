document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.img-container img');
    images.forEach(img => {
        const scrollY = window.scrollY * 0.1;
        img.style.transform = `translateY(-${scrollY}px)`;
    });
});


