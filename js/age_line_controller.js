const LINE_CIRCLES_DATA =  {

}


$(document).ready(function(){
  $(".line-circle").on(
    {
      mouseenter: function () {
        let age = $(this).attr('age')
        $(`.age-${age}-line`).css("display", "block")
        $(`.age-${age}-text`).css("display", "block")
      },
      mouseleave: function () {
        let age = $(this).attr('age')
        $(`.age-${age}-line`).css("display", "none")
        $(`.age-${age}-text`).css("display", "none")
      }
    }
  )
})