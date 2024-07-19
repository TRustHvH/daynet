document.addEventListener("DOMContentLoaded", function() {

    /// --- Mobile menu --- \\\
    
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

    /// --- Header Animation --- \\\
    
    document.addEventListener("scroll", () => {
        if (window.scrollY >= 220) {
            document.querySelector(".header").classList.add("header-scroll");
        } else {
            document.querySelector(".header").classList.remove("header-scroll");
        }
    })

    /// --- Header-hide --- \\\

    let lastScroll = 0;
    const defaultOffset = 100;
    const header = document.querySelector('.header');
    const mLinks = document.querySelector('.mobile-links');
    const popUp = document.querySelector('.popup');
    const popUpCases = document.querySelector('.popup-cases');

    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('hide');

    window.addEventListener('scroll', () => {
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            //scroll down
            header.classList.add('hide');
            mLinks.classList.add('hide');
            popUp.classList.add('hide');
            popUpCases.classList.add('hide');
        }
        else if(scrollPosition() < lastScroll && containHide()){
            //scroll up
            header.classList.remove('hide');
            mLinks.classList.remove('hide');
            popUp.classList.remove('hide');
            popUpCases.classList.remove('hide');
        }

        lastScroll = scrollPosition();
    })

    /// --- Popup menu --- \\\

    const popupServices = document.querySelector(".popup-services");
    const popupCases = document.querySelector(".popup-cases");
    const serviceLink = document.querySelector(".service-link");
    const caseLink = document.querySelector(".case-link");

    let currentPopup = null;

    function showPopup(popupToShow) {
        if (currentPopup && currentPopup !== popupToShow) {
            hidePopup(currentPopup);
            setTimeout(() => {
                popupToShow.style.display = "flex";
                setTimeout(() => {
                    popupToShow.style.opacity = "1";
                }, 200);
            }, 200);
        } else {
            popupToShow.style.display = "flex";
            setTimeout(() => {
                popupToShow.style.opacity = "1";
            }, 1)
        }
        currentPopup = popupToShow;
    }

    function hidePopup(popup) {
        popup.style.opacity = "0";
        setTimeout(() => {
            popup.style.display = "none";
        }, 200);
        currentPopup = null;
    }

    serviceLink.addEventListener("click", (event) => {
        event.stopPropagation();
        if (currentPopup !== popupServices) {
            showPopup(popupServices);
        } else {
            hidePopup(popupServices);
        }
    });

    caseLink.addEventListener("click", (event) => {
        event.stopPropagation();
        if (currentPopup !== popupCases) {
            showPopup(popupCases);
        } else {
            hidePopup(popupCases);
        }
    });

    document.addEventListener("click", (event) => {
        if (currentPopup && !currentPopup.contains(event.target) && !serviceLink.contains(event.target) && !caseLink.contains(event.target)) {
            hidePopup(currentPopup);
        }
    });

    popupServices.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    popupCases.addEventListener("click", (event) => {
        event.stopPropagation();
    });
});


