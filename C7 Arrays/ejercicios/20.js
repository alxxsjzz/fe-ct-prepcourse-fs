function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for(var i=0; i<array.length; i++){
    if( array[i]===array[++i]){
      return true
    }return false;
  } 
}

module.exports = todosIguales;
