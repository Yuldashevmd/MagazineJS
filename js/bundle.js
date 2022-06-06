/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/date.js":
/*!****************************!*\
  !*** ./js/modules/date.js ***!
  \****************************/
/***/ ((module) => {

function date() {
    // Date 
    setInterval(function() {
        let p = document.querySelector('.date');

        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        a = new Date();

        p.textContent = a.getDate() + " - " + month[a.getMonth()] + " . " + a.getFullYear() + " . " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    }, 500);

}

module.exports = date;

/***/ }),

/***/ "./js/modules/iconMark.js":
/*!********************************!*\
  !*** ./js/modules/iconMark.js ***!
  \********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/likes.js":
/*!*****************************!*\
  !*** ./js/modules/likes.js ***!
  \*****************************/
/***/ ((module) => {

function likes() {
    // likes 
    function clickLike() {
        let likes = document.querySelectorAll('.like');

        likes.forEach(function(item) {
            item.addEventListener('click', () => {
                item.classList.toggle('marked');
                // item.nextElementSibling.innerHTML++;
                if (item.classList.contains('marked')) {
                    item.nextElementSibling.textContent++
                } else {
                    item.nextElementSibling.textContent--
                }
            });
        });
    }
    clickLike();
}

module.exports = likes;

/***/ }),

/***/ "./js/modules/modals.js":
/*!******************************!*\
  !*** ./js/modules/modals.js ***!
  \******************************/
/***/ ((module) => {

function modals() {
    // Modal
    function modal() {
        let signIn = document.querySelector('.subcribe__text__blog');
        let modalSignIn = document.querySelector('.signIn');
        let closeModal = document.querySelector('#closeModal');

        signIn.addEventListener('click', () => {
            modalSignIn.style.display = 'flex';
        });
        closeModal.addEventListener('click', () => {
            modalSignIn.style.display = 'none';
        });
        window.onclick = function(event) {
            if (event.target == modalSignIn) {
                modalSignIn.style.display = "none";
            }
        }
    }

    function eyeModel() {
        let closeEye = document.querySelector('#closeEye');
        let openEye = document.querySelector('#openEye');
        let password = document.querySelector('#userPassword');

        closeEye.addEventListener('click', () => {
            password.type = 'text';
            closeEye.style.display = 'none';
            openEye.style.display = 'block';
        });
        openEye.addEventListener('click', () => {
            password.type = 'password';
            closeEye.style.display = 'block';
            openEye.style.display = 'none';
        });
    }

    modal();
    eyeModel();

}
module.exports = modals;

/***/ }),

/***/ "./js/modules/slidePanel.js":
/*!**********************************!*\
  !*** ./js/modules/slidePanel.js ***!
  \**********************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
window.addEventListener('DOMContentLoaded', () => {
    const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
        slidePanel = __webpack_require__(/*! ./modules/slidePanel */ "./js/modules/slidePanel.js"),
        modals = __webpack_require__(/*! ./modules/modals */ "./js/modules/modals.js"),
        likes = __webpack_require__(/*! ./modules/likes */ "./js/modules/likes.js"),
        iconMark = __webpack_require__(/*! ./modules/iconMark */ "./js/modules/iconMark.js"),
        date = __webpack_require__(/*! ./modules/date */ "./js/modules/date.js");

    tabs();
    slider();
    slidePanel();
    modals();
    likes();
    iconMark();
    date();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map