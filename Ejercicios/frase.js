const frase = prompt("Escribe una frase: ");

const colores = {
  a: "red",
  e: "green",
  i: "blue",
  o: "purple",
  u: "pink",
};

const numeroVocales = frase.match(/[aeiou]/gi).length;
document.write(`<h1>Numero de vocales: ${numeroVocales}</h1>`);

const arrayVocales = frase.match(/[aeiou]/gi);

const arrayFrase = Array.from(frase);

const fraseConNegritas = arrayFrase.map((letra, index) => {
  if (arrayVocales.includes(letra)) {
    return `<span style="font-weight: bold;">${letra}</span>`;
  } else {
    return `<span font-weight: normal;>${letra}</span>`;
  }
});

const fraseConColores = arrayFrase.map((letra, index) => {
  if (arrayVocales.includes(letra)) {
    return `<span style="color: ${
      colores[letra.toLowerCase()]
    };">${letra}</span>`;
  } else {
    return `<span>${letra}</span>`;
  }
});

document.write(`
    <p style="font-size: 20px"> ${fraseConNegritas.join("")} </p>
    <p style="font-size: 20px"> ${fraseConColores.join("")} </p>
`);
