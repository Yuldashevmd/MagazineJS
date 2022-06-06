function slidePanel() {
    // SlidePanel 
    const slidePanelCon = document.querySelector('.slidePanel-menu'),
        slidePanel = document.querySelector('.slidePanel__container'),
        closeSlidePanel = document.querySelector('.slidePanel__close'),
        openSlidePanel = document.querySelector('.fa-bars');

    openSlidePanel.addEventListener('click', () => {
        slidePanelCon.style.display = 'block';
        slidePanel.classList.add('open');
    });
    closeSlidePanel.addEventListener('click', () => {
        slidePanelCon.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target == slidePanelCon) slidePanelCon.style.display = 'none';
    })
}
module.exports = slidePanel;