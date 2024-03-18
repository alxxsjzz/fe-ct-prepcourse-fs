function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let resultado = "";
   let longituMaxima = Math.max(str1.length, str2.length, str3.length)
   for(var i=0; i<longituMaxima; i++){
     if(str1[i]!==undefined && str1!==""){
       resultado+=str1[i]
     }if(str2[i]!==undefined && str2!==""){
       resultado+=str2[i]
     }
     if(str3[i]!==undefined && str3!==""){
       resultado+=str3[i]
     }
   }
   return resultado;
}

module.exports = combine;
