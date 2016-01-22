//business logic
function myFunction() {
    var x = document.getElementById('pingpong');
    var number = x.elements[0].value;
    var list = "";
    var i;
    for (i = 1; i <= num; i++){
      list += "<li>";
      if ((i % 3 === 0) && (i % 5 === 0)) {
        list += "<p>ping-pong</p>";
      }
      else if (i % 5 === 0) {
        list += "<p>ping</p>";
      }
      else if (i % 5 === 0) {
        list += "<p>pong</p>";
      else {
        list += i;
      }
      list += "<li>";
      }
    }
}





// Interface Logic
$(document).ready(function() {
  $("form#pingpong").submit(function(event) {


    $("#result").text(finalresult);
    event.preventDefault();
  });

});
