const nuevaString = "JavaScript";

const nuevoNum = 12345;

const nuevoBool = false;

const nuevaResta = 10 - 5 === 5;

const nuevaMultiplicacion = 10 * 4 === 40;

const nuevoModulo = 21 % 5 === 1;

function devolverString(str) {

  return str;

}

function suma(x, y) {

  var result = x + y;
  return result ;

}

function resta(x, y) {

  var result = x - y;
  return result;

}

function multiplica(x, y) {

  var result = x * y;
  return result;

}

function divide(x, y) {

  var result = x / y;
  return result;

}

function sonIguales(x, y) {

  if (x === y){
    return true;
  } else{
    return false;
  }

}

function tienenMismaLongitud(str1, str2) {

  if (str1.length === str2.length ){
    return true;
  } else{
    return false;
  }

}

function menosQueNoventa(num) {

  if (num < 90){
    return true;
  } else {
    return false;
  }

}

function mayorQueCincuenta(num) {

  if (num > 50){
    return true;
  } else {
    return false;
  }
}

function obtenerResto(x, y) {

  var result = x % y;
  return result;

}

function esPar(num) {

  if (num % 2 === 0){
    return true;
  } else {
    return false;
  }

}

function esImpar(num) {

  if (num % 2 === 1){
    return true;
  } else{
    return false;
  }
}

function elevarAlCuadrado(num) {

  var result = Math.pow(num, 2);
  return result;

}

function elevarAlCubo(num) {

  var result = Math.pow(num, 3);
  return result;

}

function elevar(num, exponent) {

  var result = Math.pow(num, exponent);
  return result;

}

function redondearNumero(num) {

  var result = Math.round(num);
  return result;

}

function redondearHaciaArriba(num) {

  var result = Math.ceil(num);
  return result;

}

function numeroRandom() {

  var result = Math.random();
  return result;

}

function esPositivo(numero) {

  if (numero > 0){
    return 'Es positivo';
  } else if (numero < 0){
    return 'Es negativo';
  } else{
    return false;
  }
}

function agregarSimboloExclamacion(str) {

  var result = str + '!';
  return result;

}

function combinarNombres(nombre, apellido) {

  var result = nombre + ' ' + apellido;
  return result;

}

function obtenerSaludo(nombre) {

  var result = `Hola ${nombre}!`
  return result;

}

function obtenerAreaRectangulo(alto, ancho) {

  var result = alto * ancho;
  return result ;
}

function retornarPerimetro(lado) {

  var result = lado * 4;
  return result;

}

function areaDelTriangulo(base, altura) {

  var result = (base * altura) / 2;
  return result;

}

function deEuroAdolar(euro) {

  var dolar = euro * 1.20;
  return dolar;

}

function esVocal(letra) {

  if (letra.length === 1){
    
    if ( letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u' ){
      return 'Es vocal';
    } else {
      return 'Dato incorrecto'
    }

  } else{
    return 'Dato incorrecto';
  }

}

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
