function Player(name, marker) {
    return {name, marker};
}
// Initialization
const Player1 = Player("Player1", "X");
const Player2 = Player("Player2", "Y");
let move = 0;
let squares = document.querySelectorAll('.square');
let gameON = true;

function playerRotate(P1,P2) {
    if (move % 2 == 0) {
        currentMarker(P1.marker);
    } else {
        currentMarker(P2.marker);
    }
}
// marker -> string
// Sets each square with to receive marker specified.
function currentMarker(marker) {
    squares.forEach( (square) => {
        if (square.textContent == '')
        square.addEventListener('click', markListener);
    });
    function markListener(event) {
        mark(event, marker);
    }
    function mark(e,marker) {
        move++;
        e.target.textContent = `${marker}`;
        squares.forEach( (square) => {
            square.removeEventListener('click', markListener);
        });
        gameCheck(marker);
        if (gameON)
        playerRotate(Player1,Player2);
    }
}
// Game Check
// Returns Array of the Game for GameCheck
function returnGameBoardArray() {
    const boardArray = [];
    const _board = document.querySelectorAll('.square'); 
    _board.forEach((board) => {
        boardArray.splice(0,0,board.textContent);
    });
    return boardArray.reverse();
}

function gameCheck(marker) {
    const aBoard = returnGameBoardArray();
    const ArrayCheck = [marker,marker,marker];
    // Row/Horizontal  Win
    if ( (aBoard.slice(0,3).join() == ArrayCheck.join()) || 
         (aBoard.slice(3,6).join() == ArrayCheck.join()  || 
         (aBoard.slice(6,9).join() == ArrayCheck.join()))){
        alert(`${marker} Wins`);
        gameON = false;
    }
    // Column/Vertical Check Win
    if ( ([aBoard[0],aBoard[3],aBoard[6]].join() == ArrayCheck.join()) ||
         ([aBoard[1],aBoard[4],aBoard[7]].join() == ArrayCheck.join()) ||
         ([aBoard[2],aBoard[5],aBoard[8]].join() == ArrayCheck.join())){
        alert(`${marker} Wins`);
        gameON = false;
    }
    // Diagonal Check Win
    if ( ([aBoard[0],aBoard[4],aBoard[8]].join() == ArrayCheck.join()) ||
         ([aBoard[2],aBoard[4],aBoard[6]].join() == ArrayCheck.join()) ){
        alert(`${marker} Wins`);
        gameON = false;
    }
}
playerRotate(Player1,Player2);
