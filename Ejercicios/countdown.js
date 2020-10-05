
function isCountdown (countdown) {
    let block = [];

    // Vaciar array
    while (countdown.length > 0) {
        let max = Math.max(...countdown);
        countdown.splice(countdown.indexOf(max), 1);
        if (countdown.indexOf(max - 1) !== -1) {
            let temp = [max, max - 1];
            countdown.splice(countdown.indexOf(max - 1), 1);
            max --;
            while (countdown.indexOf(max - 1) !== -1) {
                temp.push(max - 1)
                countdown.splice(countdown.indexOf(max - 1), 1);
                max --;
            }
            block.push(temp);
        }
    }

    return [block.length, block];
} 

console.log(isCountdown([3,2,1,5,5,3,2,1,5,5]))