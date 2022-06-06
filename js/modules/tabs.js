function tabs() {
    // TabImg
    const tabImgBg = document.querySelectorAll('.recomment__list'),
        mainImg = document.querySelectorAll('.bottom__img');
    let indexNum = 0;

    removeClass();
    addClass(indexNum);

    function removeClass() {
        tabImgBg.forEach((item) => item.classList.remove('clicked'))
        mainImg.forEach(item => item.style.display = 'none');
    }

    function addClass(indexNum = 0) {
        tabImgBg[indexNum].classList.add('clicked');
        mainImg[indexNum].style.display = 'flex';
    }
    tabImgBg.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            removeClass();
            addClass(i);
        });
    });
}
module.exports = tabs;