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



// // Interface Logic
// var prompt = prompt("please enter a number between 1 and 100");
// //business logic
// if (prompt > 0 && prompt < 100) {
//
//   for (i = 1; i <= prompt; i++) {
//     if (i % 3 === 0 && i % 5 == 0){
//       document.write("ping-pong");
//     } else if (i % 3 === 0){
//       document.write ("ping")
//     } else if (i % 5 === 0){
//       document.write("pong")
//     }
//       else {
//       document.write(i)
//     }
//       document.write("<br>")
//     }
// }
