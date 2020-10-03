const input = prompt('Frase o palabra: ')

// Convertir en array
const content = input.split('');

// Invertir array
const invertida = content.reverse();

console.log(content)
console.log(invertida)

if (content === invertida) {
    document.write(`<h2>${input} es un palindromo</h2>`)
} else {
    document.write(`<h2>${input} no es un palindromo</h2>`)
}