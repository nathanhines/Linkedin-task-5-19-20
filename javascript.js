

$(document).ready(function(){ 
  
var $dialog = $("#dialog");
      // this initializes the dialog 
      $dialog.dialog({
      autoOpen : false, modal : true, height : 500
        });

      // the onclick handler
      $("#newReference").click(function() {
        $dialog.dialog("open");
        $(".validateTips").html("All form fields are required.")
        return false;
        });

    
      $("#reference-form").submit(function(){
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;

        if (firstname == "") {
          $(".validateTips").html("Error: No input")
          return false
        } else if (lastname == "") {
          $(".validateTips").html("Error: No input")
          return false
        } else {
          $('.list-group').append("<li class='list-group-item ppl-know-person'><img src='images/blank-profile-picture.png' /><p>"+firstname+" "+lastname+"</p></li>");

          $dialog.dialog("close");
          return false

        };

      });
  
  });
