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

    const focusBlock = (key, index) => {
        let $item = $(anims.eq(index));
        let hidden = $item.find(".animation-hidden")
        let shown = $item.find(".animation-shown")
        let anim_size = $item.find(".animation-size-controller")
        let shown_p_size = $(shown).find("span").height()
        $item.addClass("auto-shown")
        show(shown, hidden, shown_p_size, anim_size)
        switch (key) {
            case "main":
                setTimeout(() => {
                    hide(shown, hidden, shown_p_size, anim_size)
                    $item.removeClass("auto-shown")
                }, 5000);
                break;
            case "secondary":
                setTimeout(() => {
                    hide(shown, hidden, shown_p_size, anim_size)
                    $item.removeClass("auto-shown")
                }, 4200);
                break;
        }
    };

    const svgs = (index) => {
        let itemsvg = $(".line" + index + "-1").find('path');
        itemsvg.css("display", "block")
        itemsvg.attr("class", "svg-line-add" + index);
        setTimeout(() => {
            itemsvg.attr("class", "svg-line-remove" + index);
            setTimeout(() => {
                itemsvg.css("display", "none")
            }, 2000)
        }, 4000);
    };
    $(document).ready(function repeat() {
        focusBlock("main", 12);
        svgs(0)
        svgs(2)
        svgs(3)
        svgs(4)
        setTimeout(() => {
            focusBlock("secondary", 6);
            focusBlock("secondary", 11);
            focusBlock("secondary", 13);
            focusBlock("secondary", 17);
        }, 1000);
        setTimeout(() => {
            focusBlock("main", 6);
            svgs(1)
            svgs(5)
            setTimeout(() => {
                focusBlock("secondary", 3);
                focusBlock("secondary", 7);
            }, 1000);
        }, 6000);
        setTimeout(() => {
            focusBlock("main", 11);
            svgs(6)
            svgs(11)
            svgs(12)
            svgs(13)
            svgs(18)
            svgs(19)
            svgs(20)
            setTimeout(() => {
                focusBlock("secondary", 5);
                focusBlock("secondary", 10);
                focusBlock("secondary", 15);
                focusBlock("secondary", 16);
                focusBlock("secondary", 18);
                focusBlock("secondary", 21);
                focusBlock("secondary", 22);
            }, 1000);
        }, 12000);
        setTimeout(() => {
            focusBlock("main", 5);
            svgs(8)
            svgs(7)
            setTimeout(() => {
                focusBlock("secondary", 1);
                focusBlock("secondary", 2);
            }, 1000);
        }, 18000);
        setTimeout(() => {
            focusBlock("main", 10);
            svgs(9)
            svgs(10)
            setTimeout(() => {
                focusBlock("secondary", 0);
                focusBlock("secondary", 4);
            }, 1000);
        }, 24000);
        setTimeout(() => {
            focusBlock("main", 15);
            svgs(14)
            svgs(15)
            setTimeout(() => {
                focusBlock("secondary", 9);
                focusBlock("secondary", 20);
            }, 1000);
        }, 30000);
        setTimeout(() => {
            focusBlock("main", 21);
            svgs(16)
            svgs(17)
            setTimeout(() => {
                focusBlock("secondary", 25);
                focusBlock("secondary", 26);
            }, 1000);
        }, 36000);
        setTimeout(() => {
            focusBlock("main", 22);
            svgs(26)
            svgs(27)
            svgs(28)
            setTimeout(() => {
                focusBlock("secondary", 27);
                focusBlock("secondary", 28);
                focusBlock("secondary", 29);
            }, 1000);
        }, 42000);
        setTimeout(() => {
            focusBlock("main", 18);
            svgs(21)
            svgs(22)
            svgs(23)
            svgs(24)
            svgs(25)
            setTimeout(() => {
                focusBlock("secondary", 8);
                focusBlock("secondary", 14);
                focusBlock("secondary", 19);
                focusBlock("secondary", 23);
                focusBlock("secondary", 24);
            }, 1000);
        }, 48000);
        setTimeout(() => {
            repeat()
        }, 54000)
    });
})