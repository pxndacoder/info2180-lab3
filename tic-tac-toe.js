document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const status = document.getElementById("status");
  const newGameButton = document.querySelector(".btn"); // "New Game" button

  let currentPlayer = "X";
  let gameActive = true;

  // Save the default status message for resets
  const defaultStatus = status.textContent;

  // All possible winning combinations (by index)
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Add "square" class to each div
  squares.forEach((square) => square.classList.add("square"));

  // Function to check for a winner
  function checkWinner() {
    for (const [a, b, c] of winningCombos) {
      if (
        squares[a].textContent &&
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent
      ) {
        gameActive = false;

        const winner = squares[a].textContent;
        status.textContent = `Congratulations! ${winner} is the Winner!`;
        status.classList.add("you-won");
        return true;
      }
    }
    return false;
  }

  // Function to reset the game
  function resetGame() {
    squares.forEach((square) => {
      square.textContent = "";
      square.classList.remove("X", "O", "hover");
    });

    currentPlayer = "X";
    gameActive = true;
    status.textContent = defaultStatus;
    status.classList.remove("you-won");
  }

  // Handle clicks on the squares
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (gameActive && square.textContent === "") {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        if (!checkWinner()) {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });

    // Hover effect
    square.addEventListener("mouseover", () => square.classList.add("hover"));
    square.addEventListener("mouseout", () => square.classList.remove("hover"));
  });

  // New Game button event
  newGameButton.addEventListener("click", resetGame);
});
