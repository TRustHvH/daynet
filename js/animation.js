function show(shown, hidden, shown_p_size, anim_size) {
    if ($(shown).hasClass("animation-up")) return
    $(shown).addClass("animation-up")
    $(shown).find("img").addClass("show")
    $(shown).find("img").css("margin-top", shown_p_size)
    $(anim_size).css("max-width", "1000px")
    $(anim_size).css("max-height", "1000px")
    $(shown).css("opacity", 1)
    $(shown).find("img").finish().animate({
        marginTop: "-=" + shown_p_size + "px"
    }, 500)
    $(hidden).find("img").addClass("hide")
    $(hidden).find("img").finish().animate({
        marginTop: "-=" + shown_p_size + "px"
    }, 500)
    $(hidden).addClass("hide")
}
function hide(shown, hidden, shown_p_size, anim_size) {
    if (!$(shown).hasClass("animation-up")) return
    $(shown).find("img").removeClass("show")
    $(anim_size).css("max-width", "32px")
    $(anim_size).css("max-height", "32px")
    $(shown).css("opacity", 0)
    $(shown).find("img").finish().animate({
        marginTop: "+=" + shown_p_size + "px"
    }, 500)
    $(hidden).find("img").removeClass("hide")
    $(shown).find("img").css("margin-top", 0)
    $(hidden).find("img").finish().animate({
        marginTop: "+=" + shown_p_size + "px"
    }, 500)
    $(hidden).removeClass("hide")
    $(shown).removeClass("animation-up")
}
$(document).ready(function () {
    let anims = $(".animation")
    anims.each(function (idx, el) {
        let $animation_block = $(el)
        let hidden = $animation_block.find(".animation-hidden")
        let shown = $animation_block.find(".animation-shown")
        let anim_size = $animation_block.find(".animation-size-controller")
        let shown_p_size = $(shown).find("span").height()
        $animation_block.on('mouseenter', function() {
            if ($animation_block.hasClass("auto-shown")) return
            show(shown, hidden, shown_p_size, anim_size)
        });
        $animation_block.on('mouseleave', function() {
            if ($animation_block.hasClass("auto-shown")) return
            hide(shown, hidden, shown_p_size, anim_size)
        });
        hidden.css("height", shown.height())
    })

    const focusBlock = (key, index, move) => {
        let $item = $(anims.eq(index));
        let hidden = $item.find(".animation-hidden")
        let shown = $item.find(".animation-shown")
        let anim_size = $item.find(".animation-size-controller")
        let shown_p_size = $(shown).find("span").height()
        $item.addClass("auto-shown")
        if (move === "add"){
            show(shown, hidden, shown_p_size, anim_size)
        }
        else if(move === "remove"){
            switch (key) {
                case "main":
                    hide(shown, hidden, shown_p_size, anim_size)
                    $item.removeClass("auto-shown")
                    break;
                case "secondary":
                    setTimeout(() => {
                        hide(shown, hidden, shown_p_size, anim_size)
                        $item.removeClass("auto-shown")
                    }, 5);
                    break;
            }
        }
        
    };

    const svgs = (index, move) => {
        let itemstartsvg = $(".line" + index + "-1");
        let itemsvg = itemstartsvg.find('path');
        if(move === "add")
        {
            itemsvg.css("display", "block")
            itemsvg.attr("class", "svg-line-add" + index);
        } else if(move === "remove"){

            setTimeout(() => {
                itemsvg.attr("class", "svg-line-remove" + index);
                setTimeout(() => {
                    itemsvg.css("display", "none")
                }, 100)
                }, 0);
        }
    };

//--header--
    let headerHeight = 1200; //

//--Скролл--
    window.addEventListener('scroll', function() {
        // --Текущая позиция скролла--
        let scrollPosition = window.scrollY;

        // --Позиция скролла с учетом высоты header--
        let adjustedScrollPosition = scrollPosition - headerHeight;

        // ------------------------DAYNET------------------------//
        if (adjustedScrollPosition > -756 && adjustedScrollPosition <= -538) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 12, "remove");
            svgs(0, "remove")
            svgs(2, "remove")
            svgs(3, "remove")
            svgs(4, "remove")
            setTimeout(() => {
                focusBlock("secondary", 6, "remove");
                focusBlock("secondary", 11, "remove");
                focusBlock("secondary", 13, "remove");
                focusBlock("secondary", 17, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //----------------------------------------------------------
        if (adjustedScrollPosition >= -329 && adjustedScrollPosition <= 131) {
            //-===-===-//
            focusBlock("main", 12, "add");
            svgs(0, "add")
            svgs(2, "add")
            svgs(3, "add")
            svgs(4, "add")
            setTimeout(() => {
                focusBlock("secondary", 6, "add");
                focusBlock("secondary", 11, "add");
                focusBlock("secondary", 13, "add");
                focusBlock("secondary", 17, "add");
            }, 1000);
            //-===-===-//
        }

        //----------------------------------------------------------
        if (adjustedScrollPosition > 220 && adjustedScrollPosition <= 543) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 12, "remove");
            svgs(0, "remove")
            svgs(2, "remove")
            svgs(3, "remove")
            svgs(4, "remove")
            setTimeout(() => {
                focusBlock("secondary", 6, "remove");
                focusBlock("secondary", 11, "remove");
                focusBlock("secondary", 13, "remove");
                focusBlock("secondary", 17, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        // ------------------------DAYNET------------------------//

        // -------------------------ORM-1------------------------//
        if (adjustedScrollPosition > 546 && adjustedScrollPosition <= 640) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(6, "remove")
            svgs(11, "remove")
            svgs(12, "remove")
            svgs(13, "remove")
            svgs(18, "remove")
            svgs(19, "remove")
            svgs(20, "remove")
            setTimeout(() => {
                focusBlock("secondary", 5, "remove");
                focusBlock("secondary", 10, "remove");
                focusBlock("secondary", 15, "remove");
                focusBlock("secondary", 16, "remove");
                focusBlock("secondary", 18, "remove");
                focusBlock("secondary", 21, "remove");
                focusBlock("secondary", 22, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 652 && adjustedScrollPosition <= 1197) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(6, "add")
            svgs(11, "add")
            svgs(12, "add")
            svgs(13, "add")
            svgs(18, "add")
            svgs(19, "add")
            svgs(20, "add")
            setTimeout(() => {
                focusBlock("secondary", 5, "add");
                focusBlock("secondary", 10, "add");
                focusBlock("secondary", 15, "add");
                focusBlock("secondary", 16, "add");
                focusBlock("secondary", 18, "add");
                focusBlock("secondary", 21, "add");
                focusBlock("secondary", 22, "add");
            }, 1000);

            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 1198 && adjustedScrollPosition <= 1350) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(6, "remove")
            svgs(11, "remove")
            svgs(12, "remove")
            svgs(13, "remove")
            svgs(18, "remove")
            svgs(19, "remove")
            svgs(20, "remove")
            setTimeout(() => {
                focusBlock("secondary", 5, "remove");
                focusBlock("secondary", 10, "remove");
                focusBlock("secondary", 15, "remove");
                focusBlock("secondary", 16, "remove");
                focusBlock("secondary", 18, "remove");
                focusBlock("secondary", 21, "remove");
                focusBlock("secondary", 22, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        // -------------------------ORM-1------------------------//

        //----------------------ORM-Стратегия--------------------//
        if (adjustedScrollPosition > 1521 && adjustedScrollPosition <= 1623) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(12, "remove")
            setTimeout(() => {
                focusBlock("secondary", 16, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 1700 && adjustedScrollPosition <= 2050) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(12, "add")
            setTimeout(() => {
                focusBlock("secondary", 16, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 2140 && adjustedScrollPosition <= 2365) {
            //-===-===-//
            focusBlock("main", 11, "remove");
            svgs(12, "remove")
            setTimeout(() => {
                focusBlock("secondary", 16, "remove");
            }, 1000);
            //-===-===-//
        }
        //----------------------ORM-Стратегия--------------------//

        //----------------------ORM-Мониторинг-------------------//
        if (adjustedScrollPosition > 2370 && adjustedScrollPosition <= 2480) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(6, "remove")
            svgs(7, "remove")
            svgs(8, "remove")
            setTimeout(() => {
                focusBlock("secondary", 1, "remove");
                focusBlock("secondary", 2, "remove");
                focusBlock("secondary", 5, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 2790 && adjustedScrollPosition <= 3080) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(6, "add")
            svgs(7, "add")
            svgs(8, "add")
            setTimeout(() => {
                focusBlock("secondary", 1, "add");
                focusBlock("secondary", 2, "add");
                focusBlock("secondary", 5, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 3100 && adjustedScrollPosition <= 3400) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(6, "remove")
            svgs(7, "remove")
            svgs(8, "remove")
            setTimeout(() => {
                focusBlock("secondary", 1, "remove");
                focusBlock("secondary", 2, "remove");
                focusBlock("secondary", 5, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Мониторинг-------------------//

        //----------------------ORM-Аналитика--------------------//
        if (adjustedScrollPosition > 3420 && adjustedScrollPosition <= 3580) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(13, "remove")
            setTimeout(() => {
                focusBlock("secondary", 15, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 3590 && adjustedScrollPosition <= 3900) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(13, "add")
            setTimeout(() => {
                focusBlock("secondary", 15, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 4120 && adjustedScrollPosition <= 4300) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(13, "remove")
            setTimeout(() => {
                focusBlock("secondary", 15, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Аналитика--------------------//

        //----------------------ORM-Отзывы и рейтинги------------//
        if (adjustedScrollPosition > 4310 && adjustedScrollPosition <= 4390) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(20, "remove")
            setTimeout(() => {
                focusBlock("secondary", 18, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 4400 && adjustedScrollPosition <= 4900) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(20, "add")
            setTimeout(() => {
                focusBlock("secondary", 18, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 4920 && adjustedScrollPosition <= 5000) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(20, "remove")
            setTimeout(() => {
                focusBlock("secondary", 18, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Отзывы и рейтинги------------//

        //----------------------ORM-Serm-------------------------//
        if (adjustedScrollPosition > 5480 && adjustedScrollPosition <= 5650) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(9, "remove")
            svgs(10, "remove")
            svgs(11, "remove")
            setTimeout(() => {
                focusBlock("secondary", 0, "remove");
                focusBlock("secondary", 4, "remove");
                focusBlock("secondary", 10, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 5690 && adjustedScrollPosition <= 6090) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(9, "add")
            svgs(10, "add")
            svgs(11, "add")
            setTimeout(() => {
                focusBlock("secondary", 0, "add");
                focusBlock("secondary", 4, "add");
                focusBlock("secondary", 10, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 6100 && adjustedScrollPosition <= 6300) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(9, "remove")
            svgs(10, "remove")
            svgs(11, "remove")
            setTimeout(() => {
                focusBlock("secondary", 0, "remove");
                focusBlock("secondary", 4, "remove");
                focusBlock("secondary", 10, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Serm-------------------------//

        //----------------------ORM-Соцсети----------------------//
        if (adjustedScrollPosition > 6580 && adjustedScrollPosition <= 6750) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(18, "remove")
            setTimeout(() => {
                focusBlock("secondary", 21, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 6780 && adjustedScrollPosition <= 7270) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(18, "add")
            setTimeout(() => {
                focusBlock("secondary", 21, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 7280 && adjustedScrollPosition <= 7350) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(18, "remove")
            setTimeout(() => {
                focusBlock("secondary", 21, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Соцсети----------------------//

        //----------------------ORM-Соцсети-SMRM-----------------//
        if (adjustedScrollPosition > 6580 && adjustedScrollPosition <= 6750) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(16, "remove")
            svgs(18, "remove")
            setTimeout(() => {
                focusBlock("secondary", 21, "remove");
                focusBlock("secondary", 26, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 7665 && adjustedScrollPosition <= 8172) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(16, "add")
            svgs(18, "add")
            setTimeout(() => {
                focusBlock("secondary", 21, "add");
                focusBlock("secondary", 26, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 8175 && adjustedScrollPosition <= 8275) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(16, "remove")
            svgs(18, "remove")
            setTimeout(() => {
                focusBlock("secondary", 21, "remove");
                focusBlock("secondary", 26, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Соцсети-SMRM-----------------//

        //----------------------ORM-Соцсети-HM-------------------//
        if (adjustedScrollPosition > 8276 && adjustedScrollPosition <= 8380) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(17, "remove")
            svgs(18, "remove")
            setTimeout(() => {
                focusBlock("secondary", 21, "remove");
                focusBlock("secondary", 25, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 8530 && adjustedScrollPosition <= 9160) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(17, "add")
            svgs(18, "add")
            setTimeout(() => {
                focusBlock("secondary", 21, "add");
                focusBlock("secondary", 25, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 9268 && adjustedScrollPosition <= 9378) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(17, "remove")
            svgs(18, "remove")
            setTimeout(() => {
                focusBlock("secondary", 21, "remove");
                focusBlock("secondary", 25, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Соцсети-HM-------------------//

        //----------------------ORM-Официальный представитель----//
        if (adjustedScrollPosition > 9358 && adjustedScrollPosition <= 9530) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 11, "remove");
            svgs(19, "remove")
            svgs(26, "remove")
            svgs(27, "remove")
            svgs(28, "remove")
            setTimeout(() => {
                focusBlock("secondary", 22, "remove");
                focusBlock("secondary", 27, "remove");
                focusBlock("secondary", 28, "remove");
                focusBlock("secondary", 29, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 9650 && adjustedScrollPosition <= 10157) {
            //-===-===-//
            focusBlock("main", 11, "add");
            svgs(19, "add")
            svgs(26, "add")
            svgs(27, "add")
            svgs(28, "add")
            setTimeout(() => {
                focusBlock("secondary", 22, "add");
                focusBlock("secondary", 27, "add");
                focusBlock("secondary", 28, "add");
                focusBlock("secondary", 29, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 10250 && adjustedScrollPosition <= 10360) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 11, "remove");
            svgs(19, "remove")
            svgs(26, "remove")
            svgs(27, "remove")
            svgs(28, "remove")
            setTimeout(() => {
                focusBlock("secondary", 22, "remove");
                focusBlock("secondary", 27, "remove");
                focusBlock("secondary", 28, "remove");
                focusBlock("secondary", 29, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------ORM-Официальный представитель----//

        //----------------------SMM------------------------------//
        if (adjustedScrollPosition > 10396 && adjustedScrollPosition <= 10468) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 12, "remove");
            svgs(4, "remove")
            setTimeout(() => {
                focusBlock("secondary", 17, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 10490 && adjustedScrollPosition <= 11150) {
            //-===-===-//
            focusBlock("main", 12, "add");
            svgs(4, "add")
            setTimeout(() => {
                focusBlock("secondary", 17, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 11260 && adjustedScrollPosition <= 11300) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 12, "remove");
            svgs(4, "remove")
            setTimeout(() => {
                focusBlock("secondary", 17, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------SMM------------------------------//

        //----------------------Реклама--------------------------//
        if (adjustedScrollPosition > 11396 && adjustedScrollPosition <= 11468) {
            //-===-удаление при скролле к блоку выше-===-//
            focusBlock("main", 12, "remove");
            svgs(1, "remove")
            svgs(3, "remove")
            svgs(5, "remove")
            setTimeout(() => {
                focusBlock("secondary", 3, "remove");
                focusBlock("secondary", 6, "remove");
                focusBlock("secondary", 7, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку выше-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition >= 11550 && adjustedScrollPosition <= 12110) {
            //-===-===-//
            focusBlock("main", 12, "add");
            svgs(1, "add")
            svgs(3, "add")
            svgs(5, "add")
            setTimeout(() => {
                focusBlock("secondary", 3, "add");
                focusBlock("secondary", 6, "add");
                focusBlock("secondary", 7, "add");
            }, 1000);
            //-===-===-//
        }
        //---------------------------------------------------------
        if (adjustedScrollPosition > 12150 && adjustedScrollPosition <= 12300) {
            //-===-удаление при скролле к блоку ниже-===-//
            focusBlock("main", 12, "remove");
            svgs(0, "remove")
            svgs(1, "remove")
            svgs(2, "remove")
            svgs(3, "remove")
            svgs(4, "remove")
            svgs(5, "remove")
            svgs(6, "remove")
            svgs(7, "remove")
            svgs(8, "remove")
            svgs(9, "remove")
            svgs(10, "remove")
            svgs(11, "remove")
            svgs(12, "remove")
            svgs(13, "remove")
            svgs(14, "remove")
            svgs(15, "remove")
            svgs(16, "remove")
            svgs(17, "remove")
            svgs(18, "remove")
            svgs(19, "remove")
            svgs(20, "remove")
            svgs(21, "remove")
            svgs(22, "remove")
            svgs(23, "remove")
            svgs(24, "remove")
            svgs(25, "remove")
            svgs(26, "remove")
            svgs(27, "remove")
            svgs(28, "remove")
            setTimeout(() => {
                focusBlock("secondary", 3, "remove");
                focusBlock("secondary", 6, "remove");
                focusBlock("secondary", 7, "remove");
            }, 1000);
            //-===-удаление при скролле к блоку ниже-===-//
        }
        //----------------------Реклама--------------------------//

    });

})

