// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten (name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
 function destructivelyRemoveLastKitten(name){
<<<<<<< HEAD
   return kittens.pop(name);
=======
   return kittens.slice(0, slice.length, -1);
>>>>>>> f839adb88dfdf83a5a6ab151c9aba72485dad366
 }
 
 function destructivelyRemoveFirstKitten(){
   kittens.shift();
   return kittens;
 }
 
 function appendKitten(name){
    return [...kittens, name];
 }
 
 function prependKitten(name){
   return [name, ...kittens];
 }
 
 function removeLastKitten(){
<<<<<<< HEAD
   return kittens.slice(0, kittens.length -1);
=======
   return kittens.pop();
>>>>>>> f839adb88dfdf83a5a6ab151c9aba72485dad366
 }
 
 function removeFirstKitten(){
   return kittens.slice(1);
 }
 
 
 