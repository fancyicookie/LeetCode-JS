/*
 * @Date: 2023-03-11 16:24:46
 * @Author: Fancyicookie
 */
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]

var sortedSquares = function(nums) {
    let n = nums.length
    let r = n-1
    let k = n-1
    let l = 0
    var arr = new Array(n)
    while(l <= r) {
        if(Math.abs(nums[r]) >= Math.abs(nums[l])) {
            arr[k] = nums[r]**2
            r -= 1
            k -= 1
        } else {
            arr[k] = nums[l]**2
            l += 1
            k -= 1
        }
    }
    return arr
}

nums = [-4,-1,0,3,10]
console.log(sortedSquares(nums));