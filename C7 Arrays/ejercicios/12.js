function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let res=[];
  for(var i=0; i<array.length; i++){
    res.push(array[i].toUpperCase())
  }return res;
}

module.exports = convertirStringAMayusculas;
