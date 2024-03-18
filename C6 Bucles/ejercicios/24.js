function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let nuevo=texto.split("")
   let vol=nuevo.reverse()
   return vol.join("")
}

module.exports = invertirTexto;
