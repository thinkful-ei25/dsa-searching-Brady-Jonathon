'use strict';

function binarySearch(array, key){
  let i = 0;
  let low = 0;
  let high = array.length;
  let mid;
  while(low < mid){
    i++;
    mid = low + Math.floor(( (high - low)/ 2));
    if(key === array[mid]){
      return [i, mid];
    }
    if(key > array[mid]){
      low = mid + 1;
    }
    else if(key < array[mid]){
      high = mid - 1;
    }
  }
  return false;
}

//1, 5, 10, 15, 20, 25, 30, 35, 40
export {binarySearch}