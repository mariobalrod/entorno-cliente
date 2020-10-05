function recompose (word) {
    let arr = word.match(/[aeiou]+|[^aeiou]+/gi);

    arr = arr.map(letters => {
        return letters.split('').reverse().join('');
    })

    return arr.join('').replace(/\B[A-Z]/g, " $&")
}