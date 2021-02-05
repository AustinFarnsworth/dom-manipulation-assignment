'use strict';
// practice code 
// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let SecretNumber = Math.trunc(Math.random()*20) +1;

let score = 20; 
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = 
    message;
}

document.querySelector('.check').addEventListener 
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    // When no input
    if (!guess) {
        // document.querySelector('.message').textContent = 
        // "No Number!";
        displayMessage("No Number!");



 // When Player wins
    } else if (guess === SecretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!';

        document.querySelector('body').style.backgroundColor = '#4b7a47';
        document.querySelector('.number').textContent = SecretNumber; 
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore; 
        
            // when guess is not correct 
        }


        // When guess is too high
        }
         else if (guess > SecretNumber) {
                if (score > 1 ) {
                    displayMessage('Too high!');
                    // document.querySelector('.message').textContent = 'Too high!';
                    score--;
                    document.querySelector('.score').textContent = score;
                } else {
                    document.querySelector('.message').textContent = 'Sorry you lost the game!'; 
                }
        
        
        // When guess is too low
    } else if (guess < SecretNumber) {
        if (score > 1 ) {
            displayMessage('Too low!');
            // document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Sorry you lost the game!'; 
        }
    }

});

document.querySelector('.again').addEventListener
('click', function() {
    score = 20; 
    SecretNumber = Math.trunc(Math.random()*20) +1;
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})
