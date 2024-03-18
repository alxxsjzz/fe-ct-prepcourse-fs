function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  for(var i=0; i<=numero; i++){
      if(numero===Math.pow(2,i)){
        return true
      }
  }return false
}

module.exports = esPotenciaDeDos;
