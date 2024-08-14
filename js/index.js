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
        if (window.scrollY >= 300) {
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

    /// --- About-us block lines --- \\\

    const scaleMarks = document.querySelectorAll('.scale-mark');
    const scaleHolders = document.querySelectorAll('.scale-holder .text');

    scaleMarks.forEach((mark, index) => {
        mark.addEventListener('mouseover', () => {
            document.querySelector('.scale-mark.open').classList.remove('open');
            mark.classList.add('open');

            updateScaleHolders();
        });

        mark.addEventListener('mouseout', () => {
            if (index !== 0) {
                mark.classList.remove('open');
                scaleMarks[0].classList.add('open');
            }
            updateScaleHolders();
        });
        function updateScaleHolders() {
            scaleHolders.forEach((holder, index) => {
                if (index < scaleMarks.length && scaleMarks[index].classList.contains('open')) {
                    holder.style.opacity = 1;
                } else {
                    holder.style.opacity = 0;
                }
            });
        }
    })

    /// --- Form??? --- \\\

    const ids = [
        'phoneInput',
        'nameInput',
        'messageInput',
        'sphereInput',
        'siteInput',
        'commentInput'
    ];
    ids.forEach(id => {
        const input = document.getElementById(id);
        if (input) {
            input.addEventListener('mouseover', function() {
                this.setAttribute('data-placeholder', this.placeholder);
                this.placeholder = '';
            });
            input.addEventListener('mouseout', function() {
                this.placeholder = this.getAttribute('data-placeholder');
            });
        }
    });

    /// --- Cases ---\\\

    const items = document.querySelectorAll('.cases-bottom-item');

    const caseData = {
        case1: {
            inf1: "Автосалон",
            inf1_1: "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7.",
            inf2: "17+",
            inf2_2: "Среднее количество площадок присутствия на филиал выросло с 5 до 17.",
            inf3: "С 20% до 85%",
            inf3_3: "Средний уровень позитивных упоминаний в выдаче и на площадках обсуждений увеличился с 20% до 80-85%.",
            img_text: "Средний рейтинг автосалонов вырос с 3.7 звёзд до 4.6-4.7.",
            imgLink: "../html/cases/case-autosalon.html",
            imgBackground: "url('../img/casescar.svg') no-repeat center",
        },
        case2: {
            inf1: "Банк",
            inf1_1: "С 2,9 до 4,5 звезд вырос рейтинг банка.",
            inf2: "С 0.3 до 2.0",
            inf2_2: "С 0.3 до 2.0 увеличено соотношение позитивных и негативных упоминаний (по показателям KPI).",
            inf3: "В 4,5 раза",
            inf3_3: "В 4,5 раза сократилось количество упоминаний соискателями негативных отзывов на собеседованиях.",
            img_text: "С 2,9 до 4,5 звезд вырос рейтинг банка.",
            imgLink: "html/cases/case-bank.html",
            imgBackground: "url('../img/case-bank.svg') no-repeat center",
        },
        case3: {
            inf1: "Сеть клиник",
            inf1_1: "Наша команда вернула доброе имя сети клиник.",
            inf2: "С 3.2 звёзд до 4.7",
            inf2_2: "Средний рейтинг сети клиник с 3.2 звёзд до 4.7.",
            inf3: "100%",
            inf3_3: "Было обработано 100% отзывов на подконтрольных нам площадках.",
            img_text: "Наша команда вернула доброе имя сети клиник.",
            imgLink: "html/cases/case-clinic.html",
            imgBackground: "url('../img/clinic.svg') no-repeat center",
        },
        case4: {
            inf1: "Персональная репутация",
            inf1_1: "Увеличилось количество повторных обращений.",
            inf2: "Аудитория",
            inf2_2: "У целевой аудитории укрепилась привычка обращаться к специалисту.",
            inf3: "Рейтинги",
            inf3_3: "Поднялись рейтинги личного бренда.",
            img_text: "Увеличилось количество повторных обращений.",
            imgLink: "html/cases/case-personality.html",
            imgBackground: "url('../img/personal.svg') no-repeat center",
        },
        case5: {
            inf1: "Стройматериалы",
            inf1_1: "Развеяли сомнения потребителей и подтвердили качество продукции.",
            inf2: "Площадки",
            inf2_2: "Площадки с накрученной негативной ситуацией смещены минимум на 3 страницу поисковой выдачи.",
            inf3: "Запросы",
            inf3_3: "Все негативные запросы обработаны.",
            img_text: "Развеяли сомнения потребителей и подтвердили качество продукции.",
            imgLink: "html/cases/case-building-materials.html",
            imgBackground: "url('../img/building-materials.svg') no-repeat center",
        }
    };

    if (items.length > 0) {
        items[0].classList.add('active-case');
        updateCaseInfo('case1');
    }

    function updateCaseInfo(caseId) {
        const data = caseData[caseId];
        document.getElementById("inf1").textContent = data.inf1;
        document.getElementById("inf1-1").textContent = data.inf1_1;
        document.getElementById("inf2").textContent = data.inf2;
        document.getElementById("inf2-2").textContent = data.inf2_2;
        document.getElementById("inf3").textContent = data.inf3;
        document.getElementById("inf3-3").textContent = data.inf3_3;
        document.getElementById("img-text").textContent = data.img_text;
        document.getElementById("imgLink").href = data.imgLink;
        document.querySelector('.cases-img').style.background = data.imgBackground;
        document.querySelector('.cases-img').style.backgroundSize = "110%";
    }

    items.forEach(item => {
        item.addEventListener('click', function () {
            items.forEach(i => i.classList.remove('active-case'));
            this.classList.add('active-case');
            updateCaseInfo(this.id);
        });
    });
});

