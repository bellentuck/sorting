'use strict';

/// Implementation following along w/ video (nested loops - iterative)

function bubbleSort(array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (!inOrder(array[i], array[i+1])) {
        swap(array, array[i+1], array[i], i, i+1);
        sorted = false;
      }
    }
  }
  return array;
}

function inOrder(el1, el2) {
  return el1 < el2;
}

function swap(array, smaller, larger, leftIdx, rightIdx){
  array[leftIdx] = smaller;
  array[rightIdx] = larger;
}



/// Older Implementation (recursive)

// function bubbleSort(array){
//   //base case
//   ///...to come
//   let arrayHasChanged = false;

//   //loop through a given array
//   for(let i=0; i<array.length-1; i++){
//     //compare if adjacent element
//     if (compare(array[i], array[i+1])) {
//       //if first is larger than second, swap
//       swap(array, array[i+1], array[i], i, i+1);
//       arrayHasChanged = true;
//     }
//   }

//   //if we passed through array and no changes were needed
//   //it means it was sorted
//   //so return that array
//   if (!arrayHasChanged) {
//     return array;
//   }
//   //otherwise keep sorting the array
//   return bubbleSort(array);

// }

// function swap(array, smaller, larger, idx1, idx2){
//   array[idx1] = smaller;
//   array[idx2] = larger;
// }

// // returns true if first element is greater
// // returns false if second is greater
// function compare(el1, el2){
//   return el1>el2;
// }
