$(function(){
  $('#change').click(function(){
    $('.theme').show();
  })
  $('.theme-list').on('click','li',function(){
    let index=$(this).index();
    switch (index){
      case 0:
        $('body').css('background-color','#c9d6ff');
        break;
      case 1:
        $('body').css('background-color',' #bdc3c7');
        break;
      case 2:
        $('body').css('background-color','#6dd5fa');
        break;
      case 3:
        $('body').css('background-color','#ffdde1');
          break;
    }
  })
  $(document).click(function (e) {
    var b = $('#change');
    if (!b.is(e.target) && b.has(e.target).length === 0) {
        $(".theme").hide();
    }
});

})