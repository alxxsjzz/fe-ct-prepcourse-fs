function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let nuevo=[];
  for(var i=0; i<array.length; i++){
    nuevo.push(array[i]*i)
  }
  return nuevo
}

module.exports = multiplicarElementosPorIndice;
