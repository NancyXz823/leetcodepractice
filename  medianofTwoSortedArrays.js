function findMedian(medianIndex, nums) {
    if(medianIndex.length === 1) {
        return nums[medianIndex[0]]
    }
    return (nums[medianIndex[0]] + nums[medianIndex[1]]) / 2
}
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var length = nums1.length + nums2.length
    if(length === 0) {
        return 0
    }

    var index = 0;
    var isOdd = length % 2 === 1
    var medianIndex = [Math.floor(length / 2)]
    if(!isOdd) {
        medianIndex = [medianIndex[0] - 1, medianIndex[0]]
    }
    var median = 0

    // NOTICE: while 循环中不能使用 return 来终止while loop
    while (nums1.length || nums2.length) {
        if(nums1.length === 0) {
            median =  findMedian(medianIndex.map(i => i - index), nums2)
            break
         }
         if(nums2.length === 0) {
            median =  findMedian(medianIndex.map(i => i - index), nums1)
            break
         }
        if(index === medianIndex[0]) {
            if(isOdd) {
                if(nums2.length === 0 || nums1.length === 0) {
                    median = nums2[0] || nums1[0]
                } else {
                    median = Math.min(nums2[0], nums1[0])
                }
               
            } else {
                if(nums2.length === 0) {
                    median = (nums1[0] + nums1[1]) / 2
                }else if(nums1.length === 0) {
                    median = (nums2[0] + nums2[1]) / 2
                }else if(nums1[0] < nums2[0]) {
                   if (nums1[1]) {
                    median = (nums1[0] + Math.min(nums1[1], nums2[0]))/ 2
                   } else {
                       median = (nums1[0] + nums2[0]) / 2
                   }   
                } else {
                    if(nums2[1]) {
                        median = (nums2[0] + Math.min(nums2[1], nums1[0]))/2
                    } else {
                        median = (nums1[0] + nums2[0]) / 2
                    }
                }
            }
            break
        }

        if(nums1[0] < nums2[0]) {
            nums1.splice(0, 1)
        } else {
            nums2.splice(0, 1)
        }
        index++
    }
    return median
};

console.log(findMedianSortedArrays([2,3,4,5], [1]))