let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

updateScore();

function gamePlay(playerMove) {
    const compMove = pickCompMove();

    let Result = "";

    if (playerMove === "Rock") {
        if (compMove === "Rock") {
            Result = `It's a Tie`;
        } else if (compMove === "Paper") {
            Result = "You Lost!";
        } else if (compMove === `Scissors`) {
            Result = "You Won!";
        }
    } else if (playerMove === "Paper") {
        if (compMove === `Rock`) {
            Result = `You Won!`;
        } else if (compMove === "Paper") {
            Result = `It's a Tie`;
        } else if (compMove === "Scissors") {
            Result = `You Lost!`;
        }
    } else if (playerMove === "Scissors") {
        if (compMove === `Rock`) {
            Result = `You Lost!`;
        } else if (compMove === `Paper`) {
            Result = `You Won!`;
        } else if (compMove === `Scissors`) {
            Result = `It's a Tie`;
        }
    }

    if (Result === 'You Won!'){
        score.Wins += 1;
      } else if (Result === 'You Lost!'){
        score.Losses += 1;
      } else if (Result === `It's a Tie`){
        score.Ties += 1;
      } 

    document.querySelector('.result').innerHTML = `${Result}`

    document.querySelector('.js-move').innerHTML = `You chose ${playerMove}, and the Computer chose ${compMove}`

    updateScore();

    localStorage.setItem('score', JSON.stringify(score));
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`
}

function resetScore() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  localStorage.removeItem('score');
  updateScore();
}


function pickCompMove() {
    const randomNumber = Math.random();
    

    let compMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = `Rock`;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        compMove = `Paper`;
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        compMove = `Scissors`;
    }
    return compMove;
}





