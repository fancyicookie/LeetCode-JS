/*
 * @Date: 2023-03-11 16:15:03
 * @Author: Fancyicookie
 */
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 快慢指针，慢指针可以标记现在的位置，快指针去对比数据

var removeElement = function(nums, val) {
    let n = nums.length
    let slow = 0
    for (let fast=0; fast<n; fast++) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast]
            slow += 1
        }
    }
    return slow
}

nums = [1,4,5,7,5,4,7,6]
val = 7
console.log(removeElement(nums, val));