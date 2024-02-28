let nombreUsuario;
let user = "Wendy";
let edad = 19;
const PI = 3.1416;

// Métodos propios del lenguaje
let PI_DOS;
PI_DOS = Math.PI;

// Funciones
const saludarUsuario = () => {
    return "Hola " + user;
};

const saludarConEdad = (nombre, age) => {
    return "Hola "+nombre+ " tienes " +age+ " años.";
};

const sumarNumeros = (numero1, numero2) => {
    return numero1 + numero2;
};

const multiplicarTresNumeros = (num1, num2, num3) => {
    return num1 * num2 * num3;
};

const calcularAreaCirculo = (radio) => {
    return PI_DOS * radio * radio;
};


console.log(saludarUsuario());
console.log(saludarConEdad("Wendy", edad));
console.log(sumarNumeros(5, 3));
console.log(multiplicarTresNumeros(2, 3, 4));
console.log(`El área de un círculo con radio 3 es: ${calcularAreaCirculo(3)}`);