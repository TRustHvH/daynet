window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
    e.preventDefault();
    return false;
}
}, {passive:false});

document.addEventListener("DOMContentLoaded", function() {
    let mobile_menu = document.getElementById('mobile-menu')
    let is_opened = false

    function mobile_menu_opener() {
        if (is_opened === false) {
            mobile_menu.style.display = 'flex'
            is_opened = true
        } else {
            mobile_menu.style.display = 'none'
            is_opened = false
        }
    }

    document.getElementById("mobile-header-button").addEventListener("click", mobile_menu_opener);
    document.getElementById("close-mobile-header").addEventListener("click", mobile_menu_opener);
});
// function decreaseSize() {
//     const images = document.getElementsByTagName('img');
//     const svgs = document.getElementsByTagName('svg');
//
//     for (let i = 0; i < images.length; i++) {
//         const currentWidth = images[i].width;
//         images[i].style.width = `${currentWidth - 1}px`;
//     }
//
//     for (let i = 0; i < svgs.length; i++) {
//         const currentWidth = svgs[i].getAttribute('width');
//         svgs[i].setAttribute('width', `${parseInt(currentWidth) - 1}px`);
//     }
// }
//
// // Функция для увеличения размера элементов на 1px
// function increaseSize() {
//     const images = document.getElementsByTagName('img');
//     const svgs = document.getElementsByTagName('svg');
//
//     for (let i = 0; i < images.length; i++) {
//         const currentWidth = images[i].width;
//         images[i].style.width = `${currentWidth + 1}px`;
//
//     }
//
//     for (let i = 0; i < svgs.length; i++) {
//         const currentWidth = svgs[i].getAttribute('width');
//         svgs[i].setAttribute('width', `${parseInt(currentWidth) + 1}px`);
//     }
// }
//
// window.innerWidthDelta = window.innerWidth;
//
// window.addEventListener('resize', () => {
//     const currentWidth = window.innerWidth;
//     const previousWidth = window.innerWidthDelta;
//
//     if (currentWidth < previousWidth) {
//         decreaseSize();
//     } else if (currentWidth > previousWidth) {
//         increaseSize();
//     }
//
//     window.innerWidthDelta = currentWidth;
// });

