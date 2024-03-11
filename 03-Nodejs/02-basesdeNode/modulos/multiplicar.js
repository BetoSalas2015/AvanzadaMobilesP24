const { Module } = require("module");
const fs = require('node:fs');
const colors = require('colors');

const crearArchivo = async (base = 5, limite = 10) => {
    return new Promise( (resolve, reject) => {
        let salida = "";

        console.log("====================".green);
        console.log(`  Tabla del ${base} `.green);
        console.log("====================".green);

        for (let i = 1; i <= limite; i++) 
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