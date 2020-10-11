// alert("from rags to riches");
// log paise fekege ek din is kal ke anadi par... yaad rakhna

// resources
var level = 0;
var colorList = ["red" , "blue" , "green" , "yellow"];
var gameList = [];
var usergivenlist = [];
var started = 0;

function checkAnswer(currentLevel){
   
     if(gameList[currentLevel] === usergivenlist[currentLevel]){
        console.log("finally");
        if (usergivenlist.length === gameList.length){

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              next();
            }, 1000);
    
        }
     }

     else{
         console.log("Wrong");
         started = 0;
         gameList = [];
         usergivenlist = [];

         var lf = "sounds/wrong" + ".mp3";
         var myaudio = new Audio(lf);
         myaudio.play();
         
         $("#level-title").text("Life is not always fair , Press any key to play again !"); 
     }
}

function randomNumber(){
    return Math.floor(Math.random() * 4);
}

$(document).keypress(() => {
    if(!started){
      level = 0;
      started = true;
      $("#level-title").text("Level" + " " + level); 
      setTimeout(function () {
        next();
      }, 500);
    }
});

// the pattern that user followed;

$(".btn").click (function (){
    var usergivencolor = $(this).attr("id");
    // console.log(usergivencolor);
    usergivenlist.push(usergivencolor);

    var lf = "sounds/" + usergivencolor + ".mp3";

    var myaudio = new Audio(lf);
    myaudio.play();
    animatePress(usergivencolor);

    checkAnswer(usergivenlist.length - 1); // last index 

});

// for generating the next button which needs to be played next

function next() {

    // selecting the next button which would be generated;
    level++;
    $("#level-title").text("Level" + " " + level); 

    var number = randomNumber();
    usergivenlist = [];
    console.log(number);
    var temp = colorList[number];
    gameList.push(temp);
    console.log(temp);
    // var colorid = temp;
    // $("#temp").addClass(".pressed");
    // $("." + temp).css({'background-color' : "yellow"});
    $("." + temp).fadeOut(100).fadeIn(100);
    
    var lf = "sounds/" + temp + ".mp3";

    var myaudio = new Audio(lf);
    myaudio.play();
};

function animatePress(usergivencolor) {
    // console.log(usergivencolor);
    $("#" + usergivencolor).addClass("pressed");  // dumb boiii you need to specify only class name not ".pressed";

    setTimeout (() => {
        $("#" + usergivencolor).removeClass("pressed");
    }, 100); // arg1 callback function and arg2 after this many mili second time perform the callback function;

}


