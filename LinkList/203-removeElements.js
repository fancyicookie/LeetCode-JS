/*
 * @Date: 2023-03-28 19:26:32
 * @Author: Fancyicookie
 */

// 203移除列表元素
// 给你一个链表的头节点 head 和一个整数 val ，
// 请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

import { ListNode, array2List, list2Array } from "./ListNode.js";

// 数组可以直接删除下标，并往前移动元素
// 链表定义不一样
var removeElements = function(head, val) {
    const ret = new ListNode(0, head);
    let cur = ret;
    while(cur.next) {
        if(cur.next.val === val) {
            cur.next =  cur.next.next;
            continue;
        }
        cur = cur.next;
    }
    return ret.next;
};

const nums = [1,2,6,3,4,5,6]
const head = array2List(nums)
const val = 6

// 结果应该是对的，就是没有显示全
console.log(removeElements(head, val));
// console.log(head.next.next.next.val); // 4
console.log(list2Array(removeElements(head, val)));