/*
 * @Date: 2023-03-21 20:42:19
 * @Author: Fancyicookie
 */

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

var maxSubArray = function(nums) {
    let res = -Infinity
    let count = 0
    for(let i = 0; i < nums.length; i++) {
        count += nums[i]
        if(count > res) {
            res = count
        }
        if(count < 0) {
            count = 0
        }
    }
    return res
};