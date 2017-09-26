var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard2");
var gameBoardContainer2 = document.getElementById("gameboard");

var player1 = prompt("First Player: Please enter your name");
var player1ships = prompt("Please enter your ship placements");
var player2 = prompt("Second Player: Please enter your name");
var player2ships = prompt("Please enter your ship placements");

var playerTurn = player1;
window.confirm(playerTurn + " press OK to begin your turn");

for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		var square = document.createElement("div");
		var square2 = document.createElement("div");
		gameBoardContainer.appendChild(square);
		gameBoardContainer2.appendChild(square2);

		square.id = 's' + j + i;	
		square2.id = 'd' + j + i;		
		
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;	

		square.style.top = (topPosition + 50) + 'px';
		square.style.left = leftPosition + 'px';		
		square2.style.top = topPosition + 'px';
		square2.style.left = leftPosition + 'px';				
	}
}

var aircraft1 = 0;
var battleship1 = 0;
var submarine1 = 0;
var aircraft2 = 0;
var battleship2 = 0;
var submarine2 = 0;

// Player 1's grid of placed sips
var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0],
				[0,0,0,0,0,2,0,0,0,0],
				[0,0,0,0,0,2,0,0,3,0],
				[0,0,0,0,0,2,0,0,3,0],
				[0,0,0,0,0,0,0,0,3,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,1,1,1,1,1,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

// Player 2's grid of placed ships
var gameBoard2 =[
				[0,0,0,2,2,2,2,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,3,0,0,0],
				[0,0,0,0,0,0,3,0,0,0],
				[1,0,0,0,0,0,3,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

gameBoardContainer2.addEventListener("click", fireTorpedo, false);
buildDisplayBoard(gameBoard);

function buildActiveBoard(board) {
	var sq = "d";
	for (var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length; j++) {
			//reset every square first
			document.getElementById(sq+i+j).innerHTML = "";
			document.getElementById(sq+i+j).style.background = 'lightblue';	

			if (board[i][j] == 0 || board[i][j] == 1 || board[i][j] == 2 || board[i][j] == 3) {
				document.getElementById(sq+i+j).style.background = 'lightblue';
				document.getElementById(sq+i+j).innerHTML = "";			
			}
			else if (board[i][j] == 4) {
				document.getElementById(sq+i+j).style.background = 'white';
			}
			else if (board[i][j] == 10 || board[i][j] == 20 || board[i][j] == 30) {
				document.getElementById(sq+i+j).style.background = 'red';
				document.getElementById(sq+i+j).innerHTML = "";						
			}
		}
	}
}

function buildDisplayBoard(board) {
	var sq = "s";
	for (var i = 0; i < board.length; i++) {
		for(var j = 0; j < board[i].length; j++) {
			//reset every square first
			document.getElementById(sq+i+j).innerHTML = "";
			document.getElementById(sq+i+j).style.background = 'lightblue';	

			if (board[i][j] == 1 || board[i][j] == 10) {
				document.getElementById(sq+i+j).innerHTML = "A";
			}
			else if (board[i][j] == 2 || board[i][j] == 20) {
				document.getElementById(sq+i+j).innerHTML = "B";
			}	
			else if (board[i][j] == 3 || board[i][j] == 30) {
				document.getElementById(sq+i+j).innerHTML = "S";
			}	
			if (board[i][j] == 0 || board[i][j] == 1 || board[i][j] == 2 || board[i][j] == 3) {
				document.getElementById(sq+i+j).style.background = 'lightblue';				
			}
			else if (board[i][j] == 10 || board[i][j] == 20 || board[i][j] == 30) {
				document.getElementById(sq+i+j).style.background = 'red';				
			}
			else if (board[i][j] == 4) {
				document.getElementById(sq+i+j).style.background = 'white';				
			}
		}
	}
}

function fireTorpedo(e) {
	if (e.target !== e.currentTarget) {
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
		var board;
		if (playerTurn == player1) {
			board = gameBoard2;
		}
		else {
			board = gameBoard;
		}
				
		if (board[row][col] == 0) {
			e.target.style.background = 'white';
			board[row][col] = 4;
			window.confirm("You missed!");	
		} else if (board[row][col] == 1 || board[row][col] == 2 || board[row][col] == 3) {
			e.target.style.background = 'red';
			alert("You got a hit!");
			if (board[row][col] == 1) {
				board[row][col] = 10;
				if (playerTurn == player1) {
					if(++aircraft1 == 5) {
						alert("You have sunk " + player2 + "'s aircraft carrier!");
					}
				}
				else {
					if(++aircraft2 == 5) {
						alert("You have sunk " + player1 + "'s aircraft carrier!");
					}
				}
			}
			else if (board[row][col] == 2) {
				board[row][col] = 20;
				if (playerTurn == player1) {
					if(++battleship1 == 4) {
						alert("You have sunk " + player2 + "'s battleship!");
					}
				}
				else {
					if(++battleship2 == 4) {
						alert("You have sunk " + player1 + "'s battleship!");
					}
				}
			}
			else if (board[row][col] == 3) {
				board[row][col] = 30;
				if (playerTurn == player1) {
					if(++submarine1 == 3) {
						alert("You have sunk " + player2 + "'s submarine!");
					}
				}
				else {
					if(++submarine2 == 3) {
						alert("You have sunk " + player1 + "'s submarine!");
					}
				}
			}			
		} else if (board[row][col] >= 4) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}		
    }
	winCheck();
	nextTurn();
    e.stopPropagation();
}

function winCheck() {
	var score;
	if (aircraft1 + battleship1 + submarine1 == 12) {
		score = 24 - ((2 * aircraft2) + (2 * battleship2) + (2 * submarine2));
		alert(player1 + " has won the game with a score of " + score);
	}
	else if (aircraft2 + battleship2 + submarine2 == 12) {
		score = 24 - ((2 * aircraft1) + (2 * battleship1) + (2 * submarine1));
		alert(player2 + " has won the game with a score of " + score);
	}
}

function nextTurn() {
	//clearBoards();
	if (playerTurn == player1) {
		window.confirm(player2 + " press OK to begin your turn");
		buildDisplayBoard(gameBoard2);
		buildActiveBoard(gameBoard);
		playerTurn = player2;		
	}
	else {
		window.confirm(player1 + " press OK to begin your turn");
		buildDisplayBoard(gameBoard);
		buildActiveBoard(gameBoard2);
		playerTurn = player1;	
	}
}
