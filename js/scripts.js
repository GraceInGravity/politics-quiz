function popularity(fage,ffollow){
  return ffollow/fage;
}



$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var nameInput = $("input#name").val();
    var ageInput = $("input#age").val();
    var genderInput= $("input#gender").val();
    var imigrationInput = $("input#imigration").val();
    var climateChangeInput = $("select#climateChange").val();
    var foreignPolicyInput = $("input#foreignPolicy").val();
    var newsSourceInput = $("input#newsSource").val();    
    var pAge = parseInt(ageInput);
    var pFollowers = parseInt(followersInput);


    $(".name").text(nameInput);
    $(".age").text(pAge);
    $(".ethnicity").text(ethnicityInput);
    $(".followers").text(pFollowers);
    $(".beard").text(beardInput);
    $(".single").text(singleInput);

    $("#story").show();
    event.preventDefault();

    var pop = popularity (pAge,pFollowers);


    $(".pop").text(pop);

  });



});
