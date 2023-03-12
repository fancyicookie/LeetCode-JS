/*
 * @Date: 2023-03-12 11:14:58
 * @Author: Fancyicookie
 */
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 思路:
// 因为字符a到字符z的ASCII是26个连续的数值，所以字符a映射为下标0，相应的字符z映射为下标25。
// 再遍历 字符串s的时候，只需要将 s[i] - ‘a’ 所在的元素做+1 操作即可，
// 并不需要记住字符a的ASCII，只要求出一个相对数值就可以了。 

var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    const resSet = new Array(26).fill(0)
    // 返回指定位置的字符的 Unicode 编码
    const base = "a".charCodeAt()
    for(const i of s) {
        resSet[i.charCodeAt() - base]++
    }
    for(const i of t) {
        if(!resSet[i.charCodeAt() - base]) {
            return false
        }
        resSet[i.charCodeAt() - base]--
    }
    return true
}

s = 'anagram'
t = 'nagaram'
console.log(isAnagram(s,t));