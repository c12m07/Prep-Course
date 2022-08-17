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
  
  var result = 0;

  for (let i = 0; i < usuario.posts.length; i++) {
    result = result + usuario.posts[i].likes;
  }
  return result;

}

function agregarMetodoCalculoDescuento (producto) {

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
