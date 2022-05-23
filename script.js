
//Game ON Logic
const gameBoard = function() {
}();

// Player Factory Function
const Player = (name,marker) => {
    return {name, marker};
};
// DOM Logic in each Grid
function currentPlayer(marker) {
    const gridRow = document.querySelectorAll(".gridRow");
    gridRow.forEach((row) => {
        const childNodes = row.childNodes;
        childNodes.forEach((child) => {
            child.addEventListener('click', (e) => {
                addMark(e,marker);
            });
        });
    });
}
currentPlayer('X');
function addMark(e,marker) {
    e.target.textContent = `${marker}`;
}

// Returns Array of the Game
function returnGameBoardArray() {
    const boardArray = [];
    const _board = document.querySelectorAll('.board'); 
    _board.forEach((board) => {
        boardArray.splice(0,0,board.textContent)
    });
    return boardArray;
}
