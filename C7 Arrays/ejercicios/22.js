function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let nuevo=[];
  for(var i=0; i<=10; i++){
    nuevo.push(i*6)
  }
  return nuevo;
}

module.exports = tablaDelSeis;
