function show(shown, hidden, shown_p_size, anim_size) {
  if ($(shown).hasClass('animation-up')) return;
  $(shown).addClass('animation-up');
  $(shown).find('img').addClass('show');
  $(shown).find('img').css('margin-top', shown_p_size);
  $(anim_size).css('max-width', '1000px');
  $(anim_size).css('max-height', '1000px');
  $(shown).css('opacity', 1);
  $(shown)
    .find('img')
    .finish()
    .animate(
      {
        marginTop: '-=' + shown_p_size + 'px',
      },
      500,
    );
  $(hidden).find('img').addClass('hide');
  $(hidden)
    .find('img')
    .finish()
    .animate(
      {
        marginTop: '-=' + shown_p_size + 'px',
      },
      500,
    );
  $(hidden).addClass('hide');
}
function hide(shown, hidden, shown_p_size, anim_size) {
  if (!$(shown).hasClass('animation-up')) return;
  $(shown).find('img').removeClass('show');
  $(anim_size).css('max-width', '32px');
  $(anim_size).css('max-height', '32px');
  $(shown).css('opacity', 0);
  $(shown)
    .find('img')
    .finish()
    .animate(
      {
        marginTop: '+=' + shown_p_size + 'px',
      },
      500,
    );
  $(hidden).find('img').removeClass('hide');
  $(shown).find('img').css('margin-top', 0);
  $(hidden)
    .find('img')
    .finish()
    .animate(
      {
        marginTop: '+=' + shown_p_size + 'px',
      },
      500,
    );
  $(hidden).removeClass('hide');
  $(shown).removeClass('animation-up');
}
$(document).ready(function () {
  let anims = $('.animation');
  anims.each(function (idx, el) {
    let $animation_block = $(el);
    let hidden = $animation_block.find('.animation-hidden');
    let shown = $animation_block.find('.animation-shown');
    let anim_size = $animation_block.find('.animation-size-controller');
    let shown_p_size = $(shown).find('span').height();
    $animation_block.on('mouseenter', function () {
      if ($animation_block.hasClass('auto-shown')) return;
      show(shown, hidden, shown_p_size, anim_size);
    });
    $animation_block.on('mouseleave', function () {
      if ($animation_block.hasClass('auto-shown')) return;
      hide(shown, hidden, shown_p_size, anim_size);
    });
    hidden.css('height', shown.height());
  });

  const focusBlock = (key, index, move) => {
    let $item = $(anims.eq(index));
    let hidden = $item.find('.animation-hidden');
    let shown = $item.find('.animation-shown');
    let anim_size = $item.find('.animation-size-controller');
    let shown_p_size = $(shown).find('span').height();
    $item.addClass('auto-shown');
    if (move === 'add') {
      show(shown, hidden, shown_p_size, anim_size);
    } else if (move === 'remove') {
      switch (key) {
        case 'main':
          hide(shown, hidden, shown_p_size, anim_size);
          $item.removeClass('auto-shown');
          break;
        case 'secondary':
          setTimeout(() => {
            hide(shown, hidden, shown_p_size, anim_size);
            $item.removeClass('auto-shown');
          }, 800);
          break;
      }
    }
  };

  const svgs = (index, move) => {
    let itemsvg = $('.line' + index + '-1').find('path');
    if (move === 'add') {
      itemsvg.css('display', 'block');
      itemsvg.attr('class', 'svg-line-add' + index);
    } else if (move === 'remove') {
      setTimeout(() => {
        itemsvg.attr('class', 'svg-line-remove' + index);
        setTimeout(() => {
          itemsvg.css('display', 'none');
        }, 2000);
      }, 4000);
    }
  };
  $(document).ready(function repeat() {
    $(document).scroll(function () {
      let scrollTop = $(this).scrollTop();
      if (scrollTop >= 1100 && scrollTop <= 1150) {
        focusBlock('main', 12, 'add');
        svgs(0, 'add');
        svgs(2, 'add');
        svgs(3, 'add');
        svgs(4, 'add');
        setTimeout(() => {
          focusBlock('secondary', 6, 'add');
          focusBlock('secondary', 11, 'add');
          focusBlock('secondary', 13, 'add');
          focusBlock('secondary', 17, 'add');
        }, 1000);
      } else if (scrollTop < 900 || scrollTop > 1650) {
        focusBlock('main', 12, 'remove');
        svgs(0, 'remove');
        svgs(2, 'remove');
        svgs(3, 'remove');
        svgs(4, 'remove');
        setTimeout(() => {
          focusBlock('secondary', 6, 'remove');
          focusBlock('secondary', 11, 'remove');
          focusBlock('secondary', 13, 'remove');
          focusBlock('secondary', 17, 'remove');
        }, 1000);
      }
      if (scrollTop >= 2100 && scrollTop <= 2300) {
        focusBlock('main', 11);
        svgs(6);
        svgs(11);
        svgs(12);
        svgs(13);
        svgs(18);
        svgs(19);
        svgs(20);
        setTimeout(() => {
          focusBlock('secondary', 5);
          focusBlock('secondary', 10);
          focusBlock('secondary', 15);
          focusBlock('secondary', 16);
          focusBlock('secondary', 18);
          focusBlock('secondary', 21);
          focusBlock('secondary', 22);
        }, 1000);
      }
      if (scrollTop >= 3100 && scrollTop <= 3150) {
        focusBlock('main', 11);
        svgs(12);
        setTimeout(() => {
          focusBlock('secondary', 16);
        }, 1000);
      }
      /*setTimeout(() => {
            focusBlock("main", 6);
            svgs(1)
            svgs(5)
            setTimeout(() => {
                focusBlock("secondary", 3);
                focusBlock("secondary", 7);
            }, 1000);
        }, 6000);
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
        }, 54000)*/
    });
  });
});
