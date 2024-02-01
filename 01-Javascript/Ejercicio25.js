function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
};

Persona.prototype.getFullName = function() {
    return this.nombre + " " + this.apellido;
};

var juan = new Persona("Jaunito", "Pérez");
var pedro = new Persona("Piedrito", "Pérez");

console.log(juan.getFullName());
console.log(pedro.getFullName());