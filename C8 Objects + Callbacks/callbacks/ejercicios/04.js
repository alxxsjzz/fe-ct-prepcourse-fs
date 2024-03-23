function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   let res=0;
   for(var i=0; i< arrayOfNumbers.length; i++){
      res+=arrayOfNumbers[i]
   }
   cb(res);

}

module.exports = sumarArray;
