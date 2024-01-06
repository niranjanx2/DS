let randomArr = [
  11, 10, 12, 9, 13, 8, 14, 7, 15, 6, 16, 5, 17, 4, 18, 3, 19, 2, 20, 1,
];

//1 10 9 8 7 6 5 4 3 2 11 12 13 14 15 16 17 18 19 20
function findPivot(arr, start = 0, end = arr.length - 1) {
  let swapIdx = start;
  let pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
//   console.log("arr",arr);
  return swapIdx;
}

function quickSort(arr,left=0, right=arr.length-1){
    if(left < right){
        let pivotIndex = findPivot(arr,left,right);
        // for left side of pivot
        quickSort(arr,left,pivotIndex-1);
        // for right side of pivot
        quickSort(arr,pivotIndex+1,right);
    }
    return arr;
}

console.log("Sorted Array: ",quickSort(randomArr));
