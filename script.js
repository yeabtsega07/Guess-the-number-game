'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaySelector = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);


    // When there is no input 
    if(!guess) {
        displaySelector('⛔ No number!');
    } //  When player wins 
    else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displaySelector('🎉 Correct Number!'); 

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    } 
    // when guess is wrong
     else if (guess !== secretNumber){
        if(score > 1) {

            displaySelector(guess > secretNumber ? '📈 Too high!' :  '📉 Too low!');
            score--
            document.querySelector('.score').textContent = score;
        }
        else{
            displaySelector('💥 You lost the game!');
            document.querySelector('.score').textContent = 20;
        }
     }
    
    
    
    
    // // when player is too high
    // else if (guess > secretNumber) {
    //     if(score > 0) {

    //         document.querySelector('.message').textContent = '📈 Too high!';
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 20;
    //     }

        
    // } // when player is too low
    // else if (guess < secretNumber) {
        
    //     if(score > 0) {

    //         document.querySelector('.message').textContent = '📉 Too low!';  
    //         score--
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥 You lost the game!';
    //         document.querySelector('.score').textContent = 20;
    //     }
       
    // }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20; 
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    displaySelector( 'Start guessing...'); 
    document.querySelector('.guess').value = '';
})
 