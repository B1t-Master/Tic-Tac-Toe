function getElements(marker) {
  let cell = document.querySelector(`[data-index="${marker}"]`);
  return cell;
}

function updateDOM(cell, token) {
  let img = document.createElement("img");
  img.src = token;
  return cell.append(img);
}
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
      return (turn = !turn);
    }
  };

  return { name, token, incrementScore, getScore, setMarker };
}

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

  // let displayDom = {
  //   getElements: function () {
  //     return (gridElements = document.querySelectorAll("[data-index]"));
  //   },
  // };

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
  return { createGameBoard, checkWinner, getElements, updateDOM };
})();

gameBoard = gameLogic.createGameBoard();
let player1 = createPlayer("player1", "assets/o.png");
let player2 = createPlayer("player2", "assets/x.png");
let turn = true;
let prompt;

let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  // prompt = cell.dataset.index;
  cell.addEventListener("click", () => {
    playGame((prompt = cell.dataset.index));
    turn = !turn;
  });
});

function playGame(prompt) {
  // console.log([
  //   [1, 2, 3],
  //   [4, 5, 6],
  //   [7, 8, 9],
  // ]);

  if (turn === true) {
    player1.setMarker(gameBoard, prompt);
    if (gameLogic.checkWinner(player1.token, gameBoard)) {
      alert("player 1 has won");

      // return;
    }
    // turn = false;
  } else {
    player2.setMarker(gameBoard, prompt);
    if (gameLogic.checkWinner(player2.token, gameBoard)) {
      alert("player 2 has won");
      // return;
    }
    // turn = true;
  }

  console.table(gameBoard);

  // alert("its a tie");
}
