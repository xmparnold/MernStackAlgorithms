
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function insertionSort(inputnums) {
    // make a copy of array
    nums = [...inputnums];
    // set length equal to length of nums
    let length = nums.length;
    // start at index 1
    for (let i = 1; i < length; i++) {
        // create a current variable to hold current value of index i
        let current = nums[i];
        // set j equal to i-1 since i starts at 1st index
        let j = i-1;
        // while current value is greater than the j index of nums (j is 1 less than i, so current and nums[j] are the index right next to each other.)
        while (current < nums[j]) {
            // set nums[j+1] = current j index to swap values
            nums[j + 1] = nums[j];
            // decrement
            j++;
        }
        nums[j+1] = current
    }
    return nums
}

console.log(insertionSort(numsRandomOrder))