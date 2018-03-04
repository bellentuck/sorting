function split(wholeArray) {
  let midIndex = Math.round(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midIndex);
  let secondHalf = wholeArray.slice(midIndex);
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  let merged = [],
      leftIdx = 0,
      rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
  }

  for (; leftIdx < left.length; leftIdx++) merged.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) merged.push(right[rightIdx]);

  return merged;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let splits = split(array),
      left = splits[0],
      right = splits[1];
  return merge(mergeSort(left), mergeSort(right));
}




//   let shorterArray, longerArray;
//   if (arr1.length < arr2.length) {
//     shorterArray = arr1;
//     longerArray = arr2;
//   } else {
//     shorterArray = arr2;
//     longerArray = arr1;
//   }
//   return shorterArray.reduce((result, currentEl, idx) => {
//     // `compare` returns true if first element is greater
//     if (compare(currentEl, longerArray[idx])) {
//       result.push(longerArray[idx]);
//       result.push(currentEl);
//     } else {
//       result.push(currentEl);
//       result.push(longerArray[idx]);
//     }
//     return result;
//   }, []).concat(longerArray.slice(shorterArray.length));
// }

// function compare(el1, el2){
//   return el1 > el2;
// }
