function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let res=[];
  for(var i=0; i<array.length; i++){
    res.push(array[i]*2)
  }
  return res;
}

module.exports = duplicarElementos;
