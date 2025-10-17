document.addEventListener("DOMContentLoaded", () => {
  //Find the game board container using its id
  const board = document.getElementById("board");

  //Gets all divs inside the board (these represent the 9 squares)
  const squares = board.querySelectorAll("div");

  const status = document.getElementById("status");

  //Keeping Track of the current player
  let currentPlayer = "X";
  let gameActive = true;

  // All possible winning combinations (indices of squares)
  const winningCombos = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];

  // Adding the square class to each of them
  squares.forEach((square) => {
    square.classList.add("square");
  });

  // Function to check for winner
  function checkWinner() {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
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

  //Function to handle a square being clicked
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      //Only allow marking if the square is empty
      if (gameActive && square.textContent === "") {
        //Mark the square with the current player's symbol
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        if (!checkWinner()) {
          // Alternate player only if no winner yet
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    });

    //Hover effect to highlight squares
    square.addEventListener("mouseover", () => {
      square.classList.add("hover");
    });

    square.addEventListener("mouseout", () => {
      square.classList.remove("hover");
    });
  });
});
