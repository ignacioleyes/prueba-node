let fs = require("fs");
let moment = require("moment");

let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8");

console.log(datos);

console.log(moment().format("MMM DD YY"));

