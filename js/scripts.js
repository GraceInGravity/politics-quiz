// function popularity(fage,ffollow){
//   return ffollow/fage;
// }



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var genderInput= $("select#gender").val();
    var immigrationInput = $("select#immigration").val();
    var climateChangeInput = $("select#climateChange").val();
    var foreignPolicyInput = $("select#foreignPolicy").val();
    var newsSourceInput = $("select#newsSource").val();


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


    // $(".pop").text(pop);

  });



});
