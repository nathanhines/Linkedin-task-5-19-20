

$(document).ready(function(firstname, lastname){
  
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
    
      $("#reference-form").submit(function(){
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;

        console.log(firstname, lastname);
      });
  
  });



