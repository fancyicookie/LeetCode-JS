// 链表的定义方式
// 类 + 构造函数
// 单个节点的定义

// class的定义方式：

// class ListNode {
//     val;
//     next = null;
//     constructor(value) {
//       this.val = value;
//       this.next = null;
//     }
// }
// const p = new ListNode(2)
// console.log(p);

// 数组转化为链表如何做？
// leetcode节点定义

// 构造函数的定义方式
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export function array2List(arr) {
    if(arr.length === 0) {
        return null
    }
    const head = new ListNode(arr[0])
    let p = head
    for(let i = 1; i < arr.length; i++) {
        p = p.next = new ListNode(arr[i])
    }
    return head
}

export function list2Array(head) {
    const arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr
}


// arr = [1,2,3,4,5]
// console.log(array2List(arr));

// 其实就是用基本对数组的操作形成链表