// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.




vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

//Map = new Class, a template for a particualr type of of object we want to create. 

// Funtion = vouwel count

// MDN: Determines whether an array includes a certain value among its entries, returning true or false as appropriate. 

// for of = an iterating loop over iterable objects, which includes string, arrays, and array like objects. 

// let: Is a statements which declares a block scoped local variable, optionally intizliaing the value. I think this means that if the string values are not lower case it will conver it, if they are already lower case they will pass over the,. 


//MDN: The map object holds key-value pairs and remembers the original iteration order of the keys. Any value(both objects and primitive values) may be used as either a key or a value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 

//MDN .get:  syntax binds an object property to a function that will be called when that property is looked up. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get


//MDN.has method returns a boolean indicating whether an element with the specified key exists or not.

//MDN .set The Set object lets you store unique values of any type, whether primitive values or object references. Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set