function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let res=[];
  for(var i=0; i<array.length; i++){
    if(array[i]>10){
      res.push(array[i])
    }
  }
  return res.length;

}

module.exports = contarElementosMayoresA10;
