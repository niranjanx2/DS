function sortArrayForRandomValues(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                /**
                 * first way to swap
                 */
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
    
                /**
                 * second way to swap
                 * [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                 */
            }
        }
    }
    return arr;
}

function sortArrayForAlmostSortedArray(arr){
    for(let i=0; i<arr.length; i++){
        let isSwapped = false;
        for(let j=0; j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                /**
                 * first way to swap
                 */
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
                /**
                 * second way to swap
                 * [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                 */
            }
        }
        if(!isSwapped) break;
    }
    return arr;
}
let randomArr = [11,10,12,9,13,8,14,7,15,6,16,5,17,4,18,3,19,2,20,1];
sortArrayForRandomValues(randomArr);

let almostSortedArray = [1,2,3,4,5,6,7,8,9,11,10,12,14,13];
console.log(sortArrayForAlmostSortedArray(almostSortedArray));

