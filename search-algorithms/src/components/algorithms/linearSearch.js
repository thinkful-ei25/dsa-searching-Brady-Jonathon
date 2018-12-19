'use strict';

function linearSearch(array, key){
  let length = array.length;
  for(let i = 0; i < length; i++){
    if(array[i] === key){
      return [i,i];
    }
  }
  return false;
}

export {linearSearch}