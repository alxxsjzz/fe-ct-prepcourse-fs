/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let key=Object.keys(objeto);
  let values=Object.values(objeto);
  let nuevo1=[];
  let nuevo2=[];
  for(var i=0; i<1; i++){
     nuevo1.push(key[i], values[i])
     nuevo2.push(key[++i], values[i])
  }
    return[nuevo1,nuevo2]
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let regreso={}
  let a="";
  let b="";
  let c="";
  let d="";
  let e="";
  let f="";
  let g="";
  let h="";
  let ii="";
  let j="";
  let k="";
  let l="";
  let m="";
  let n="";
  let o="";
  let p="";
  let q="";
  let r="";
  let s="";
  let t="";
  let w="";
  let nuevo=string.split("").sort()
  for(var i=0; i<nuevo.length; i++){
    if(nuevo[i]=="a"){
      a+=nuevo[i]
      regreso["a"]=a.length
    }
    else if(nuevo[i]=="b"){
      b+=nuevo[i]
      regreso["b"]=b.length
    }else if(nuevo[i]=="c"){
      c+=nuevo[i]
      regreso["c"]=c.length
    }else if(nuevo[i]=="d"){
      d+=nuevo[i]
      regreso["d"]=d.length
    }else if(nuevo[i]=="e"){
      e+=nuevo[i]
      regreso["e"]=e.length
    }else if(nuevo[i]=="f"){
      f+=nuevo[i]
      regreso["f"]=f.length
    }else if(nuevo[i]=="g"){
      g+=nuevo[i]
      regreso["g"]=g.length
    }else if(nuevo[i]=="h"){
      h+=nuevo[i]
      regreso["h"]=h.length
    }else if(nuevo[i]=="i"){
      ii+=nuevo[i]
      regreso["i"]=ii.length
    }else if(nuevo[i]=="j"){
      j+=nuevo[i]
      regreso["j"]=j.length
    }else if(nuevo[i]=="k"){
      k+=nuevo[i]
      regreso["k"]=k.length
    }else if(nuevo[i]=="l"){
      l+=nuevo[i]
      regreso["l"]=l.length
    }else if(nuevo[i]=="m"){
      m+=nuevo[i]
      regreso["m"]=m.length
    }else if(nuevo[i]=="s"){
      s+=nuevo[i]
      regreso["s"]=s.length
    }else if(nuevo[i]=="o"){
      o+=nuevo[i]
      regreso["o"]=o.length
    }else if(nuevo[i]=="p"){
      p+=nuevo[i]
      regreso["p"]=p.length
    }else if(nuevo[i]=="r"){
      r+=nuevo[i]
      regreso["r"]=r.length
    }else if(nuevo[i]=="t"){
      t+=nuevo[i]
      regreso["t"]=t.length
    }else if(nuevo[i]=="w"){
      w+=nuevo[i]
      regreso["w"]=w.length
    }else if(nuevo[i]=="q"){
      q+=nuevo[i]
      regreso["q"]=q.length
    }
  }
  return regreso
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let may=string.toUpperCase();
  console.log(may)
  let nuevo="";
  let nuevo2="";
  for(var i=0; i<string.length; i++){
    if(string[i]==may[i]){
      nuevo+=string[i]
    }else nuevo2+=string[i]
  }
  return nuevo+nuevo2
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let nuevo=frase.split(" ")
  let respu=[];
  let fin=[];
  let fin2=[];
  //console.log(nuevo)
  for(var i=0; i<nuevo.length; i++){
    respu.push(nuevo[i].split(""))
  }
  for(var j=0; j<respu.length; j++){
    fin.push(respu[j].reverse().toString())
  }
  for(var k=0; k<fin.length; k++){
    fin2.push(fin[k].replace(/,/g, ""))
  }
  
    return fin2.join(" ")
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let st1=numero.toString()
  let st2=st1.split("").reverse().join("")
  if(st1== st2){
    return "Es capicua"
  }return "No es capicua"
  
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let nuevo="";
  for(var i=0; i<string.length; i++){
    if(string[i]!== "a"&&string[i]!== "b"&&string[i]!== "c"){
      nuevo+=string[i]
    }
  }
  return nuevo;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort((a,b)=>{
    if(a.length<b.length){
      return -1
    }
    if(a.length> b.length){
      return 1
    }
    return 0
  })
  return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let res=[];
  let max=(array1.length,array2.length)
  for(var i=0; i<max; i++){
    for(var j=0; j<max; j++){
      if(array1[i]==array2[j]){
        res.push(array1[i])
      }
    }
  }
  return res
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
