// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  const entries = Object.entries(objeto);
 return entries
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  string = string.replace(/\s/g, "");
  final = {} //Donde guardamos los resultados
  for(let char in string){ //Cogemos el indice de cada caracter
	if(string[char] in final) { //Si ya existe, simplemente aumentamos el contador
		final[string[char]] = final[string[char]] + 1
	} else { // Si no existe, lo inicializamos a 1
		final[string[char]] = 1
    }
}
  
  return final;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var sp = s.split("");
  var caps = []; 
  var lower = []
  for (var i = 0; i < sp.length; i++)
      {
          if (sp[i] == sp[i].toUpperCase()){              
              caps.push(sp[i]);
          }
          if (sp[i] == sp[i].toLowerCase()){
              lower.push(sp[i]);
          }
      }
  return caps.join("").concat(lower.join(""));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let convert = str.split(' ');

  function reverseString(str2) {
    return str2.split("").reverse().join("");
  }
  
  let result = [];

  for (x=0;x<convert.length;x++){
   
   result.push(reverseString(convert[x]));  
  }

  function replaceAll( text, busca, reemplaza ){
    while (text.toString().indexOf(busca) != -1)
        text = text.toString().replace(busca,reemplaza);
    return text;
  }
  return replaceAll(result,","," ");
  

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  if(numero < 0){
    return false;
}
var s = numero.toString()
if(s.split('').reverse().join('') === s){
    return "Es capicua";
}else{
    return "No es capicua";
}
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  function replaceAll( text, busca, reemplaza ){
    while (text.toString().indexOf(busca) != -1)
        text = text.toString().replace(busca,reemplaza);
    return text;
  }
  var result;
    
   if(cadena.search("a") != -1 && cadena.search("b") != -1 && cadena.search("c") != -1 ){
    result=cadena.replace("abc","");
   }
   else if(cadena.search("a") != -1){
      result=replaceAll(cadena,'a',''); 
   }
   else if(cadena.search("b") != -1){
      result=replaceAll(cadena,'b',''); 
   }
   else if (cadena.search("c") != -1 ) {
    result=replaceAll(cadena,'c','');    
    
  }else {
    result = cadena;
  }
  return result;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  let datos1 = [...arreglo1.map(d => Math.round(d))];
  let datos2 = [...arreglo2.map(d => Math.round(d))];
  
  return Array.from(new Set([...datos1].filter(e => new Set(datos2).has(e))));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

