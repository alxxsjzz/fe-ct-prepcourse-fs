function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let s1= str1.toLowerCase().split("").sort();
   let s2=str2.toLowerCase().split("").sort();
   if(s1.length==0&&s2.length==0){
      return true
    }
   for(var i=0; i<s1.length; i++){
      for(var j=0; j<s2.length; i++){
         if(s1[i]== s2[j]&& s1.length== s2.length){
            return true
         }
        return false
      }
   }
}

module.exports = esAnagrama;
