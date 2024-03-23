function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let nuevo=0;
  for(var i=0; i<arrayOfNums.length; i++){
    nuevo+=arrayOfNums[i]
  }
  return nuevo
}

module.exports = agregarNumeros;
