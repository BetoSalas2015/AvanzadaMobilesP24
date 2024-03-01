const { Module } = require("module");
const fs = require('node:fs');

const crearArchivo = async (base = 5) => {
    return new Promise( (resolve, reject) => {
        let salida = "";

        console.log("====================");
        console.log(`  Tabla del ${base} `);
        console.log("====================");

        for (let i = 1; i <= 10; i++) 
            salida += `${base} * ${i} = ${base * i}\n`;


        fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`);
        });     
        console.log(salida);
    } );
    
};

module.exports = {
    crearArchivo
};