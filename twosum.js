// 2018/07/16 - KEEP CALM & LEARNING

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        for(var j = i+1; j < nums.length; j++ ) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};

/**
 * NOTICE: `forEach` will not stop even if you use `return` in the loop
 * NOTICE: return indice should not be the same, please find another number in the array
 * @param {Array<Number>} nums 
 * @param {Number} target 
 */
var newTwoSum = function(nums, target) {
    var numMap = {}
    nums.forEach(function(num, index){
        if(!numMap[num]) {
            numMap[num] = index
        }
    })
    for(var i = 0; i < nums.length; i++) {
        if(numMap[target - nums[i]] && numMap[target - nums[i]] !== i) { // except num[i]
            return [i, numMap[target - nums[i]]]
        }
    }
}
