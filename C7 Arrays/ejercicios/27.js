function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let res=palabras.toString();
  let nuevo=res.replace(/[,]/g, " ");
  
  return nuevo
}

module.exports = dePalabrasAFrase;
