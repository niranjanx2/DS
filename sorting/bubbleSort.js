let arr = [11,10,12,9,13,8,14,7,15,6,16,5,17,4,18,3,19,2,20,1];

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

console.log(arr);