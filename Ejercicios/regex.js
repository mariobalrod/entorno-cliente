const word = prompt('Introduce una palabra: '); 

let vocales = word.match(/[aeiou]/gi);
let consonantes = word.match(/[^aeiou ]/gi);

if (vocales) vocales.reverse();
if (consonantes) consonantes.reverse()

console.log(vocales)
console.log(consonantes)