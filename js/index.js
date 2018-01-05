        $(document).ready(function(){
      $('.parallax').parallax();
            $('.carousel').carousel();
            
            
       var a=0;     

  $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) {    
          a=1; 
            }, 
      onClose: function(el) { 
          a=0 ;
      }, 
    }
  );
            
            



// listen to events...
$(document.body).hammer().on(" panright ", function(ev) {
     if ($(window).width() < 980) {
   if (a==0){
     $('.button-collapse').sideNav('show');
   }}
});  
            

// smooth scroll
   $('.scrollspy').scrollSpy({
       scrollOffset:50
   });        

            
});
   
// toast message
function toast(){
    Materialize.toast('cette fonctionnalité n\'est pas disponible maintenant.', 4000);
}





