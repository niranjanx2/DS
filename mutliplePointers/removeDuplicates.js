/**
 * @param {number[]} nums
 * @return {number}
 * Remove Duplicates from Sorted Array: Leetcode problem 26
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i=0;
    for(let j=1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j]
        }
    }

    return ++i;
};