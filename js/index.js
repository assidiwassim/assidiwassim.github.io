        $(document).ready(function(){
      $('.parallax').parallax();
            $('.carousel').carousel();
            
            
            
  $('.button-collapse').sideNav({
      menuWidth: 250, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
      onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
      onClose: function(el) { /* Do Stuff  */ }, // A function to be called when sideNav is closed
    }
  );
            
            
    });
        

