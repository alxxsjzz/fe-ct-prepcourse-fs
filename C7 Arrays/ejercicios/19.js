function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let valor=[...arguments]
  if(valor<1)return 0
 return valor.reduce((acumulador, valorActual) =>{
    return acumulador*valorActual
  })
}

module.exports = multiplicarArgumentos;
