// function play(){
//     // hight the home screen. to hide the screen add the class hidden to the home section 

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
    
// }

// function handleKeyboardButtonPress(){
//     console.log('button pressed')
// }
// // capture keyboard kay press  
// document.addEventListener('keyup',handleKeyboardButtonPress);

function handelKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('plyer pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }


    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
 

    // check ma the or not 
    if(playerPressed === expectedAlphabet){
        console.log('you gat a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



       
        // console.log('you have pressed correctly', expectedAlphabet);

        // update score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // // increase the score by 1
        // const newScore = currentScore + 1;

        // // show the updated score 
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
       
        // console.log('dhurr vaiya va apu ...right kye press koro');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();

        }
        
        //------------------------
        // // step - 1: get  teh current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = paresInt(currentLifeText);



        // // step - 2: reduce the life const 
        // const newLife = currentLife - 1;

        // // step - 3: display the update life count
        // currentLifeElement.innerText = newLife;

    }
}


document.addEventListener('keyup',  handelKeyboardKeyUpEvent)

function continueGame(){
    //step -1: generate a ransom alphabet
    const alphabet = getARandomAlphabet();
    // console.log('you', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // stet background color 

    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life 
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0)


    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score 
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    getTextElementValueById('last-score', lastScore);

    // clear the last score alphabet highlight
    const currentAlphabet = getElementById('current-alphabet');
    // removeBackgroundColorById(currentAlphabet);
    currentAlphabet.classList.remove('bg-orange-400');

}
