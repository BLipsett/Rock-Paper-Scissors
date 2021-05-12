let count = 0;
function playerChoice(selection) {
  let homeTeam = selection;

  let enemyTeam = getEnemy();
  let winner;

  if (homeTeam == enemyTeam) {
    winner = "Draw";
  } else if (homeTeam == "rock" && enemyTeam == "paper") {
    winner = "You lose";
    count--;
  } else if (homeTeam == "paper" && enemyTeam == "scissors") {
    winner = "You lose";
    count--;
  } else {
    winner = "You win";
    count++;
  }
  console.log(count);
  console.log(winner);
  drawResult(winner);
}

function getEnemy() {
  let enemyArr = ["rock", "paper", "scissors"];
  let enemyChoiceElem = document.getElementById("enemy-block");
  let enemy = Math.floor(Math.random() * enemyArr.length);

  enemyChoiceElem.innerHTML = `
  <div>
    <h1>Your enemy has chosen ${enemyArr[enemy]}
    </h1>
  </div>`;

  return enemyArr[enemy];
}

// function victory() {
//   //   console.log(`picked + ${selection}`);

//   let userValue = Math.floor(Math.random() * 3);
//   let enemyValue = Math.floor(Math.random() * 3);

//   if (userValue > enemyValue) {
//     // console.log("you win");
//   } else if (userValue == enemyValue) {
//     // console.log("draw");
//   } else {
//     // console.log("you lose");
//   }
// }

function playGame() {
  drawBoard();
}

function drawBoard() {
  let gameBoardElem = document.getElementById("game-board");

  gameBoardElem.innerHTML = `
    <button class="btn btn-success" onclick="playerChoice('rock')">
              ROCK
    </button>
    <button class="btn btn-primary" onclick="playerChoice('paper')">
              PAPER
    </button>
    <button
              class="btn btn-secondary"
              onclick="playerChoice('scissors')"
            >
              SCISSORS
    </button>
    `;

  let playButton = document.getElementById("play-button");
  playButton.classList.add("disp");
}

function drawResult(result) {
  let resultElem = document.getElementById("result-elem");

  resultElem.innerHTML = `
    <div class="row">
        <div class="col-lg-12">
            <h1>${result} </h1>
            <span>count: ${count}
        </div>
    </div>`;
}
