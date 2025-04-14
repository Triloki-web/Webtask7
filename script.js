let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

// Winning Pattern Array
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
// Player 'X' plays first
let xTurn = true;
let count = 0;

// Display X/O on click
btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      // display x
      element.innerHTML = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      // display O
      element.innerHTML = "O";
      element.disabled = true;
    }
    // Increment count on each click
    count += 1;
    if (count === 9) {
      drawFunction();
      // It's a draw since there are a total of 9 boxed
    }
    // Check for win on every click
    winChecker();
  });
});

// Win Logic
const winChecker = () => {
  // Loop through all win patterns
  for (let i of winningPattern) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    // Check if elements are filled
    //if 3 empty elements are same and would give win as would
    if (element1 != "" && element2 != "" && element3 != "") {
      if (element1 == element2 && element2 == element3) {
        // If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};


// This function is executed when a player wins
const winFunction = (letter) => {
  disableButtoms();
  if (letter == "X") {
    msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    msgRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
};

// Disable all buttons
const disableButtoms = () => {
  btnRef.forEach((element) => (element.disabled = true));
  // enable popup
  popupRef.classList.remove("hide");
};

// New  Game
newgameBtn.addEventListener("click", () => {
  count = 0;
  enableButton();
});


// Enable all buttons (For New Game and Restart)
const enableButton = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  // disable popup
  popupRef.classList.add("hide");
};

// restart game
restartBtn.addEventListener("click", () => {
  count = 0;
  enableButton();
});


// Function for draw
const drawFunction = () => {
  disableButtoms();
  msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};


