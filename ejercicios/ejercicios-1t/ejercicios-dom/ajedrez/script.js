const rowPar = ["black", "white", "black", "white", "black", "white", "black", "white"];
const rowImpar = ["white", "black", "white", "black", "white", "black", "white", "black"];
const array = [rowPar, rowImpar, rowPar, rowImpar, rowPar , rowImpar, rowPar, rowImpar]

array.map((row) => {
    document.write(
        '<br><br><br>'
      );
  row.map((item) => {
    if (item === "white") {
      document.write(
        '<div style="background-color:#FFFFFF;float:left;">&nbsp</div>'
      );
    } else {
      document.write(
        '<div style="background-color:#000000;float:left;">&nbsp</div>'
      );
    }
  });
});