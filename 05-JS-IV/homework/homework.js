function crearGato (nombre, edad) {

  const objeto = {
    nombre: nombre,
    edad: edad,
    meow: function() {
      return 'Meow!';
    }
  };
  return objeto;

}

function agregarPropiedad (objeto, property) {

  objeto[property] = null;
  return objeto;

}

function invocarMetodo (objeto, metodo) {

  objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {

  var result = objetoMisterioso.numeroMisterioso * 5;
  return result;

}

function eliminarPropiedad (objeto, unaPropiedad) {

  objeto[unaPropiedad] = undefined;
  return objeto;

}

function nuevoUsuario (nombre, email, password) {

  const obj = {
    nombre: nombre,
    email: email,
    password: password
  };
  return obj;

}

function tieneEmail (usuario) {

  if (Object.hasOwn(usuario, "email")){
    if (usuario.email === null){
      return false;
    } else if (usuario.email !== undefined){
      return true;
    }
  } else {
    return false;
  }

}

function tienePropiedad (objeto, propiedad) {

  if (Object.hasOwn(objeto, propiedad) && typeof propiedad === 'string'){
    return true;
  } else {
    return false;
  }

}

function verificarPassword (usuario, password) {

  if (password === usuario.password) {
    return true;
  } else {
    return false;
  }

}

function actualizarPassword (usuario, nuevaPassword) {

  usuario.password = nuevaPassword;
  return usuario;

}

function agregarAmigo (user, newFriend) {

  user.amigos.push(newFriend);
  return user.amigos;

}

function pasarUsuarioAPremium (usuarios) {

  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  } 
  return usuarios;

}

function sumarLikesDeUsuario (usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var result = 0;

  for (let i = 0; i < usuario.posts.length; i++) {
    result = result + usuario.posts[i].likes;
  }
  return result;

}

function agregarMetodoCalculoDescuento (producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:

  producto.calcularPrecioDescuento = function(){
    var result = this.precio - (this.precio * this.porcentajeDeDescuento);
    return result;
  }
  return producto;

}

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
}
