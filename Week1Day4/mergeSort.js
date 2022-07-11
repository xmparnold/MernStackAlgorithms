// merging without shift()
function merge(left, right) {
    const lengthL = left.length;
    const lengthR = right.length;
    const newArr = [];
    let x = 0;
    let i = 0;
    while(x<lengthL && i<lengthR) {
        if(left[x] < right[i]) {
            newArr.push(left[x]);
            x++;
        }
        else {
            newArr.push(right[i]);
            i++;
        }
    }
    if(x < lengthL) {
        while(x < lengthL) {
            newArr.push(left[x]);
            x++;
        }
    }
    if(i < lengthR) {
        while(i < lengthR) {
            newArr.push(right[i]);
            i++;
        }
    }
    return newArr;
}


function mergeSort(arrX, arrY) {
    // make copies of input arrays
    let x = [...arrX];
    let y = [...arrY];
    // create a new array to push values to as we go through the
    let newArray = [];

    // for (let i = 0; i < x.length; i++) {

    // }
    while (x.length > 0 && y.length > 0) {
        // choose the smallest value between the 0 index of both subarrays
        if (x[0] < y[0]) {
            // newArray.push(x[0])
            newArray.push(x.shift())
        }
        else {
            newArray.push(y.shift())
        }
    }

    // if we didn't go through the whole array yet we need to add the leftover values to the end and return
    // return newArray
    return [ ...newArray, ...x, ...y ]

}


function mergeSortRecursive(nums) {
    const half = nums.length / 2
    if(nums.length < 2){
        return nums 
    }
    const left = nums.splice(0, half)
    return merge(mergeSort(left),mergeSort(nums))
}