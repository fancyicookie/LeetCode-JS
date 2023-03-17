/*
 * @Date: 2023-03-17 16:31:16
 * @Author: Fancyicookie
 */
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；
// 并且每块饼干 j，都有一个尺寸 s[j] 。
// 如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

// 链接：https://leetcode.cn/problems/assign-cookies

// 输入: g = [1,2,3], s = [1,1]
// 输出: 1

// 输入: g = [1,2], s = [1,2,3]
// 输出: 2

var findContentChildren = function(g, s) {
    // 排序
    g = g.sort((a, b) => a - b)
    s = s.sort((a, b) => a - b)
    let res = 0
    let idx = s.length - 1
    for(let i=g.length-1; i>=0; i--) {
        // 最大的饼干 给 胃口值最大的孩子
        if(idx >= 0 && s[idx] >= g[i]) {
            res++
            idx--
        }
    }
    return res
}

g = [1,2,3]
s = [1,2]
console.log(findContentChildren(g,s));