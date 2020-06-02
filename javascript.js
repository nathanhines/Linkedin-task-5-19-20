$(document).ready(function(){
  
  var firstname = $("#firstname");
  var lastname = $("#lastname");


    $(function openModal() {  

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



