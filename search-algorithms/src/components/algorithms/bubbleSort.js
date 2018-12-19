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

export {bubbleSort}