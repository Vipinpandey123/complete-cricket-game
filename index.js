let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);


function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : {
    win: 0,
    Lost: 0,
    Draw: 0,
  };

  score.displayScore = function () {
    return ` Win:${score.win} ,lost:${score.Lost},Draw:${score.Draw}`
  };

  showResult();

}



function generateComputerChoice() {

  let randomNumber = Math.random() * 3;
  if (randomNumber > 0 && randomNumber <= 1) {
    return 'Bat'
  }
  else if (randomNumber > 1 && randomNumber <= 2) {
    return 'Ball'

  }
  else {
    return 'Stump'

  }

}

function getresult(userMove, computerMove) {
  if (userMove === 'Bat') {
    if (computerMove === 'Bat') {
      score.Draw++;
      return 'Match is draw'
    }
    else if (computerMove === 'Ball') {
      score.win++;
      return 'User is Winner';
    }
    else if (computerMove === 'Stump') {
      score.Lost++;
      return 'Computer is Winner';
    }

  }
  else if (userMove === 'Ball') {
    if (computerMove === 'Bat') {
      score.Lost++;
      return 'Computer is Winner'
    }
    else if (computerMove === 'Ball') {
      score.Draw++;
      return 'Match is draw';
    }
    else if (computerMove === 'Stump') {
      score.win++;
      return 'User is Winner';
    }

  }
  else {
    if (computerMove === 'Bat') {
      score.win++;
      return 'User is Winner'
    }
    else if (computerMove === 'Ball') {
      score.Lost++;
      return 'Computer is Winner';
    }
    else if (computerMove === 'Stump') {
      score.Draw++;
      return 'Match is draw';
    }


  }
}

function showResult(userMove, computerMove, result) {
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('#user-move').innerText =
    userMove ? `user choice is : ${userMove}` : '';

  document.querySelector('#computer-move').innerText =
    computerMove ? `computer choice is : ${computerMove}` : '';

  document.querySelector('#result').innerText = result || '';

  document.querySelector('#score').innerText = score.displayScore();
}