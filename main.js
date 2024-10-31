const secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretnumber);


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // if no number is entered
    if (!guess) {
        document.querySelector('.message').textContent = "That's not a number!";
        document.querySelector('body').style.backgroundColor = 'red';

        // if number is out of range     
    } else if (guess > 20) {
        document.querySelector('.message').textContent = 'Not a valid number!';
        document.querySelector('body').style.backgroundColor = '#F6BE00';

        // if number is guessed correct
    } else if (guess === secretnumber) {
        document.querySelector('.message').textContent = 'YOU GUESSED RIGHT!';
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // tracks highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // if number is guessed incorrectly
    } else if (guess !== secretnumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretnumber ? 'Too High...' : 'Too Low..';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lose 🚫';
            document.querySelector('.score').textContent = 0;
        }
        document.querySelector('body').style.backgroundColor = 'red';
    }

    // resets the game once "again" button is clicked
    document.querySelector('.again').addEventListener('click', function () {
        document.querySelector('.score').textContent = 20;
        const secretnumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start Guessing...'
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        console.log(secretnumber);

    })
})
