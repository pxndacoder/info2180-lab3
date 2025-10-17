document.addEventListener("DOMContentLoaded", () => {
  //Find the game board container using its id
  const board = document.getElementById("board");

  //Gets all divs inside the board (these represent the 9 squares)
  const squares = board.querySelectorAll("div");

  // Adding the square class to each of them
  squares.forEach((square) => {
    square.classList.add("square");
  });
});
