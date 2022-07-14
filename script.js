
//Game ON Logic
const gameBoard = function() {
}();

// Player Factory Function
// name -> string
// marker -> string
const Player = (name,marker) => {
    return {name, marker};
};
// Player Initialization
const Player1 = ("Dan","X");
const Player2 = ("Victor", "O");


let gameON = true;
function gamePlay() {
    PlayersTurn(Player1,Player2);
}
function PlayersTurn(Player1,Player2) {
    const playMark1 = Player1.marker;
    const playMark2 = Player2.marker;
    let turn = false;
    while (gameON) {
        if (turn == false ) {
            markerGrid(playMark1);
            turn = true;
        } else {
            markerGrid(playMark2);
            turn = false;
        }
    }
}
// markerGrid -> string
// Allows each square to receive currentPlayer 'marker'
// with no replace side-effect
function markerGrid(marker) {
    const gridRow = document.querySelectorAll(".gridRow");
    gridRow.forEach( (row) => {
        const gridCol = row.childNodes;
        gridCol.forEach((square) => addMark(square,marker));
    });
};
function addMark(childNode, marker) {
    if (childNode.textContent == '') {
        childNode.addEventListener('click', (e) => mark(e, marker));
    } else {
        childNode.removeEventListener('click', (e) => mark(e, marker));
    }
}
function mark(e, marker) {
    e.target.textContent = `${marker}`;  
}
// Returns Array of the Game for GameCheck
function returnGameBoardArray() {
    const boardArray = [];
    const _board = document.querySelectorAll('.board'); 
    _board.forEach((board) => {
        boardArray.splice(0,0,board.textContent);
    });
    return boardArray.reverse();
}
