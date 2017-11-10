$(document).ready(function() {

  function hideAll() {
      $('#theCity').hide();
      $('#lovingSomeone').hide();
      $('#sex').hide();
      $('#chocolate').hide();
    }
     hideAll();

$('.album').click(function() {

   hideAll();
   switch ($(this).attr("id")) {
     case "firstAlbum":
       $('#theCity').show();
       break;
     case "secondAlbum":
       $('#lovingSomeone').show();
       break;
     case "sexEP":
       $('#sex').show();
       break;
     case "carsEP":
       $('#chocolate').show();
       break;
   }
   $("audio").each(function() {
     this.pause();
     this.currentTime = 0;
});
  
});


});
