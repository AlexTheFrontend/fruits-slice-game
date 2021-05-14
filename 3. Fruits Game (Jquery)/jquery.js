var playing = false;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'mango', 'grape', 'watermelon', 'orange', 'pear']
var step;
var action; //used for setInterval

$(function(){
//click start/reset button
$('#startreset').click(function(){
    //we are playing
    if(playing == true){
       //reload page
        location.reload();
       }else{
           //we are not playing
           playing = true; //game initiated
           //set score to 0
           score = 0;
           $('#scorevalue').html(score);
           //show lives left
           $('#trialsLeft').show();
           trialsLeft = 3;
        addHearths();

           //hide game over box
           $('#gameOver').hide();
           //change button text to reset game
           $('#startreset').html('Reset Game');
           //start sending fruits
           startAction();
       }
});

    //slice a fruit
$('#fruit1').hover(function(){ 
    score++;
$('#scorevalue').html(score); //update score // document.getElementById("slicesound").play();
$('#slicesound')[0].play(); //play sound 
//stop fruit
clearInterval(action);
//hide friut
$('#fruit1').hide('explode', 500); //slice fruit
//send new fruit
setTimeout(startAction, 500);
});

//Functions

function addHearths(){
        $('#trialsLeft').empty();
      for(i=0; i < trialsLeft; i++){
          $('#trialsLeft').append('<img src="images/heart.png" class="life">')
               }
}

//start sending fruits

function startAction(){
    //generate a fruit
    $('#fruit1').show();
    chooseFruit(); //choose a random friut
    $('#fruit1').css({'left' : Math.round(550*Math.random()), 'top' : -50});
    //random position


//generate a random friut

function chooseFruit(){
    $('#fruit1').attr('src' , 'images/' + fruits[Math.round(6*Math.random())] + '.png');
    $('#fruit1').css({'left' : Math.round(550*Math.random()), 'top' : -50});
}
    //random position
    
    //generate a random step
    step = 1 + Math.round(5*Math.random()); //step between 1 and 6
    //Move fruit down by 10ms
    action = setInterval(function(){
        //move fruit down by 1 step every 10ms
        $('#fruit1').css('top', $('#fruit1').position().top + step);
        //check if fruit is too low
        if($('#fruit1').position().top > $('#fruitsContainer').height()){
            //check if we have any trials left
            if(trialsLeft > 1 ){
                $('#fruit1').show();
                chooseFruit(); //choose a random friut
                $('#fruit1').css({'left' : Math.round(550*Math.random()), 'top' : -50});
    //random position
                    //generate a random step
    step = 1+ Math.round(5*Math.random()); //step between 1 and 6
                trialsLeft --;
                //populate trialsLeft box
                addHearths();
            }else{//game over
                playing = false; //we are not playing anymore
                $('#startreset').html('Start Game'); //change button to Start Game
                $('#gameOver').show();
                $('#gameOver').html('<p>Game Over!</p><p>You score is '+ score +'</p>');
                $('#trialsLeft').hide();
                stopAction();
            }
        }
        // ms for the interval (speed of fruits)
        }, 15);

}

    
        //stop dropping fruits
        function stopAction(){
            clearInterval(action);
            $('#fruit1').hide();
        }

});
// GAME LOGIC
//click start/reset button
    //are we playing?
        //reload page
    //no
        //show trials left
        //change button text to "reset game"
        //1. create random fruit
        //difine a random step
        //2. move fruit down one step every 30 sec
        // is fruit too low?
            //no -> repeat #2
            //yes -> any trials left?
                //yes: repeat #1
                //no: show Game over, button text "Start game"

//slice fruit
    //play sound
    //explode fruit
