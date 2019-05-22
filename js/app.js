$(document).ready(function () {
  //Menu Responsivo tipo sandwich

  $('.mobileMenu').on('click', function(){
    $('.navegacion').slideToggle(); //Combinacion de los efectos slideDown y slideUP para esconder y mostrar el menu
  });

  $(window).resize(function(){ //Codigo agregado para eliminar el bug de la barra al momento de estar en responsivo y expandirlo a pantallla de escritorio.
    $(document).width()>=768?$(".navegacion").show():$(".navegacion").hide()
});

});
