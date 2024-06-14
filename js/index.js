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
    let currentSlide = 1;
    let currentSlideElement = document.getElementById('indicator');
    const totalSlidesElement = document.getElementById('total-slides');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carouselNumbers = document.querySelector('.carousel-numbers');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalSlides = carouselItems.length;
    const slidesContainer = document.querySelector('.blog-text');
    const slidesContainer_slide = document.querySelector(".blog-block")
    
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
    
    function updateCarouselNumbers() {

        carouselNumbers.innerHTML = '';

        const pages = Math.ceil(totalSlides / getItemsToShow());
        
        let svgwidth = (slidesContainer.clientWidth / 1.2) / pages
        for (let i = 0; i < pages; i++) {
            const numberColor = i === (Math.ceil(currentSlide / getItemsToShow()) - 1) ? '#7B74FF' : '#209DB7';
            carouselNumbers.innerHTML += `
                <p class="number" style="color: ${numberColor};">${i + 1}</p>
            `;
            
            if (i < pages - 1) {
                carouselNumbers.innerHTML += `
                    <svg style="width: ${svgwidth}" width="310" height="2" viewBox="0 0 310 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H309" stroke="url(#paint0_linear_220_16807)" stroke-width="2" stroke-linecap="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_220_16807" x1="0.999973" y1="1.00042" x2="1.11586" y2="-4.97292" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4AFCF1"/>
                                <stop offset="0.265625" stop-color="#75CDFF"/>
                                <stop offset="0.661458" stop-color="#7A73FF"/>
                                <stop offset="1" stop-color="#FD9BE8"/>
                            </linearGradient>
                        </defs>
                    </svg>
                `;
            }
        }
    }

    // Обновление при изменении размера окна
    window.addEventListener('resize', updateCarouselNumbers);

    // Начальное обновление
    updateCarouselNumbers();
    function showSlide(index) {
        const translateValue = -(index - 1) * (slidesContainer_slide.clientWidth + parseToInt(getComputedStyle(slidesContainer).gap)) + 5 + 'px';
        slidesContainer.style.transform = 'translateX(' + translateValue + ')';
        
        nextButton.style.backgroundColor = index === totalSlides ? 'rgba(214, 214, 214, 1)' : '';
        nextButton.style.pointerEvents = index === totalSlides ? 'none' : 'auto';

        prevButton.style.backgroundColor = index === 1 ? 'rgba(214, 214, 214, 1)' : '';
        prevButton.style.pointerEvents = index === 1 ? 'none' : 'auto';
    }

    prevButton.addEventListener('click', () =>{
        prevSlide()
    })
    nextButton.addEventListener('click', () =>{
        nextSlide()
    })
    function prevSlide() {
        const itemsToShow = getItemsToShow();
        currentSlide = (currentSlide - itemsToShow + totalSlides) % totalSlides || totalSlides;
        showSlide(currentSlide);
        updateCarouselNumbers();
    }

    function nextSlide() {
        const itemsToShow = getItemsToShow();
        currentSlide = (currentSlide + itemsToShow - 1) % totalSlides + 1;
        showSlide(currentSlide);
        updateCarouselNumbers();
    }

    setInterval(nextSlide, 4000);
});

