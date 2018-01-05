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
          console.log(a);
                           }, 
      onClose: function(el) { 
          a=0 ;
          console.log(a);}, 
    }
  );
            
            

var myElement = document.getElementById('home');
         

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// listen to events...
mc.on(" panright ", function(ev) {
   if (a==0){
     $('.button-collapse').sideNav('show');
   }
});  
            

            
});
        
function toast(){
    Materialize.toast('cette fonctionnalité n\'est pas disponible maintenant.', 4000);
}




