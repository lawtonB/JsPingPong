// Interface Logic
var number = prompt("please enter a number between 1 and 100");
//business logic
if (number > 0 && number < 100) {

  for (i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 == 0){
      document.write("ping-pong");
    } else if (i % 3 === 0){
      document.write ("ping")
    } else if (i % 5 === 0){
      document.write("pong")
    }
      else {
      document.write(i)
    }
      document.write("<br>")

      // document.write("the number you entered, " + number + " is not a number between 1 and 100");
    }
}




// function myFunction() {
//     var x = document.getElementById('pingpong');
//     var number = x.elements[0].value;
//     var list = "";
//     var i;
//     for (i = 1; i <= num; i++){
//       list += "<li>";
//       if ((i % 3 === 0) && (i % 5 === 0)) {
//         list += "<p>ping-pong</p>";
//       }
//       else if (i % 5 === 0) {
//         list += "<p>ping</p>";
//       }
//       else if (i % 5 === 0) {
//         list += "<p>pong</p>";
//       else {
//         list += i;
//       }
//       list += "<li>";
//       }
//     }
// }


// $(document).ready(function() {
//   $("form#pingpong").submit(function(event) {
//
//
//     $("#result").text(finalresult);
//     event.preventDefault();
//   });
//
// });
