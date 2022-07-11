/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];

// original : [11, 8, 14, 3, 6, 2, 7]
// if we pick 7 as the pivot
// new.    :  [ 3, 6, 2, 7, 11, 8, 14] 
// return the pivot index :3

/* 
There are many possible answers for nums1 depending on which number is chosen
as the pivot.
E.g., if 3 is chosen as the pivot, the below are some solutions because
numbers smaller than 3 are to the left and larger numbers are to the right
[2, 3, 7, 6, 11, 8, 14]
[2, 3, 11, 8, 7, 6, 14]
[2, 3, 8, 7, 11, 6, 14]
[2, 3, 8, 6, 14, 7, 11]
*/
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @see https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
 *    visualization of quickSort. Focus only on the first cycle of the visualization
 *    for the partition portion only.
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
 function partition(nums = [], left = 0, right = nums.length - 1) {
    var pivot = nums[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j){
      console.log(nums);
      while (nums[i] < pivot){
        i++;
      }
      while (nums[j] > pivot){
        j--;
      }
      if (i <= j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]; // ?? probably !
        i++;
        j--;
      }
    }
    return i; 
  }


//   partitioning using last element

  function partitionLastElement(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

// recursively quick sorting using the patition function above

function quickSortRecursive(arr, start, end) {
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    // Returns pivotIndex
    let index = partitionLastElement(arr, start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

// non recursive method using same partition function from above

function quickSortIterative(arr) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    stack = [];
    
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        
        // Extracting the top unsorted subarray
    	end = stack.pop();
        start = stack.pop();
        
        pivotIndex = partitionLastElement(arr, start, end);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}

// https://stackabuse.com/quicksort-in-javascript/ for quicksort tutorial

console.log(partition(nums1))


// function quickSort(nums){
//     let smallArray = []; let largeArray = [];

//     if(nums.length <= 1){
//         return nums;
//     }

//     for(let i = 1; i < nums.length; i++) {
//         if (nums[i] < nums[0]){
//             smallArray.push(nums[i]);
//         }

//         if(nums[i] >= nums[0]) {
//             largeArray.push(nums[i]);
//         }
//     }

//     return quickSort(smallArray).concat(nums[0], quickSort(largeArray));
// }




// recursive method of quick sorting

function quickSort(nums) {
	var smallArray = []; var largeArray = [];
  //defining an empty array for smaller numbers than pivot and larger numbers than pivot
	if (nums.length <= 1)
		return nums;
  //edge case, is the length less than or equal to one? if this is true, return that array. :)
	
	for (var i = 1; i < nums.length; i++) { 
    //forloop to go through all the numbers in the array
		if (nums[i] < nums[0])
			smallArray.push(nums[i]); 
    //if nums @ i is less than the pivot number (nums[0]) add to smallArray.
		if (nums[i] >= nums[0]) 
			largeArray.push(nums[i]); 
        //if nums @ i is greater than the pivot number (nums[0]) add to largeArray.
	}
	return quickSort(smallArray).concat(nums[0], quickSort(largeArray));
  //now we recursively call quickSort to go through the small array's contents. this will then use .concat to add nums[0] after that is processed. Then we concatenate the function to run quickSort with the large Array. :'D
}

console.log(quickSort(nums2));
