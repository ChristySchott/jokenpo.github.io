const game = () => {
    let jScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation="";
            });
        });
       

        const computerOptions = ['pedra','papel','tesoura'];

        options.forEach((option)=>{
            option.addEventListener('click', function(){
                //cada vez que eu clicar no button o pc faz a escolha aleatória
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
               
               

                // update images
                setTimeout(() => {

                compareHands(this.textContent, computerChoice);

                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
                }, 1200);

                playerHand.style.animation = "shakePlayer 1.2s ease";
                computerHand.style.animation = "shakeComputer 1.2s ease";

            });
        });

        
    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = jScore;
        computerScore.textContent = cScore;
    }
    
    const compareHands = (playerChoice,computerChoice) =>{
        const winner = document.querySelector('.winner');

        if (playerChoice === computerChoice){
            winner.textContent = "Empate!";
            return;
        }
        if (playerChoice === 'pedra'){
            if(computerChoice === 'tesoura'){
                winner.textContent = 'Jogador Venceu!';
                jScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computador Venceu!';
                cScore ++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'papel'){
            if(computerChoice === 'tesoura'){
                winner.textContent = 'Computador Venceu!';
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Jogador Venceu!';
                jScore ++;
                updateScore();
                return;
            }
        }

        if (playerChoice === 'tesoura'){
            if(computerChoice === 'pedra'){
                winner.textContent = 'Computador Venceu!';
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Jogador Venceu!';
                jScore ++;
                updateScore();
                return;
            }
        }
    }
    
    startGame();
    playMatch();
  
}

game();