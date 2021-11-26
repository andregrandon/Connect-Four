
$('input').eq(0).keypress(function(event){
  if(event.which===13){$("h3").toggleClass('turnBlue');
}
})

$("h1").on("mouseenter",function(){
  $(this).toggleClass('turnBlue');
})

$('button').eq(0).on('click',function(){
  $('body').slideUp(300)
})
