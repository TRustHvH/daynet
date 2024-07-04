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
        if (window.scrollY >= 85) {
            document.querySelector(".header").classList.add("header-scroll");
        } else {
            document.querySelector(".header").classList.remove("header-scroll");
        }
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
    
    /// --- Carousel --- \\\

    let currentSlide = 1;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const slidesContainer = document.querySelector('.blog-text');
    const slidesContainer_slide = document.querySelector(".blog-block");
    const totalSlides = document.querySelectorAll('.blog-block').length;

    function parseToInt(value) {
        return parseInt(value, 10);
    }

    function getItemsToShow() {
        if (document.documentElement.clientWidth >= 1024) {
            return 3; // Например, на экранах >= 1024px показывать 3 элемента
        } else if (document.documentElement.clientWidth >= 769) {
            return 2; // На экранах >= 769px показывать 2 элемента
        } else {
            return 1; // На экранах < 769px показывать 1 элемент
        }
    }

    let pages;
    pages = Math.ceil(totalSlides / getItemsToShow());
    document.querySelector('.carousel-number').innerHTML = pages;

    const activePrevSrc = "img/carousel-arrows/active-prev.svg";
    const inactivePrevSrc = "img/carousel-arrows/unactive-prev.svg";
    const activeNextSrc = "img/carousel-arrows/active-next.svg";
    const inactiveNextSrc = "img/carousel-arrows/unactive-next.svg";

    function showSlide(index) {
        const translateValue = -(index - 1) * (slidesContainer_slide.clientWidth + parseToInt(getComputedStyle(slidesContainer).gap)) + 5 + 'px';
        slidesContainer.style.transform = 'translateX(' + translateValue + ')';

        if (index === totalSlides) {
            nextButton.style.backgroundColor = 'rgba(214, 214, 214, 1)';
            nextButton.style.pointerEvents = 'none';
            nextButton.src = inactiveNextSrc;
        } else {
            nextButton.style.backgroundColor = '';
            nextButton.style.pointerEvents = 'auto';
            nextButton.src = activeNextSrc;
        }

        if (index === 1 || index === 2) {
            prevButton.style.backgroundColor = 'rgba(214, 214, 214, 1)';
            prevButton.style.pointerEvents = 'none';
            prevButton.src = inactivePrevSrc;
        } else {
            prevButton.style.backgroundColor = '';
            prevButton.style.pointerEvents = 'auto';
            prevButton.src = activePrevSrc;
        }
    }

    prevButton.addEventListener('click', () => {
        prevSlide();
    });
    nextButton.addEventListener('click', () => {
        nextSlide();
    });

    function prevSlide() {
        const itemsToShow = getItemsToShow();
        currentSlide = (currentSlide - itemsToShow + totalSlides) % totalSlides || totalSlides;
        showSlide(currentSlide);
    }

    function nextSlide() {
        const itemsToShow = getItemsToShow();
        currentSlide = (currentSlide + itemsToShow - 1) % totalSlides + 1;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 4000);

    showSlide(currentSlide);
});

