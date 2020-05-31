$(document).ready(function(){

    $(function() {
        // this initializes the dialog 
        $("#dialog").dialog({
          autoOpen : false, modal : true
        });
      
        // the onclick handler
        $("#newReference").click(function() {
          $("#dialog").dialog("open");
          return false;
        });
      });
  
  });



