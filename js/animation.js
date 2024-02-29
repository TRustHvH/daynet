$(document).ready(function () {
    let anims = $(".animation")
    anims.each(function (idx, el) {
        let $animation_block = $(el)
        let hidden = $animation_block.find(".animation-hidden")
        let shown = $animation_block.find(".animation-shown")
        let shown_p_size = $(shown).find("span").height()
        $(shown).hover(function() {
            $(shown).find("img").addClass("show")
            $(shown).find("img").css("margin-top", shown_p_size)
            $(shown).find("img").animate({
                marginTop: "-=" + shown_p_size + "px"
            }, 500)
            $(hidden).find("img").addClass("hide")
            $(hidden).find("img").animate({
                marginTop: "-=" + shown_p_size + "px"
            }, 500)
            $(hidden).addClass("hide")
        }, function() {
            $(shown).find("img").removeClass("show")
            $(shown).find("img").animate({
                marginTop: "+=" + shown_p_size + "px"
            }, 500)
            $(hidden).find("img").removeClass("hide")
            $(shown).find("img").css("margin-top", 0)
            $(hidden).find("img").animate({
                marginTop: "+=" + shown_p_size + "px"
            }, 500)
            $(hidden).removeClass("hide")
        })
        hidden.css("height", shown.height())
    })

    const focusBlock = (key, index) => {
        let item = anims.eq(index);
        let $animation_block = item
        let hidden = $animation_block.find(".animation-hidden")
        let shown = $animation_block.find(".animation-shown")
        let anim_size = $animation_block.find(".animation-size-controller")
        let shown_p_size = $(shown).find("span").height()
        item.on('mouseenter', function() {
            $(shown).find("img").addClass("show")
            $(shown).find("img").css("margin-top", shown_p_size)
            $(anim_size).css("max-width", "1000px")
            $(anim_size).css("max-height", "1000px")
            $(shown).css("opacity", 1)
            $(shown).find("img").animate({
                marginTop: "-=" + shown_p_size + "px"
            }, 500)
            $(hidden).find("img").addClass("hide")
            $(hidden).find("img").animate({
                marginTop: "-=" + shown_p_size + "px"
            }, 500)
            $(hidden).addClass("hide")
            
        });
        item.on('mouseleave', function() {
            $(shown).find("img").removeClass("show")
            $(anim_size).css("max-width", "32px")
            $(anim_size).css("max-height", "32px")
            $(shown).css("opacity", 0)
            $(shown).find("img").animate({
                marginTop: "+=" + shown_p_size + "px"
            }, 500)
            $(hidden).find("img").removeClass("hide")
            $(shown).find("img").css("margin-top", 0)
            $(hidden).find("img").animate({
                marginTop: "+=" + shown_p_size + "px"
            }, 500)
            $(hidden).removeClass("hide")
        });
        item.trigger("mouseenter")
        let timeout;

        switch (key) {
            case "main":
                timeout = setTimeout(() => {
                    item.trigger('mouseleave');
                }, 5000);
                break;
            case "secondary":
                timeout = setTimeout(() => {
                    item.trigger('mouseleave');
                }, 4200);
                break;
        }

        return timeout;
    };
    $(document).ready(function repeat() {
        focusBlock("main", 12);
        setTimeout(() => {
            focusBlock("secondary", 6);
            focusBlock("secondary", 11);
            focusBlock("secondary", 13);
            focusBlock("secondary", 17);
        }, 1000);
        setTimeout(() => {
            focusBlock("main", 6);
            setTimeout(() => {
                focusBlock("secondary", 3);
                focusBlock("secondary", 7);
            }, 1000);
        }, 6000);
        setTimeout(() => {
            focusBlock("main", 11);
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
            setTimeout(() => {
                focusBlock("secondary", 1);
                focusBlock("secondary", 2);
            }, 1000);
        }, 18000);
        setTimeout(() => {
            focusBlock("main", 10);
            setTimeout(() => {
                focusBlock("secondary", 0);
                focusBlock("secondary", 4);
            }, 1000);
        }, 24000);
        setTimeout(() => {
            focusBlock("main", 15);
            setTimeout(() => {
                focusBlock("secondary", 9);
                focusBlock("secondary", 20);
            }, 1000);
        }, 30000);
        setTimeout(() => {
            focusBlock("main", 21);
            setTimeout(() => {
                focusBlock("secondary", 25);
                focusBlock("secondary", 26);
            }, 1000);
        }, 36000);
        setTimeout(() => {
            focusBlock("main", 22);
            setTimeout(() => {
                focusBlock("secondary", 27);
                focusBlock("secondary", 28);
                focusBlock("secondary", 29);
            }, 1000);
        }, 42000);
        setTimeout(() => {
            focusBlock("main", 18);
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