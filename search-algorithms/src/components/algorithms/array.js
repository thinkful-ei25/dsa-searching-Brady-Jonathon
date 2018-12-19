import {bubbleSort} from './bubbleSort'


class Array{


  initializeArray(size, arrayRange){
    let array = new Array(size);
    for(let i = 0; i < size; i++){
      array[i] = Math.floor(Math.random() * arrayRange + 1);
    }
    return array;
  }
  
  isSorted(array){
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        return bubbleSort(array);
      }
    }
    return array;
  }
}

const array = new Array();

export {array};