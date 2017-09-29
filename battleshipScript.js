var rows = 10;
var cols = 10;
var squareSize = 50;

var gameBoardContainer = document.getElementById("gameboard2");
var gameBoardContainer2 = document.getElementById("gameboard");

// Player 1's grid of placed sips
var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

// Player 2's grid of placed ships
var gameBoard2 =[
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

var valid = false;
while (!valid) {
	var player1 = prompt("First Player: Please enter your name");
	if (player1 != "") {valid = true}
}
var playerTurn = player1;
valid = false;
while (!valid) {
	var player1ships = prompt("Please enter your ship placements");
	valid = checkInput(player1ships);
}

playerTurn = player2;

valid = false;
while (!valid) {
	var player2 = prompt("Second Player: Please enter your name");
	if (player2 != "") {valid = true}
}
valid = false;
while (!valid) {
	var player2ships = prompt("Please enter your ship placements");
	valid = checkInput(player2ships);
}

playerTurn = player1;

function checkInput(ships) { 
		//Regex to check input. It is basically this /[A][:]([A-J])([1-9]|(10))[-](\1([1-9]|(10))|[A-J]\2);?/ repeated 6 times with an OR for each possible sequence of ships i.e. [A][B][S] | [A][S][B] | [B][S][A] ...
		//it is not pretty but it elimnated the need to check for one A, B and S programatically
		var matchShip = ships.match(/((([A][:]([A-J])((10)|[1-9])[-](\4((10)|[1-9])|[A-J]\5);?\s?)([B][:]([A-J])((10)|[1-9])[-](\11((10)|[1-9])|[A-J]\12);?\s?)([S][:]([A-J])((10)|[1-9])[-](\18((10)|[1-9])|[A-J]\19);?\s?))|(([A][:]([A-J])((10)|[1-9])[-](\26((10)|[1-9])|[A-J]\27);?\s?)([S][:]([A-J])((10)|[1-9])[-](\33((10)|[1-9])|[A-J]\34);?\s?)([B][:]([A-J])((10)|[1-9])[-](\40((10)|[1-9])|[A-J]\41);?\s?))|(([B][:]([A-J])((10)|[1-9])[-](\48((10)|[1-9])|[A-J]\49);?\s?)([A][:]([A-J])((10)|[1-9])[-](\55((10)|[1-9])|[A-J]\56);?\s?)([S][:]([A-J])((10)|[1-9])[-](\62((10)|[1-9])|[A-J]\63);?\s?))|(([B][:]([A-J])((10)|[1-9])[-](\70((10)|[1-9])|[A-J]\71);?\s?)([S][:]([A-J])((10)|[1-9])[-](\77((10)|[1-9])|[A-J]\78);?\s?)([A][:]([A-J])((10)|[1-9])[-](\84((10)|[1-9])|[A-J]\85);?\s?))|(([S][:]([A-J])((10)|[1-9])[-](\92((10)|[1-9])|[A-J]\93);?\s?)([A][:]([A-J])((10)|[1-9])[-](\99((10)|[1-9])|[A-J]\100);?\s?)([B][:]([A-J])((10)|[1-9])[-](\106((10)|[1-9])|[A-J]\107);?\s?))|(([S][:]([A-J])((10)|[1-9])[-](\114((10)|[1-9])|[A-J]\115);?\s?)([B][:]([A-J])((10)|[1-9])[-](\121((10)|[1-9])|[A-J]\122);?\s?)([A][:]([A-J])((10)|[1-9])[-](\128((10)|[1-9])|[A-J]\129);?\s?)))/);
		if (matchShip === null) {
			matchShip = ships.match(/((([A][(]([A-J])((10)|[1-9])[-](\4((10)|[1-9])|[A-J]\5)[)];?\s?)([B][(]([A-J])((10)|[1-9])[-](\11((10)|[1-9])|[A-J]\12)[)];?\s?)([S][(]([A-J])((10)|[1-9])[-](\18((10)|[1-9])|[A-J]\19)[)];?\s?))|(([A][(]([A-J])((10)|[1-9])[-](\26((10)|[1-9])|[A-J]\27)[)];?\s?)([S][(]([A-J])((10)|[1-9])[-](\33((10)|[1-9])|[A-J]\34)[)];?\s?)([B][(]([A-J])((10)|[1-9])[-](\40((10)|[1-9])|[A-J]\41)[)];?\s?))|(([B][(]([A-J])((10)|[1-9])[-](\48((10)|[1-9])|[A-J]\49)[)];?\s?)([A][(]([A-J])((10)|[1-9])[-](\55((10)|[1-9])|[A-J]\56)[)];?\s?)([S][(]([A-J])((10)|[1-9])[-](\62((10)|[1-9])|[A-J]\63)[)];?\s?))|(([B][(]([A-J])((10)|[1-9])[-](\70((10)|[1-9])|[A-J]\71)[)];?\s?)([S][(]([A-J])((10)|[1-9])[-](\77((10)|[1-9])|[A-J]\78)[)];?\s?)([A][(]([A-J])((10)|[1-9])[-](\84((10)|[1-9])|[A-J]\85)[)];?\s?))|(([S][(]([A-J])((10)|[1-9])[-](\92((10)|[1-9])|[A-J]\93)[)];?\s?)([A][(]([A-J])((10)|[1-9])[-](\99((10)|[1-9])|[A-J]\100)[)];?\s?)([B][(]([A-J])((10)|[1-9])[-](\106((10)|[1-9])|[A-J]\107)[)];?\s?))|(([S][(]([A-J])((10)|[1-9])[-](\114((10)|[1-9])|[A-J]\115)[)];?\s?)([B][(]([A-J])((10)|[1-9])[-](\121((10)|[1-9])|[A-J]\122)[)];?\s?)([A][(]([A-J])((10)|[1-9])[-](\128((10)|[1-9])|[A-J]\129)[)];?\s?)))/);
			if (matchShip === null) {
				return false;
			}
		}
		var validShip = matchShip[0].split(";", 3);
		var offset;
		var typeOfShip;
		if (validShip.length != 3) {
			return false;
		}
		for (var i = 0; i < 3; i++) { 
			offset = 0;
			validShip[i] = validShip[i].trim();
			typeOfShip = validShip[i].charAt(0);
			if (validShip[i].charAt(3) == 1 && validShip[i].charAt(4) == 0) {
					offset = 1;
			}
			if (typeOfShip == "A") {
				//If letter is the same
				if ((validShip[i].charCodeAt(5+offset) - validShip[i].charCodeAt(2)) == 0) {
					if (validShip[i].charAt(6) == 1 && validShip[i].char(7) == 0) {
						if (10 - validShip[i].charAt(3) != 4) {
							return false;
						}
					}
					else if (validShip[i].charAt(6) - validShip[i].charAt(3) != 4) {
						return false;
					}
				} 
				//If number is the same
				else if (validShip[i].charAt(6) - validShip[i].charAt(3) == 0 || ((offset == 1) && (validShip[i].charAt(7) == 1) && (validShip[i].charAt(8) == 0))) {
					if(validShip[i].charCodeAt(5+offset) - validShip[i].charCodeAt(2) != 4) {
						return false;
					}						
				}
				else {
					return false;
				}
				if (playerTurn == player1) {
					placeShip(typeOfShip, validShip[i], gameBoard);
				}
				else {
					placeShip(typeOfShip, validShip[i], gameBoard2);
				}
			}
			else if (typeOfShip == "B") {
				//If letter is the same
				if ((validShip[i].charCodeAt(5+offset) - validShip[i].charCodeAt(2)) == 0) {
					if (validShip[i].charAt(6) == 1 && validShip[i].char(7) == 0) {
						if (10 - validShip[i].charAt(3) != 3) {
							return false;
						}
					}
					else if (validShip[i].charAt(6) - validShip[i].charAt(3) != 3) {
						return false;
					}
				} 
				//If number is the same
				else if (validShip[i].charAt(6) - validShip[i].charAt(3) == 0 || ((offset == 1) && (validShip[i].charAt(7) == 1) && (validShip[i].charAt(8) == 0))) {
					if(validShip[i].charCodeAt(5+offset) - validShip[i].charCodeAt(2) != 3) {
						return false;
					}						
				}
				else {
					return false;
				}
				if (playerTurn == player1) {
					placeShip(typeOfShip, validShip[i], gameBoard);
				}
				else {
					placeShip(typeOfShip, validShip[i], gameBoard2);
				}
			}
			else if (typeOfShip == "S") {
				//If letter is the same
				if ((validShip[i].charCodeAt(5+offset) - validShip[i].charCodeAt(2)) == 0) {
					if (validShip[i].charAt(6) == 1 && validShip[i].char(7) == 0) {
						if (10 - validShip[i].charAt(3) != 2) {
							return false;
						}
					}
					else if (validShip[i].charAt(6) - validShip[i].charAt(3) != 2) {
						return false;
					}
				} 
				//If number is the same
				else if (validShip[i].charAt(6) - validShip[i].charAt(3) == 0 || ((offset == 1) && (validShip[i].charAt(7) == 1) && (validShip[i].charAt(8) == 0))) {
					if(validShip[i].charCodeAt(5+offset) - validShip[i].charCodeAt(2) != 2) {
						return false;
					}						
				}
				else {
					return false;
				}
				if (playerTurn == player1) {
					placeShip(typeOfShip, validShip[i], gameBoard);
				}
				else {
					placeShip(typeOfShip, validShip[i], gameBoard2);
				}
			}
			else {
				return false;
			}
	}
	return true;
}

function placeShip(shipType, shipPlace, board) {
	var len;
	if (shipType == "A") {len = 5;}
	else if (shipType == "B") {len = 4;}
	else {len = 3;}

	var start = shipPlace.substring(2,4); 
	var end = shipPlace.substring(5,7);

	start = (start.charCodeAt(0) - 65) + "" + (start.charCodeAt(1) - 48);

	end = (end.charCodeAt(0) - 65) + "" + (end.charCodeAt(1) - 48);

	var open = true;
	for (var i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
		for (var j = start.charCodeAt(1); j <= end.charCodeAt(1); j++) {
			if (board[i-48][j-48] != 0) {
				open = false;
			}
		}
	}
	if (open) {
		for (var i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
			for (var j = start.charCodeAt(1); j <= end.charCodeAt(1); j++) {
				if (shipType == "A") {
					board[i-48][j-48] = 1;
				}
				else if (shipType == "B") {
					board[i-48][j-48] = 2;
				}
				else {
					board[i-48][j-48] = 3;
				}
			}
		}
	}
	else {
		return false;
	}
}

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
		storeScore(player1, score);
	}
	else if (aircraft2 + battleship2 + submarine2 == 12) {
		score = 24 - ((2 * aircraft1) + (2 * battleship1) + (2 * submarine1));
		alert(player2 + " has won the game with a score of " + score);
		storeScore(player2, score);
	}
}


function storeScore(name, score) {
	var highScores = ["Al",24,"Sally",24,"Tom",22,"Mike",22,"Dan",20,"John",20,"Andrew",20,"OJ",18,"Rebecca",16,"Oyster",14];
	var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
	highScores = storedHighScores;
	for (var i = 19; i >= 0; i=i-2) {
		if (highScores[i] < 24 || highScores[i] === undefined) {
			if (score > highScores[i] || highScores[i] === undefined) {
				if (i+1 <= 19) {
					highScores[i+2] = highScores[i];
					highScores[i+1] = highScores[i-1]; 
				}
				if (i == 1) {
					highScores[i] = score;
					highScores[i-1] = name;					
				}
			}
			else if (i != 19) {
				highScores[i+2] = score;
				highScores[i+1] = name;
				break;
			}
		}
		else if (score == 24 && i != 19) {
			highScores[i+2] = score;
			highScores[i+1] = name;		
			break;	
		}
	}
	localStorage.setItem("highScores", JSON.stringify(highScores));
	var hsString = "High Scores:\n";
	for (var j = 0; j < 10; j++) {
		hsString = hsString + (j+1) + ": " + highScores[j*2] + " " + highScores[(j*2)+1] + "\n";
	}
	alert(hsString);
}

function clearBoards() {
	for (var i = 0; i < 10; i++) {
		for(var j = 0; j < 10; j++) {
			document.getElementById("s"+i+j).innerHTML = "";
			document.getElementById("s"+i+j).style.background = 'lightblue';	
			document.getElementById("d"+i+j).innerHTML = "";
			document.getElementById("d"+i+j).style.background = 'lightblue';	
		}
	}
}

function nextTurn() {
	clearBoards();
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
