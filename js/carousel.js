document.addEventListener("DOMContentLoaded", () => {
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
        if (document.documentElement.clientWidth >= 981) {
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

    // Swipe functionality
    let startX;
    let endX;

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }

    function handleTouchMove(event) {
        endX = event.touches[0].clientX;
    }

    function handleTouchEnd() {
        if (startX && endX) {
            const deltaX = startX - endX;
            const swipeThreshold = 50; // Adjust swipe threshold if necessary

            if (deltaX > swipeThreshold) {
                nextSlide();
            } else if (deltaX < -swipeThreshold) {
                prevSlide();
            }
        }
        startX = null;
        endX = null;
    }

    if (document.documentElement.clientWidth <= 768) {
        slidesContainer.addEventListener('touchstart', handleTouchStart);
        slidesContainer.addEventListener('touchmove', handleTouchMove);
        slidesContainer.addEventListener('touchend', handleTouchEnd);
    }

    setInterval(nextSlide, 4000);

    showSlide(getItemsToShow());
});
