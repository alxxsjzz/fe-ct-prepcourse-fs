function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let ass=[];
   for(var i=0; i<arrayOfStrings.length; i++){
      if(arrayOfStrings[i].charAt(0)== "a" ||arrayOfStrings[i].charAt(0)== "A"){
         ass.push(arrayOfStrings[i])
      }
   }
   return ass;
}

module.exports = filter;
