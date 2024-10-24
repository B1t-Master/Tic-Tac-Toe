function createPlayer(name, token) {
  let score = 0;
  const incrementScore = () => score++;
  const getScore = () => score;

  return { name, token, incrementScore, getScore };
}

const gameLogic = (function () {
  let gameBoard = {};
  function createGameBoard() {
    gameBoard = {
      row1: [1, null, null],
      row2: [null, null, null],
      row3: [null, null, null],
    };
    console.log(gameBoard);
    // return { gameBoard };
  }

  function isGameEnded(gameBoard) {
    for (let key in gameBoard) {
      for (let cell of key) {
        if ((cell = !null)) {
          return true;
        } else return false;
      }
    }
  }

  function checkWinner(token) {
    if (gameBoard.row1[0] && gameBoard.row1[1] && gameBoard.row1[2] === token) {
      return true;
    } else if (
      gameBoard.row2[0] &&
      gameBoard.row2[1] &&
      gameBoard.row2[2] === token
    ) {
      return true;
    } else if (
      gameBoard.row3[0] &&
      gameBoard.row3[1] &&
      gameBoard.row3[2] === token
    ) {
      return true;
    } else if (
      gameBoard.row1[0] &&
      gameBoard.row2[0] &&
      gameBoard.row3[0] === token
    ) {
      return true;
    } else if (
      gameBoard.row1[1] &&
      gameBoard.row2[1] &&
      gameBoard.row3[1] === token
    ) {
      return true;
    } else if (
      gameBoard.row1[2] &&
      gameBoard.row2[2] &&
      gameBoard.row3[2] === token
    ) {
      return true;
    } else if (
      gameBoard.row1[0] &&
      gameBoard.row2[1] &&
      gameBoard.row3[2] === token
    ) {
      return true;
    } else if (
      gameBoard.row1[2] &&
      gameBoard.row2[1] &&
      gameBoard.row3[0] === token
    ) {
      return true;
    } else return false;
  }
  return { createGameBoard, isGameEnded, checkWinner, gameBoard };
})();

function playGame() {
  let player1 = createPlayer("player1", "O");
  let player2 = createPlayer("player2", "X");
  gameLogic.createGameBoard();
  //   while (gameLogic.isGameEnded) {}
}

playGame();
