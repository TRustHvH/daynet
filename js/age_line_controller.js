const LINE_CIRCLES_DATA =  {

}


$(document).ready(function(){
  $(".line-circle").on(
    {
      mouseenter: function () {
            let age = $(this).attr('age')
            $(`.age-${age}-line`).css("display", "block")
            $(setTimeout(function () { $(`.age-${age}-line`).css("opacity", "1") }, 1))
            $(`.age-${age}-text`).css("display", "block")
            $(setTimeout(function () { $(`.age-${age}-text`).css("opacity", "1") }, 1))
      },
      mouseleave: function () {
            let age = $(this).attr('age')
            $(`.age-${age}-line`).css("display", "none")
            $(setTimeout(function () { $(`.age-${age}-line`).css("opacity", "0")}, 1))
            $(`.age-${age}-text`).css("display", "none")
            $(setTimeout(function () { $(`.age-${age}-text`).css("opacity", "0") }, 1))
      }
    }
  )
})