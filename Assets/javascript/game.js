 



//3. Guess what letter I'm thinking of

//4. Wins: (# of times the user has guessed the letter correctly)

//5. Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

//6. Guesses Left: (# of guesses left. This will update)

//7. Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

//8. When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

//9. When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).

  // Creates an array that lists out all of the options letters the users will choose from.
  var computerChoices = ["a", "b", "d", "e", "f", "g", "e", "h", "i", "j", "k", "l", "m", "n", "o", "q", "w", "y", "z"];

  // Creating variables to hold the number of wins, losses, and guesses left .They start at 0.
  var wins = 0;
  var losses = 0;
  var guessesLeft = 6;
  var guessedLetter = [];

  // Create variables that hold references to the places in the HTML where we want to display things.
  var directionsText = document.getElementById("directions-text");
  var userChoiceText = document.getElementById("userchoice-text");
  var computerChoiceText = document.getElementById("computerchoice-text");
  var winsText = document.getElementById("wins-text");
  var lossesText = document.getElementById("losses-text");
  var guessesText = document.getElementById("guesses-text");
  var usrGuessesList = document.getElementById("usrGuessesList-text");
  
  // This function is run whenever the user presses a key.
  document.onkeyup = function(event) { 
  

    // Determines which key was pressed.
    var userGuess = event.key;
    guessedLetter.push(" " + userGuess);
    
    //console.log(userGuess);

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   

    // This logic determines the outcome of the game (win/loss), and increments the appropriate number. defines the wins options
      
      if (userGuess === computerGuess ) 
         {
        
          wins++;
          alert ("You Won!!!!")
          guessesLeft = 6;
          
        }
       
       else (userGuess !== computerGuess)
       {
        
        losses++;
        guessesLeft--;
       
      }
      if (guessesLeft == -1) {
          alert ("Game Over")
          location.reload();
      // reload the page when the game is over
          
      }

      // show the directions
      //directionsText.textContent = "Guess what letter I'm thinking of";
   
      // Display the user and computer guesses, and wins/losses
      userChoiceText = "You chose: " + userGuess;
      computerChoiceText.textContent = "The computer chose: " + computerGuess;
      winsText.textContent = "wins: " + wins ;
      lossesText.textContent = "losses: " + losses ;  
    // need to add all the user choices 
      usrGuessesList.textContent = "  your guessed was : " + guessedLetter;

      guessesText.textContent = "you have " + " " + guessesLeft + " " + "guesses  Left ";
   
    
  }
   
  
 