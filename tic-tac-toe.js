document.addEventListener("DOMContentLoaded", () => {
  //Find the game board container using its id
  const board = document.getElementById("board");

  //Gets all divs inside the board (these represent the 9 squares)
  const squares = board.querySelectorAll("div");

  // Adding the square class to each of them
  squares.forEach((square) => {
    square.classList.add("square");
  });

  //Keeping Track of the current player
  let currentPlayer = "X";

  //Function to handle a square being clicked
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      //Only allow marking if the square is empty
      if (square.textContent === "") {
        //Mark the square with the current player's symbol
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        //Switch to the other player
        currentPlayer = currentPlayer === "X" ? "O" : "X";
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
