function slider() {
    //Slider
    const slides = document.querySelectorAll('.slides'),
        dot = document.querySelectorAll('.dot');
    let index = 1;

    function hideContent() {
        slides.forEach(item => item.style.display = 'none');
        dot.forEach(item => item.classList.remove('active'));
    }

    function showContent(i = 0) {
        slides[i].style.display = 'block';
        dot[i].classList.add('active');
    }
    dot.forEach((item, i) => {
        item.addEventListener('click', () => {
            hideContent()
            showContent(i);
        });
    })
    hideContent();
    showContent(index - 1);
}

module.exports = slider;