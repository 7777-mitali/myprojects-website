let score = JSON.parse(localStorage.getItem('score'));
if (score === null){ // or write if(!score)
  score= {
    wins:0,
    looses:0,
    ties:0
  }
}

updateScore()

/* let score = JSON.parse(localStorage.getItem('score')) || {
  wins:0, 
  looses:0,   
  ties:0};  [if the left side is truthy that means we'll have a score it will use the left side code,, but if the the ledt side is falsy or in this case its null then we'll use the right side code as a default value]  */



function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  if (playerMove === 'scissors'){
    if ( computerMove === 'rock'){
      result = 'You loose.';
    } else if ( computerMove === 'paper'){
      result = 'You win.';
    } else if ( computerMove === 'scissors'){
      result = 'Tie.';
    } 

  } else if (playerMove === 'paper') {
    if ( computerMove === 'rock'){
      result = 'You win.';
    } else if ( computerMove === 'paper'){
        result = 'Tie';
    } else if ( computerMove === 'scissors'){
        result = 'You loose.';
    }
    
  } else if ( playerMove === 'rock'){
    if (computerMove === 'rock') { 
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You loose.';
    } else if ( computerMove === 'scissors'){
      result = 'You win.';
    }
  }

    if(result === 'You win.' ){
    score.wins += 1;
  } else if(result === 'You loose.'){
    score.looses += 1;
  } else if(result === 'Tie.'){
    score.ties += 1;
  }

localStorage.setItem('score',JSON.stringify(score));

updateScore();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = `you <img src="images/${playerMove}-emoji.png" class="move-icon"> 
<img src="images/${computerMove}-emoji.png" class="move-icon" computer>`



}
// creating vari outside {} so we can handle scope prob. and the variable can exist outside {}.
// let computerMove = '' .........(global variable)
function updateScore() {
  document.querySelector('.js-score').innerHTML =`wins: ${score.wins} looses: ${score.looses} ties: ${score.ties}`
}

function pickComputerMove() {
  const randomNumb = Math.random();

  let computerMove = ''; // scope variable 

  if (randomNumb >= 0 && randomNumb < 1/3) {
    computerMove = 'rock'
  } else if (randomNumb >= 1/3 && randomNumb < 2/3) {
    computerMove = 'paper'
  } else if (randomNumb >= 2/3 && randomNumb < 1) {
    computerMove = 'scissors'
  }
  return computerMove;
}
