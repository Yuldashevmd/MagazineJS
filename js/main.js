window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
        slider = require('./modules/slider'),
        slidePanel = require('./modules/slidePanel'),
        modals = require('./modules/modals'),
        likes = require('./modules/likes'),
        iconMark = require('./modules/iconMark'),
        date = require('./modules/date');

    tabs();
    slider();
    slidePanel();
    modals();
    likes();
    iconMark();
    date();
});