function crearUsuario() {

  class Usuario {
    constructor(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
    }
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre;
    }
  }

  return Usuario;

}

function agregarMetodoPrototype(Constructor) {

  Constructor.prototype.saludar = function(){
    return 'Hello World!';
  }

}

function agregarStringInvertida() {

  String.prototype.reverse = function(){
    return this.split('').reverse().join('');
  }

}

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {

  const subject1 = new Persona('Juan', 'Perez', 22, 'Saavedra 123');
  return subject1;

}
  
function agregarMetodo() {

  Persona.prototype.datos = function () {
    return this.nombre + ', ' + this.edad + ' años';
  }

}
  
module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};