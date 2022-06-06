function iconMark() {
    // IconMark 
    let iconMark = document.querySelectorAll('.section2__upside> i');

    for (let j = 0; j < iconMark.length; j++) {
        iconMark[j].addEventListener('click', () => {
            iconMark[j].classList.toggle('marked');
        });
    };
}
module.exports = iconMark;