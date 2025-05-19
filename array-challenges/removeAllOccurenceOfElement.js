function removeAllOccurences(arr, ele) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== ele) { 
            arr[count] = arr[i];
            count++;
        }
    }
    return count;
}
let arr1 = [3, 2, 2, 3];
let ele1 = 3;
console.log(removeAllOccurences(arr1, ele1));
console.log(arr1); 
let arr2 = [0, 1, 3, 0, 2, 2, 4, 2];
let ele2 = 2;
console.log(removeAllOccurences(arr2, ele2)); 
console.log(arr2); 