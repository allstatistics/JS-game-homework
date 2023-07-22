function play() {
    let userChoice = document.querySelector('input[name="game"][type="radio"]:checked').value;
    let randomNum = Math.floor(Math.random() * 3 + 1);


    let rockImg = document.getElementById('img-rock-ai');
    let paperImg = document.getElementById('img-paper-ai');
    let scissorsImg = document.getElementById('img-scissors-ai');

    let rockImgUser = document.getElementById('img-rock-user');
    let paperImgUser = document.getElementById('img-paper-user');
    let scissorsImgUser = document.getElementById('img-scissors-user');


    if (randomNum === 1) {
        let rock = document.getElementById('disabled-rock');
        rock.checked = true;

        paperImg.classList.remove("displaying");
        scissorsImg.classList.remove("displaying");

        document.getElementById('result-ai').innerHTML = "Computer chose:"
        rockImg.classList.add("displaying");
    }
    else if (randomNum === 2) {
        let paper = document.getElementById('disabled-paper');
        paper.checked = true;

        rockImg.classList.remove("displaying");
        scissorsImg.classList.remove("displaying");

        document.getElementById('result-ai').innerHTML = "Computer chose:"
        paperImg.classList.add("displaying");
    }
    else {
        let scissors = document.getElementById('disabled-scissors');
        scissors.checked = true;

        paperImg.classList.remove("displaying");
        rockImg.classList.remove("displaying");

        document.getElementById('result-ai').innerHTML = "Computer chose:"
        scissorsImg.classList.add("displaying");
    }

    let computerChoice = document.querySelector('input[name="computer-choice"][type="radio"]:checked').value;

    if (computerChoice === userChoice) {
        document.getElementById('report').innerHTML = "Draw";
    }
    else if (computerChoice === 'rock') {
        if (userChoice === 'paper') {
            document.getElementById('report').innerHTML = "User Won";
        }
        else {
            if (userChoice === 'scissors') {
                document.getElementById('report').innerHTML = "Computer Won";
            }
        }
    }
    else if (computerChoice === 'paper') {
        if (userChoice === 'scissors') {
            document.getElementById('report').innerHTML = "User Won";
        }
        else {
            if (userChoice === 'rock') {
                document.getElementById('report').innerHTML = "Computer Won";
            }
        }
    }
    else if (computerChoice === 'scissors') {
        if (userChoice === 'rock') {
            document.getElementById('report').innerHTML = "User Won";
        }
        else {
            if (userChoice === 'paper') {
                document.getElementById('report').innerHTML = "Computer Won";
            }
        }
    }

    if (userChoice === 'rock') {
        paperImgUser.classList.remove("displaying");
        scissorsImgUser.classList.remove("displaying");

        document.getElementById('result-user').innerHTML = "You chose:"
        rockImgUser.classList.add("displaying");
    }
    else if (userChoice === 'paper') {
        rockImgUser.classList.remove("displaying");
        scissorsImgUser.classList.remove("displaying");

        document.getElementById('result-user').innerHTML = "You chose:"
        paperImgUser.classList.add("displaying");
    }
    else {
        paperImgUser.classList.remove("displaying");
        rockImgUser.classList.remove("displaying");

        document.getElementById('result-user').innerHTML = "You chose:"
        scissorsImgUser.classList.add("displaying");
    }
}
let randomNumber = Math.floor(Math.random() * 100 + 1);

let attempts = 5;
function guessNumber() {
    let guessedNumber = +document.getElementById('guessing').value;

    if (guessedNumber >= 1 && guessedNumber <= 100 && attempts > 0) {
        if (guessedNumber < randomNumber) {
            let firstNumberChanger = document.getElementsByClassName('min-number')
            for (let i = 0; i < firstNumberChanger.length; i++) {
                firstNumberChanger[i].innerHTML = guessedNumber
            }
            attempts--;
            document.getElementsByClassName('attempt')[0].innerHTML = attempts;
        }
        else if (guessedNumber > randomNumber) {
            let secondNumberChanger = document.getElementsByClassName('max-number')
            for (let i = 0; i < secondNumberChanger.length; i++) {
                secondNumberChanger[i].innerHTML = guessedNumber;
            }
            attempts--;
            document.getElementsByClassName('attempt')[0].innerHTML = attempts;
        }
        else {
            let found = document.getElementById('guessing')
            found.disabled = true;
            document.getElementById('find-number-report').innerHTML = 'You guessed right!';
            document.querySelector('h4').style.display = 'none';
            document.getElementsByClassName('btn-outline-primary')[0].disabled = true
            let againBtn = document.getElementsByClassName('not-displaying')
            againBtn[0].style = 'display: block;';
        }

    }
    else if ((guessedNumber < 0 || guessedNumber > 100) && attempts > 0) {
        alert('Please enter a number that is greater than 0 or less than 100');
    }
    else if (attempts === 0){
        let found = document.getElementById('guessing')
        found.disabled = true;
        document.getElementById('find-number-report').style = 'color: red'
        document.getElementById('find-number-report').innerHTML = 'You does not have any attempts to guess';
        document.querySelector('h4').style.display = 'none';
        document.getElementsByClassName('btn-outline-primary')[0].disabled = true
        let againBtn = document.getElementsByClassName('not-displaying')
        againBtn[0].style = 'display: block;';
    }
}

