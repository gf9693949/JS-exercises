/* The game logic
1. Create loop and get user guess
2. Check user guess
3. Check if ship has been sunk
4. Display stats to user*/

// DECLARE variables
var randomLoc = Math.floor(Math.random() * 5); 									// Create rounded down to full values number from range 0-4 (max is 4.99)
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

//LOOP: while the ship is not sunk

while (isSunk == false){										
	guess = prompt("Ready, aim, fire! (enter a number 0-6):"); 					//GET the user’s guess
	if (guess < 0 || guess > 6) {
		alert("Please enter a valid cell number!");
	} 	else {
			guesses = guesses + 1;												//ADD one to guesses
		if (guess == location1 || guess == location2 || guess == location3 ) {	//IF the user’s guess matches a location
			alert("HIT!");
			hits = hits + 1;													//ADD one to the number of hits
			if (hits == 3) {													//IF number of hits is 3
				isSunk = true;													//SET isSunk to true
				alert("You sank my battleship!");								//TELL user “You sank my battleship!”
			}
		} else {
			alert("MISS");	
		}
	}
}
var stats = "You took " + guesses + " guesses to sink the battleship, " 		//TELL user stats
+ "which means your shooting accuracy was " + (3/guesses);
alert(stats);