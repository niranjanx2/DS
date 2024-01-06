function mergeArrays(arr1,arr2){
    let result = [];
    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else if(arr1[i] === arr2[j]){
            result.push(arr1[i]);
            result.push(arr2[j]);
            i++;j++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));
    return mergeArrays(left,right);
}
let randomArr = [11,10,12,9,13,8,14,7,15,6,16,5,17,4,18,3,19,2,20,1];
console.log(mergeSort(randomArr));