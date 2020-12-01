const isVictory = (boardState) => {
  if (
    (boardState[0] === boardState[1] && boardState[0] === boardState[2] && boardState[0] === 'X') ||
    (boardState[3] === boardState[4] && boardState[3] === boardState[5] && boardState[3] === 'X') ||
    (boardState[6] === boardState[7] && boardState[6] === boardState[8] && boardState[6] === 'X') ||
    (boardState[0] === boardState[3] && boardState[0] === boardState[6] && boardState[0] === 'X') ||
    (boardState[1] === boardState[4] && boardState[1] === boardState[7] && boardState[1] === 'X') ||
    (boardState[2] === boardState[5] && boardState[2] === boardState[8] && boardState[2] === 'X') ||
    (boardState[0] === boardState[4] && boardState[0] === boardState[8] && boardState[0] === 'X') ||
    (boardState[2] === boardState[4] && boardState[2] === boardState[6] && boardState[2] === 'X')
  ) {
    return 'X';
  }

  if (
    (boardState[0] === boardState[1] && boardState[0] === boardState[2] && boardState[0] === 'O') ||
    (boardState[3] === boardState[4] && boardState[3] === boardState[5] && boardState[3] === 'O') ||
    (boardState[6] === boardState[7] && boardState[6] === boardState[8] && boardState[6] === 'O') ||
    (boardState[0] === boardState[3] && boardState[0] === boardState[6] && boardState[0] === 'O') ||
    (boardState[1] === boardState[4] && boardState[1] === boardState[7] && boardState[1] === 'O') ||
    (boardState[2] === boardState[5] && boardState[2] === boardState[8] && boardState[2] === 'O') ||
    (boardState[0] === boardState[4] && boardState[0] === boardState[8] && boardState[0] === 'O') ||
    (boardState[2] === boardState[4] && boardState[2] === boardState[6] && boardState[2] === 'O')
  ) {
    return 'O';
  }
}

export default isVictory;