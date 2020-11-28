const fibonacci = [1, 1];

const res = document.getElementById("fibonacci");
const newElement = document.createElement("p");

res.appendChild(
  newElement.appendChild(
    document.createTextNode("\n" + fibonacci[fibonacci.length - 1])
  )
);
res.appendChild(
  newElement.appendChild(
    document.createTextNode("\n" + fibonacci[fibonacci.length - 2])
  )
);

document.write('<button onclick="loadMore(fibonacci)">More</button>');

function loadMore(fibonacci) {
  const newElement = document.createElement("li");

  const newNumber =
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(newNumber);
  res.appendChild(
    newElement.appendChild(
      document.createTextNode("\n" + fibonacci[fibonacci.length - 1])
    )
  );
}
