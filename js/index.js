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

    document.addEventListener("scroll", () => {
        if (window.scrollY >= 85) {
            document.querySelector(".header").classList.add("header-scroll");
        } else {
            document.querySelector(".header").classList.remove("header-scroll");
        }
    })
});
