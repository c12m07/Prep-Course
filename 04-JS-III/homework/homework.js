function devolverPrimerElemento(array) {

  return array[0];

}


function devolverUltimoElemento(array) {

  return array[array.length-1];

}


function obtenerLargoDelArray(array) {

  var result = array.length;
  return result;

}


function incrementarPorUno(array) {

  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  }
  return array;

}


function agregarItemAlFinalDelArray(array, elemento) {

  array.push(elemento);
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {

  array.unshift(elemento);
  return array;

}


function dePalabrasAFrase(palabras) {

  var cadena = palabras.join(" ");
  return cadena;

}


function arrayContiene(array, elemento) {

  if (array.length === 0 ){
    return false;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento){
        return true;
      } else {
        return false;
      }
    }
  }

}


function agregarNumeros(numeros) {

  var result = 0;
  for (let i = 0; i < numeros.length; i++) {
    result = result + numeros[i];
  }
  return result;

}


function promedioResultadosTest(resultadosTest) {

  var average = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    average = average + resultadosTest[i];
  }
  result = average / resultadosTest.length;
  return result;

}


function numeroMasGrande(numeros) {

  var result = Math.max(...numeros);
  return result;

}


function multiplicarArgumentos() {

  if (arguments.length === 0) return 0;

  var total = 1;
  for (let i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }

  return total;

}


function cuentoElementos(arreglo){

  var result = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18){
      result++;
    }
  }

  return result;

}


function diaDeLaSemana(numeroDeDia) {

  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana';
  } else if (numeroDeDia >= 2 && numeroDeDia <= 6 ){
    return 'Es dia Laboral';
  } else {
    return 'El numero ingresado no esa válido';
  }
  
} 


function empiezaConNueve(n) {
  
  var num = n.toString().charAt(0); 
  if (num === '9') {
    return true;
  } else {
    return false;
  }
  
}


function todosIguales(arreglo) {

  var equal = Boolean;

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[0] !== arreglo[i]){
      equal = false;
      return equal;
    } else{
      equal = true;
    }
  }

  return equal;
  
} 


function mesesDelAño(array) {

  var mes = '';
  var result = [];
  var found = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'Marzo'){
      found = 'NotFound'
    } else {
      mes = 'Marzo';
      result.push(mes);
      found = 'Found';
      i = array.length;      
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'Noviembre'){
      found = 'NotFound'
    } else {
      mes = 'Noviembre';
      result.push(mes);
      found = 'Found';
      i = array.length;
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 'Enero'){
      found = 'NotFound'
    } else {
      mes = 'Enero';
      result.push(mes);
      found = 'Found';
      i = array.length;
    }
  }
  if (found === 'Found') {
    return result;
  } else {
    return 'No se encontraron los meses pedidos';
  }

}


function mayorACien(array) {

  var result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100){
      result.push(array[i]);
    }
  }
  return result;

}


function breakStatement(numero) {

  var result = [];
  var i = 0;
  do{
    i = i + 1;
    numero = numero + 2;
    result.push(numero);

    if (numero === i){
      return "Se interrumpió la ejecución";
    }
  } while (i < 10);
  return result;

}


function continueStatement(numero) {

  var result = [];
  var i = 0;
  do{
    i = i + 1;
    if (i === 5){
      numero = numero
    } else {
      numero = numero + 2;
      result.push(numero);
    }
  } while (i < 10);
  return result;
}

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
