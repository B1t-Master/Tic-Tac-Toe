let gameBoard = {};
function createPlayer(name, token) {
  let score = 0;
  const incrementScore = () => score++;
  const getScore = () => score;
  const setMarker = () => {
    // console.log(gameBoard);
    let marker = prompt(`${name}enter a number from 1 to 9`, "");
    if (marker === "1" && gameBoard[0][0] === null) {
      return (gameBoard[0][0] = token);
    }
    if (marker === "2" && gameBoard[0][1] === null) {
      return (gameBoard[0][1] = token);
    }
    if (marker === "3" && gameBoard[0][2] === null) {
      return (gameBoard[0][2] = token);
    }
    if (marker === "4" && gameBoard[1][0] === null) {
      return (gameBoard[1][0] = token);
    }
    if (marker === "5" && gameBoard[1][1] === null) {
      return (gameBoard[1][1] = token);
    }
    if (marker === "6" && gameBoard[1][2] === null) {
      return (gameBoard[1][2] = token);
    }
    if (marker === "7" && gameBoard[2][0] === null) {
      return (gameBoard[2][0] = token);
    }
    if (marker === "8" && gameBoard[2][1] === null) {
      return (gameBoard[2][1] = token);
    }
    if (marker === "9" && gameBoard[2][2] === null) {
      return (gameBoard[2][2] = token);
    } else {
      console.log("invalid entry");
      return setMarker();
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
    return { gameBoard };
  }

  // function isGameEnded(gameBoard) {
  //   gameBoard ?? true;
  // }

  function checkWinner(token) {
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
  return { createGameBoard, checkWinner, gameBoard };
})();

function playGame() {
  let player1 = createPlayer("player1", "O");
  let player2 = createPlayer("player2", "X");
  gameLogic.createGameBoard();
  console.log([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  for (let i = 0; i <= 4; i++) {
    player1.setMarker();
    if (gameLogic.checkWinner(player1.token)) {
      alert("player 1 has won");
      return;
    }
    console.table(gameBoard);

    player2.setMarker();
    if (gameLogic.checkWinner(player2.token)) {
      alert("player 2 has won");
      return;
    }
    console.table(gameBoard);
  }
  alert("its a tie");
}

// playGame(); starts the game , commented out for testing purposes
