const shortestDistance = str => {
  let arr = str.split(",").map(Number);
  let x = Math.pow(arr[0] - arr[2], 2);
  let y = Math.pow(arr[1] - arr[3], 2);
  return + Math.sqrt(x + y).toFixed(2);
}