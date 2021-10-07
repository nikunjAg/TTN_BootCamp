// Grid constants
const GRID_ROW_COUNT = 3;
let state;
let emptyCells = GRID_ROW_COUNT * GRID_ROW_COUNT;

// DOM Elements
const scrollToGameBtn = document.querySelector("#landing-page .actions button");
const gameSection = document.getElementById("game");
const gameGrid = gameSection.querySelector(".game-grid");
const gameGridElements = Array.prototype.slice.call(gameGrid.children);
const resultEl = gameSection.querySelector(".result");
const turnEl = gameSection.querySelector(".turn");
const newGameBtn = gameSection.querySelector(".new-game");

let turn = "X";

// When game is over
function gameOver(result) {
	resultEl.textContent = `${
		result.toLowerCase() === "drawn"
			? "Game Drawn"
			: result.toUpperCase() + " Won"
	}`;
	// Game over
	gameSection.classList.add("game-over");
}

// Assign the turn on DOM
function assignTurn() {
	turnEl.textContent = `${turn} - Turn`;
}

// Change Turn Handler
function changeTurn() {
	if (turn === "X") turn = "O";
	else turn = "X";

	assignTurn();
}

function checkWinFor(row, col, target) {
	function checkAll(x, y, xInc, yInc) {
		let count = 0,
			newX = x,
			newY = y;

		while (
			newX >= 0 &&
			newX < GRID_ROW_COUNT &&
			newY >= 0 &&
			newY < GRID_ROW_COUNT
		) {
			count += state[newX][newY] === target ? 1 : 0;

			newX += xInc;
			newY += yInc;
		}
		return count;
	}

	if (checkAll(row, 0, 0, 1) === GRID_ROW_COUNT) {
		// checking row
		return true;
	} else if (checkAll(0, col, 1, 0) === GRID_ROW_COUNT) {
		// checking col
		return true;
	} else if (checkAll(row + col, 0, -1, 1) === GRID_ROW_COUNT) {
		// checking bottom to top diagonal
		return true;
	} else if (checkAll(row - col, 0, 1, 1) === GRID_ROW_COUNT) {
		// checking top to bottom diagonal
		return true;
	}

	return false;
}

function gridClickEventHandler(event) {
	const { target } = event;
	console.dir(target);
	if (target.classList.contains("grid-el") && target.textContent === "") {
		const elIndex = gameGridElements.indexOf(target);

		const row = parseInt(elIndex / GRID_ROW_COUNT),
			col = parseInt(elIndex % GRID_ROW_COUNT);
		updateAndDisplay(row, col, turn);
		--emptyCells;

		if (checkWinFor(row, col, turn)) {
			gameOver(turn);
		} else if (emptyCells === 0) {
			gameOver("drawn");
		} else {
			changeTurn();
		}
	}
}

function updateAndDisplay(row, col, value) {
	state[row][col] = value;
	const index = row * GRID_ROW_COUNT + col;

	gameGridElements[index].textContent = value;
}

function resetGame() {
	// Reset State

	state = new Array(GRID_ROW_COUNT);

	for (let row = 0; row < GRID_ROW_COUNT; row++) {
		state[row] = new Array(GRID_ROW_COUNT);
		for (let col = 0; col < GRID_ROW_COUNT; col++) {
			updateAndDisplay(row, col, "");
		}
	}
}

function initGame() {
	resetGame();

	// remove previous event listeners if any from grid
	gameGrid.removeEventListener("click", gridClickEventHandler);

	// Add new event listener to grid
	gameGrid.addEventListener("click", gridClickEventHandler);

	assignTurn();
}

newGameBtn.addEventListener("click", () => {
	gameSection.classList.remove("game-over");
	resetGame();
	emptyCells = GRID_ROW_COUNT * GRID_ROW_COUNT;
	turn = "X";
});

scrollToGameBtn.addEventListener("click", () => {
	gameSection.scrollIntoView({
		behavior: "smooth",
	});
});

initGame();
