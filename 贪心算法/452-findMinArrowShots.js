/*
 * @Date: 2023-03-12 11:43:30
 * @Author: Fancyicookie
 */
// 题目：
// https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons/

// 输入：points = [[10,16],[2,8],[1,6],[7,12]]
// 输出：2

var findMinArrowShots = function(points) {
    // 按照数组第一位升序 [[[1,6], [2,8], [7,12], [10,16]]
    points.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = 1
    for(let i=1; i<points.length; i++) {
        // 没有重叠的区域，res++
        if(points[i][0] > points[i-1][1]) {
            res++
        } else {
            points[i][1] = Math.min(points[i-1][1], points[i][1])
        }
    }
    return res
}

points = [[10,16],[2,8],[1,6],[7,12]]
console.log(findMinArrowShots(points));