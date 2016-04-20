//business logic
var count = function(countTo) {
  var countUp = [];
   for (var i = 1; i <= countTo; i += 1){
     if (i % 15 == 0) {
      countUp.push(" pingpong ");
   } else if (i % 5 == 0) {
     countUp.push(" pong ");
   } else if (i % 3 == 0) {
      countUp.push(" ping ");
   } else{
      countUp.push(i);
   }
  
 }
     return countUp;

}

//user side
$(document).ready(function() {
  $("form#questions").submit(function(event){

//input
  var countTo = ($("#countTo").val());
  var answer = count(countTo);

   $(".result").text(answer);
 event.preventDefault();
  });
});

