const input = prompt('Frase o palabra: ')

const array = input.toLowerCase().split(' ')

if (array.includes('nemo')) {
    document.write(
        `<h1>He encontrado a Nemo en ${array.indexOf('nemo')}</h1>`
    )
} else {
    document.write(
        `<h1>No he encontrado a Nemo :(</h1>`
    )
}