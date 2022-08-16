function obtenerMayor(x, y) {

  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return y;
  }

}

function mayoriaDeEdad(edad) {

  if (edad >= 18) {
    return "Allowed";
  } else {
    return "Not allowed";
  }

}

function conection(status) {

  if (status === 1) {
    return "Online";
  } else if (status === 2) {
    return "Away";
  } else {
    return "Offline";
  }

}

function saludo(idioma) {

  if (idioma === "aleman") {
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles") {
    return "Hello!";
  } else {
    return "Hola!";
  }

}

function colors(color) {

  switch (color) {
    case "blue":
      return "This is blue";
      break;

    case "red":
      return "This is red";
      break;

    case "green":
      return "This is green";
      break;

    case "orange":
      return "This is orange";
      break;

    default:
      return "Color not found";
      break;
  }

}

function esDiezOCinco(numero) {

  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }

}

function estaEnRango(numero) {

  if (numero < 50 && numero > 20) {
    return true;
  } else {
    return false;
  }

}

function esEntero(numero) {

  if (Number.isInteger(numero)) {
    return true;
  } else {
    return false;
  }

}

function fizzBuzz(numero) {

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else {
    return numero;
  }

}

function operadoresLogicos(num1, num2, num3) {

  if (num1 === 0 || num2 === 0 || num3 === 0){
    return 'Error';
  } else if (num1 < 0 || num2 < 0|| num3 < 0){
    return 'Hay negativos';
  } else if (num1 > num2 && num1 > num3 && num1 >= 0){
    return 'Número 1 es mayor y positivo';
  } else if (num3 > num2 && num3 > num1){
    var num1 = num1 + num3;
    return num1;
  } else {
    return false;
  }

}

function esPrimo(numero) {

  if (numero >=2){
    for (var i = 2; i < numero; i++){
      if(numero % i === 0){
        return false;
      }
    }
    return true;
  } else {
    return false;
  }

}

function esVerdadero(valor) {

  if (valor === true){
    return 'Soy verdadero';
  } else {
    return'Soy falso';
  }

}

function tablaDelSeis() {

  let tabla = [];
  for (let i = 0; i < 11; i++){
    tabla.push(6 * i);
  }
  return tabla; 

}

function tieneTresDigitos(numero) {

  if (numero > 99 && numero < 1000){
    return true;
  } else {
    return false;
  }

}

function doWhile(numero) {

  var i = 0
  do{
    i = i + 1;
    numero = numero + 5;
  } while (i < 8);
  return numero;

}

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile,
};
