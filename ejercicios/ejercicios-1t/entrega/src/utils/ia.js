const ia = (boardState) => {
    let randomChoice = Math.floor(Math.random() * 9);
    
    while (boardState[randomChoice]) {
        randomChoice = Math.floor(Math.random() * 9);
    }

    boardState[randomChoice] = 'O';

    return boardState;
}

export default ia;