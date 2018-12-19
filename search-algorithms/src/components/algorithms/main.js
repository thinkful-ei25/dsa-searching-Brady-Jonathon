function binarySearch(array, key){
  let i = 0;
  let low = 0;
  let high = array.length;
  let mid;
  while(low <= high){
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

function swap(array, i, j){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(sortingArray){
  let length = sortingArray.length;
  let j;
  for(let i = 0; i < length-1; i++){
    for(j = 0; j < length-i-1; j++){
      if(sortingArray[j] > sortingArray[j+1]){
        swap(sortingArray, j, j+1);
      }
    }
  }
  return sortingArray;
}

function initializeArray(size, arrayRange){
  let array = new Array(size);
  for(let i = 0; i < size; i++){
    array[i] = Math.floor(Math.random() * arrayRange + 1);
  }
  return array;
}

function isSorted(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[i+1]){
      return bubbleSort(array);
    }
  }
  return array;
}

function main(){
  let size = 100;
  let arrayRange = 100;
  let array = initializeArray(size, arrayRange);
  array = isSorted(array);
  console.log(array);
  console.log(binarySearch(array, 51));
}

main();