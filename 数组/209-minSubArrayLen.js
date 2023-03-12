
// 给定一个含有 n 个正整数的数组和一个正整数 target 。
// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。
// 如果不存在符合条件的子数组，返回 0 。

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

// 暴力解法
var minSubArrayLen = function(target, nums) {
    var res = Number.MAX_VALUE
    for(let i=0; i<nums.length; i++) {
        var sum = 0
        var subLength = 0
        for( let j=i; j<nums.length; j++) {
            sum = sum + nums[j]
            subLength += 1
            if (sum >= target) {
                res = subLength < res? subLength : res
                break
            }
        }
    }
    if (res === Number.MAX_VALUE) {
        res = 0
    }
    return res
}

// 滑动窗口解法
var minSubArrayLen2 = function(target, nums) {
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity

    while(end < len) {
        sum += nums[end]
        while(sum >= target) {
            ans = Math.min(ans, end-start+1)
            sum -= nums[start]
            start++
        }
        end++
    }
    return ans === Infinity ? 0 : ans
}


target = 7
nums = [2,3,1,2,4,3]
console.log(minSubArrayLen2(target, nums));