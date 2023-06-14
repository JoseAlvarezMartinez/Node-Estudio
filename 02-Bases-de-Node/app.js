const fs = require("fs");

const readline = require("readline");


let valor = 2
console.clear();
console.log("============");
console.log(`Tabla del: ${valor}`);
console.log("============");


let salida = "";
for (let i = 0; i <= 10; i++) {
  salida += `${valor} x ${i} = ${valor * i} \n`;
}
fs.writeFile(`tabla-${valor}.txt`, salida, (err) => {
  if (err) throw err;
  console.log(`El archivo tabla-${valor}.txt se creo correctamente\n`,salida );
});
