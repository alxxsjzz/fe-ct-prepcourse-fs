function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let res=-100;
  let dos=0
  for(var i=0; i<array.length; i++){
    if(array[i]>res){
      res= array[i]
    }if(array[i]==res){
      dos=i
    }
  }
    return dos
}

module.exports = encontrarIndiceMayor;
