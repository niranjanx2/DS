/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * Remove Elements : 27 Leetcode
 */
var removeElement = function(nums, val) {
    let j = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[j] === val && nums[i] === val){
            continue;
        } else if(nums[j] === val){
            nums[j] = nums[i];
            nums[i] = val;
            j++;
        } else {
            j++;
        }
    }  

    return j;


};