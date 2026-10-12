// Store the player who takes the next turn.
var activePlayer = "X";

// Store the squares that have been selected.
var selectedSquares = [];

// Check if the game has ended.
var gameOver = false;

// Stop moves while the computer is thinking.
var computerThinking = false;

// Store all winning combinations and their line positions.
var winningLines = [
    { squares: ["0", "1", "2"], x1: 20, y1: 52, x2: 290, y2: 52 },
    { squares: ["3", "4", "5"], x1: 20, y1: 155, x2: 290, y2: 155 },
    { squares: ["6", "7", "8"], x1: 20, y1: 258, x2: 290, y2: 258 },
    { squares: ["0", "3", "6"], x1: 52, y1: 20, x2: 52, y2: 290 },
    { squares: ["1", "4", "7"], x1: 155, y1: 20, x2: 155, y2: 290 },
    { squares: ["2", "5", "8"], x1: 258, y1: 20, x2: 258, y2: 290 },
    { squares: ["0", "4", "8"], x1: 25, y1: 25, x2: 285, y2: 285 },
    { squares: ["6", "4", "2"], x1: 25, y1: 285, x2: 285, y2: 25 }
];

// Place X or O in the selected square.
function placeXOrO(squareNumber) {
    squareNumber = String(squareNumber);

    // Stop moves if the game has ended or the computer is thinking.
    if (gameOver || computerThinking) {
        return;
    }

    // Check if the square is already filled.
    var squareIsUsed = selectedSquares.some(function (move) {
        return move.charAt(0) === squareNumber;
    });

    if (squareIsUsed) {
        return;
    }

    // Find the selected square.
    var square = document.getElementById(squareNumber);

    // Display the correct image for the current player.
    if (activePlayer === "X") {
        square.style.backgroundImage = 'url("images/x.png")';
    } else {
        square.style.backgroundImage = 'url("images/o.png")';
    }

    // Save the square number and the player who used it.
    selectedSquares.push(squareNumber + activePlayer);

    // Play the sound for placing a mark.
    audio("place");

    // Check whether the player has won or the game is tied.
    if (checkWinConditions()) {
        return;
    }

    // Change turns after a successful move.
    if (activePlayer === "X") {
        activePlayer = "O";
        computerThinking = true;

        document.getElementById("message").textContent =
            "Computer O is thinking...";

        // Disable clicks while the computer chooses a square.
        disableClick();

        // Give the computer a short delay before moving.
        setTimeout(function () {
            computersTurn();
        }, 700);

    } else {
        activePlayer = "X";
        document.getElementById("message").textContent =
            "Player X, your turn!";
    }
}

// Let the computer choose a random empty square.
function computersTurn() {
    // Do not move if the game has already ended.
    if (gameOver) {
        computerThinking = false;
        return;
    }

    var emptySquares = [];

    // Find every square that has not been used.
    for (var i = 0; i < 9; i++) {
        var squareNumber = String(i);

        var squareIsUsed = selectedSquares.some(function (move) {
            return move.charAt(0) === squareNumber;
        });

        if (!squareIsUsed) {
            emptySquares.push(squareNumber);
        }
    }

    // Choose a random empty square for O.
    if (emptySquares.length > 0) {
        var randomNumber = Math.floor(Math.random() * emptySquares.length);

        // Allow the computer to place its mark.
        computerThinking = false;

        placeXOrO(emptySquares[randomNumber]);
    }
}

// Check whether X or O has won, or whether the game is tied.
function checkWinConditions() {
    // Check each possible winning combination.
    for (var i = 0; i < winningLines.length; i++) {
        var line = winningLines[i];
        var squares = line.squares;

        // Check whether Player X has won.
        if (arrayIncludes(
            squares[0] + "X",
            squares[1] + "X",
            squares[2] + "X"
        )) {
            gameOver = true;

            document.getElementById("message").textContent = "You win!";

            drawWinLine(line.x1, line.y1, line.x2, line.y2);
            audio("win");

            return true;
        }

        // Check whether Computer O has won.
        if (arrayIncludes(
            squares[0] + "O",
            squares[1] + "O",
            squares[2] + "O"
        )) {
            gameOver = true;

            document.getElementById("message").textContent =
                "Computer O wins!";

            drawWinLine(line.x1, line.y1, line.x2, line.y2);
            audio("win");

            return true;
        }
    }

    // A tie happens when all nine squares are filled.
    if (selectedSquares.length === 9) {
        gameOver = true;

        document.getElementById("message").textContent = "It's a tie!";

        audio("tie");

        // Start a new game after showing the tie message.
        setTimeout(function () {
            resetGame();
        }, 1500);

        return true;
    }

    // No winner or tie has been found.
    return false;
}

// Check whether three moves are in the selected squares.
function arrayIncludes(squareA, squareB, squareC) {
    return selectedSquares.includes(squareA) &&
           selectedSquares.includes(squareB) &&
           selectedSquares.includes(squareC);
}

// Disable clicks while the computer is choosing its move.
function disableClick() {
    var squares = document.getElementsByClassName("square");

    // Temporarily stop mouse clicks on all squares.
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.pointerEvents = "none";
    }

    // Allow clicks again after the computer's delay.
    setTimeout(function () {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.pointerEvents = "auto";
        }
    }, 700);
}

// Play a sound using the original sound files.
function audio(soundName) {
    var soundFile = "";

    // Choose the sound file for the game event.
    if (soundName === "place") {
        soundFile = "media/place.mp3";
    } else if (soundName === "tie") {
        soundFile = "media/tie.mp3";
    } else if (soundName === "win") {
        soundFile = "media/winGame.mp3";
    }

    // Play the selected sound.
    if (soundFile !== "") {
        var sound = new Audio(soundFile);

        sound.play().catch(function () {
            // The game can continue if sound is unavailable.
        });
    }
}

// Draw a line across the winning combination.
function drawWinLine(x1, y1, x2, y2) {
    var canvas = document.getElementById("win-lines");
    var context = canvas.getContext("2d");
    var progress = 0;

    // Draw the line a little longer each time.
    function drawLine() {
        if (!gameOver) {
            return;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.moveTo(x1, y1);

        context.lineTo(
            x1 + (x2 - x1) * progress,
            y1 + (y2 - y1) * progress
        );

        context.lineWidth = 6;
        context.strokeStyle = "green";
        context.stroke();

        progress += 0.08;

        // Continue drawing until the line is complete.
        if (progress < 1) {
            requestAnimationFrame(drawLine);
        }
    }

    drawLine();

    // Reset the board after showing the winning line.
    setTimeout(function () {
        resetGame();
    }, 1800);
}

// Clear the board and start a new game.
function resetGame() {
    // Clear the images and enable every square.
    for (var i = 0; i < 9; i++) {
        var square = document.getElementById(String(i));

        square.style.backgroundImage = "";
        square.style.pointerEvents = "auto";
    }

    // Clear the winning line from the canvas.
    var canvas = document.getElementById("win-lines");
    var context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Reset the game variables.
    selectedSquares = [];
    activePlayer = "X";
    gameOver = false;
    computerThinking = false;

    // Display the starting message.
    document.getElementById("message").textContent =
        "Player X, your turn!";
}
 
