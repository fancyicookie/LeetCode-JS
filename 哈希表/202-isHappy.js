/*
 * @Date: 2023-03-30 17:01:56
 * @Author: Fancyicookie
 */
// 编写一个算法来判断一个数 n 是不是快乐数。
// 链接：https://leetcode.cn/problems/happy-number

// 「快乐数」 定义为：

// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

var isHappy = function(n) {
    const getSum = (num) => {
        let sum = 0
        while (num) {
            sum += (num % 10) ** 2
            num = Math.floor(num / 10)
        }
        return sum
    }
    let m = new Map()
    while (true) {
        if (m.has(n)) return false
        if (n === 1) return true
        m.set(n, 1)
        n = getSum(n)
    }
};

n = 19
console.log(isHappy(n));