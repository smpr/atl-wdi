// ** BULLSEYE ** //

// STEP 1:  Add click handlers to update the score to be:
//          100 points - Bullseye
//           50 points - Middle Ring
//           10 points - Outer Ring
//            0 points - Miss  (done for you)

// STEP 2: Break down the updateScore method, write a paragraph or comment how the function works line by line

// STEP 3:  Highlight the element that was clicked on using the CSS `background-color: yellow`
// BONUS:  Implement setTimeout so the background is yellow for only two seconds

// EXPLORATION: Comment out event.stopPropagation in each function, and then click the inner ring. What happens?



window.onload = function() {
  var body = document.body;
  var ring1 = document.querySelector('.ring-1');
  var ring2 = document.querySelector('.ring-2');
  var ring3 = document.querySelector('.ring-3');
  var resetB = document.querySelector('reset')
  //this is where the js pulls the fields from the vars above then it uses bullsEyeGame(the parent var) then ."whatever"(which is the function inside the bulseye array)
  body.addEventListener('click', bullseyeGame.miss);
  ring1.addEventListener('click', bullseyeGame.outerRing)
  ring2.addEventListener('click', bullseyeGame.innerRing)
  ring3.addEventListener('click', bullseyeGame.bullsEye)
  //resetB.addEventListener('click', bullseyeGame.resetBu)
}
timeOut(){
  document.getElementsByClassName('ring-1')[0].style.backgroundColor="Yellow"
};
// array of functions
var bullseyeGame = {
  score: 0,

  updateScore: function(points) {
   //creates a var for the score on the html that will be changed as the game goes
    var scoreElement = document.querySelector('.score');
    this.score += points
//updates the score
    scoreElement.innerHTML = `${this.score} points`
  },

  miss: function(event) {
    event.stopPropagation();
    document.body.style.backgroundColor = "yellow";
    alert('YOU MISSED');
    bullseyeGame.updateScore(0);
    // [ALERT:] needs to be bullseyeGame because this in clickEvents refers to the html element that was clicked
  },

  outerRing: function(event) {
    event.stopPropagation();
    bullseyeGame.updateScore(10);
    setTimeout(timeOut, 3000);
    alert('10 points!');
  },
  innerRing: function(event) {
    event.stopPropagation();
    document.getElementsByClassName('ring-2')[0].style.backgroundColor="Yellow";
    
    alert('50 points!')
    bullseyeGame.updateScore(50);
  },
  bullsEye: function(event) {
    event.stopPropagation();
    document.getElementsByClassName('ring-3')[0].style.backgroundColor="Yellow";
    
    alert('Bulls Eye!')
    bullseyeGame.updateScore(100);
  }
  //resetBu: function(){
    //score = 0;
  //}
}
