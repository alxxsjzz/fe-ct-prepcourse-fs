function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x>0 && y>0){
    return Math.max(x,y)
  }else if(x===y && x>0){
    return x;
  }
}

module.exports = obtenerMayor;
