// function popularity(fage,ffollow){
//   return ffollow/fage;
// }
// var points;
// var toggle;
// var factor;
// function pointfunc(ftoggle,ffactor){
//     return (((-1)**ftoggle)*ffactor)
// }
var grandTotal

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = parseInt($("input#age").val());
    var genderInput= parseInt($("select#gender").val());
    var immigrationInput = parseInt($("select#immigration").val());
    var climateChangeInput = parseInt($("select#climateChange").val());
    var foreignPolicyInput = parseInt($("select#foreignPolicy").val());
    var newsSourceInput = parseInt($("select#newsSource").val());

// console.log(genderInput)
    var pAge = parseInt(ageInput);
    // var pFollowers = parseInt(followersInput);


    $(".name").text(nameInput);
    $(".age").text(pAge);
    $(".gender").text(genderInput);
    $(".immigration").text(immigrationInput);
    $(".climateChange").text(climateChangeInput);
    $(".foreignPolicy").text(foreignPolicyInput);
    $(".newsSource").text(newsSourceInput);

    $("#story1").show();
    event.preventDefault();

    // var pop = popularity (pAge,pFollowers);
// points = points + pointfunc(toggle,factor);

    // $(".pop").text(pop);

  });

grandTotal = (ageInput * .2) + genderInput + immigrationInput + climateChangeInput + foreignPolicyInput + newsSourceInput;

});
