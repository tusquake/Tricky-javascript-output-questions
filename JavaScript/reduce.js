const arr = [5, 1, 3, 2, 6];

function findsum(arr){
    let sum=0;
    for(let i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

function max(arr){
    let max=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

console.log(max(arr));

console.log(findsum(arr));

const output = arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0)

const maxi = arr.reduce(function(acc,curr){
    if(curr>acc){
        acc=curr;
    }
},-1)

console.log(maxi);

console.log(output);

