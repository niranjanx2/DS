let randomArr = [11,10,12,9,13,8,14,7,15,6,16,5,17,4,18,3,19,2,20,1];

for(let i=0; i<randomArr.length; i++){
    let min = i;
    for(let j=i; j<randomArr.length; j++){
        if(randomArr[min] > randomArr[j]){
            min = j;
        }
    }
    [randomArr[i],randomArr[min]] = [randomArr[min],randomArr[i]]
}

console.log(randomArr)