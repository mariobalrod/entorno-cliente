const sumOddAndEven = arr => {
  let arrEvens = arr.filter((x) => Math.abs(x) % 2 === 0);
  let arrOdds = arr.filter((x) => Math.abs(x) % 2 === 1);
  return [
    arrEvens.reduce((a, c) => a + c, 0),
    arrOdds.reduce((a, c) => a + c, 0),
  ];
}