let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');




function getComputerChoice(){
const choices =['s', 'p','r'];
const randomNumer= Math.floor(Math.random() * 3);;
return choices[randomNumer];
}
function converttoWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 's') return 'Scissor';
    return 'Paper';

} 

function win(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= `${converttoWord(userChoice)} beats ${converttoWord(computerChoice)}. you win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {userChoice_div.classList.remove('green-glow')}, 500);
}



function lose(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML= `${converttoWord(userChoice)} loses to ${converttoWord(computerChoice)}. you lost! `;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {userChoice_div.classList.remove('red-glow')}, 500);
}

function draw(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML= `${converttoWord(userChoice)} equals ${converttoWord(computerChoice)}. Draw! `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => {userChoice_div.classList.remove('gray-glow')}, 500);
}

function game(userChoice){
const computerChoice = getComputerChoice();
switch(userChoice + computerChoice){
    case "rp":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
        case "rs":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;


}

}

function main(){
rock_div.addEventListener('click', ()=>{
    game('r');
    
});

scissors_div.addEventListener('click', ()=>{
    game('s');
});

paper_div.addEventListener('click', ()=>{
    game('p');
});
}

main();