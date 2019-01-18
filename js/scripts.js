// function popularity(fage,ffollow){
//   return ffollow/fage;
// }
// var points;
// var toggle;
// var factor;
// function pointfunc(ftoggle,ffactor){
//     return (((-1)**ftoggle)*ffactor)
// }


$(document).ready(function() {
  $("#formOne").submit(function(event) {

    event.preventDefault();

    var grandTotal = 0;
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input#age").val());
    var genderInput= parseInt($("select#gender").val());
    var immigrationInput = parseInt($("select#immigration").val());
    var climateChangeInput = parseInt($("select#climateChange").val());
    var foreignPolicyInput = parseInt($("select#foreignPolicy").val());
    var newsSourceInput = parseInt($("select#newsSource").val());

// console.log(genderInput)
    // var pAge = parseInt(ageInput);
    // var pFollowers = parseInt(followersInput);

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".gender").text(genderInput);
    $(".immigration").text(immigrationInput);
    $(".climateChange").text(climateChangeInput);
    $(".foreignPolicy").text(foreignPolicyInput);
    $(".newsSource").text(newsSourceInput);


    grandTotal = (ageInput * .1) + genderInput + immigrationInput + climateChangeInput + foreignPolicyInput + newsSourceInput;




// If gender === "Gandalf" && immigration === "Keep the ORCS OUT!" &&

    if (grandTotal < -5){
      $("#story1").show()
    } else if (grandTotal < 15) {
      $("#story2").show()
    } else {
      $("#story3").show()};







    // var pop = popularity (pAge,pFollowers);
// points = points + pointfunc(toggle,factor);

    // $(".pop").text(pop);

  });





});
