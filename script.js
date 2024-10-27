//helper functions
function getElements(marker) {
  let cell = document.querySelector(`[data-index="${marker}"]`);
  return cell;
}

function updateDOM(cell, token) {
  let img = document.createElement("img");
  img.src = token;
  img.classList.add("token");
  return cell.append(img);
}

//Factory function for the player object
function createPlayer(name, token) {
  let score = 0;
  const incrementScore = () => score++;
  const getScore = () => score;
  const setMarker = (gameBoard, prompt) => {
    // console.log(gameBoard);
    let marker = prompt;
    if (marker === "1" && gameBoard[0][0] === null) {
      gameBoard[0][0] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "2" && gameBoard[0][1] === null) {
      gameBoard[0][1] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "3" && gameBoard[0][2] === null) {
      gameBoard[0][2] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "4" && gameBoard[1][0] === null) {
      gameBoard[1][0] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "5" && gameBoard[1][1] === null) {
      gameBoard[1][1] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "6" && gameBoard[1][2] === null) {
      gameBoard[1][2] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "7" && gameBoard[2][0] === null) {
      gameBoard[2][0] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "8" && gameBoard[2][1] === null) {
      gameBoard[2][1] = token;
      return updateDOM(getElements(marker), token);
    }
    if (marker === "9" && gameBoard[2][2] === null) {
      gameBoard[2][2] = token;
      return updateDOM(getElements(marker), token);
    } else {
      console.log("invalid entry");
      return (domLogic.turn = !domLogic.turn);
    }
  };

  return { name, token, incrementScore, getScore, setMarker };
}

//IIFE module for the game logic
const gameLogic = (function () {
  function createGameBoard() {
    gameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    console.table(gameBoard);
    return gameBoard;
  }

  function checkGameStatus(gameBoard) {
    let count = 0;
    for (subArray of gameBoard) {
      for (cell of subArray) {
        if (cell != null) {
          count++;
        }
      }
    }
    while (count <= 8) {
      return true;
    }
  }

  function checkWinner(token, gameBoard) {
    if (
      gameBoard[0][0] === token &&
      gameBoard[0][1] === token &&
      gameBoard[0][2] === token
    ) {
      return true;
    } else if (
      gameBoard[1][0] === token &&
      gameBoard[1][1] === token &&
      gameBoard[1][2] === token
    ) {
      return true;
    } else if (
      gameBoard[2][0] === token &&
      gameBoard[2][1] === token &&
      gameBoard[2][2] === token
    ) {
      return true;
    } else if (
      gameBoard[0][0] === token &&
      gameBoard[1][0] === token &&
      gameBoard[2][0] === token
    ) {
      return true;
    } else if (
      gameBoard[0][1] === token &&
      gameBoard[1][1] === token &&
      gameBoard[2][1] === token
    ) {
      return true;
    } else if (
      gameBoard[0][2] === token &&
      gameBoard[1][2] === token &&
      gameBoard[2][2] === token
    ) {
      return true;
    } else if (
      gameBoard[0][0] === token &&
      gameBoard[1][1] === token &&
      gameBoard[2][2] === token
    ) {
      return true;
    } else if (
      gameBoard[0][2] === token &&
      gameBoard[1][1] === token &&
      gameBoard[2][0] === token
    ) {
      return true;
    } else return false;
  }
  return {
    createGameBoard,
    checkWinner,
    checkGameStatus,
  };
})();

//IIFE module for the DOM logic
const domLogic = (function () {
  let turn = true;
  let prompt;

  let dialog = document.querySelector(".start-game");
  let startGameButton = document.querySelector(".start");
  let restartGameButton = document.querySelector(".restart");
  let tempRestart = document.querySelectorAll(".big-button");
  let endScreen = document.querySelector(".game-over");
  let text = document.querySelector(".text-content");
  endScreen.appendChild(text);

  const results = function (player) {
    text.textContent = `${player.name} is the winner!`;
    endScreen.showModal();
  };

  const tie = function () {
    text.textContent = `Its a tie!`;
    endScreen.showModal();
  };

  restartGameButton.addEventListener("click", () => {
    window.location.reload();
  });

  restartGameButton.addEventListener("click", () => {
    gameBoard = gameLogic.createGameBoard();
    let cells = document.querySelectorAll(".cell");
    let icon;
    cells.forEach((items) => {
      icon = document.querySelector(".token");
      items.removeChild(icon);
    });
    endScreen.close();
  });

  window.addEventListener("load", () => {
    dialog.showModal();
  });

  startGameButton.addEventListener("click", () => {
    dialog.close();
  });

  let cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      playGame((prompt = cell.dataset.index));
    });
  });

  return { turn, prompt, endScreen, results, tie };
})();

// let count = 0;
//Function to called when the an instance of game is occuring
function playGame(prompt) {
  if (gameLogic.checkGameStatus(gameBoard)) {
    if (domLogic.turn === true) {
      player1.setMarker(gameBoard, prompt);
      domLogic.turn = !domLogic.turn;
      if (gameLogic.checkWinner(player1.token, gameBoard)) {
        domLogic.results(player1);
      }
    } else {
      player2.setMarker(gameBoard, prompt);
      domLogic.turn = !domLogic.turn;
      if (gameLogic.checkWinner(player2.token, gameBoard)) {
        domLogic.results(player1);
      }
    }
    console.table(gameBoard);
  } else domLogic.tie();
}

gameBoard = gameLogic.createGameBoard();
let player1 = createPlayer("player1", "assets/o.png");
let player2 = createPlayer("player2", "assets/x.png");
