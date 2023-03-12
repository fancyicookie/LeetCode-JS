/*
 * @Date: 2022-11-17 12:05:43
 * @Author: Fancyicookie
 */
var search = function(nums, target) {
    // 不太习惯javascript，习惯了使用python
    let l = 0
    let r = nums.length - 1 
    while(l < r) {
        // math.floor(x)返回小于参数x的最大整数,即对浮点数向下取整。
        let mid = l + Math.floor((r-l) / 2)
        if (nums[mid] > target) {
            r = mid - 1
        } else if (nums[mid] < target) {
            l = mid + 1
        } else {
            return mid
        }
    }
    return -1
};

nums = [-1,0,3,5,9,12]
target = 9
console.log(search(nums,target));
