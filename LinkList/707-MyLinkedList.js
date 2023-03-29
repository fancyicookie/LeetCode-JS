/*
 * @Date: 2023-03-28 20:36:40
 * @Author: Fancyicookie
 */
// 链接：https://leetcode.cn/problems/design-linked-list
// 设计链表，这里的链表是从一个节点慢慢增加的，与数组转化成链表是不一样的！

// 示例：
// 输入
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// 输出
// [null, null, null, null, 2, null, 3]

// 解释
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
// myLinkedList.get(1);              // 返回 2
// myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
// myLinkedList.get(1);              // 返回 3

class LinkNode {
    constructor(val, next) {
        this.val = val
        this.next = next
    }
}

var MyLinkedList = function() {
    this._size = 0
    this._tail = null
    this._head = null
}

MyLinkedList.prototype.getNode = function(index) {
    if(index < 0 || index > this._size) return null
    let cur = new LinkNode(0, this._head)
    while(index-- >= 0) {
        cur = cur.next
    }
    return cur
}
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this._size) return -1
    return this.getNode(index).val
}

MyLinkedList.prototype.addAtHead = function(val) {
    const node = new LinkNode(val, this._head)
    this._head = node
    this._size++
    if(!this._tail) {
        this._tail = node
    }
}

MyLinkedList.prototype.addAtTail = function(val) {
    const node = new LinkNode(val, null)
    this._size++
    if(this._tail) {
        this._tail.next = node
        this._tail = node
        return
    }
    this._tail = node
    this._head = node
}


MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index > this._size) return
    if(index <= 0) {
        this.addAtHead(val)
        return
    }
    if(index === this._size) {
        this.addAtTail(val)
        return
    }

    const node = this.getNode(index - 1)
    node.next = new LinkNode(val, node.next)
    this._size++
}

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this._size) return
    if(index === 0) {
        this._head = this._head.next
        if(index === this._size - 1) {
            this._tail = this._head
        }
        this._size--
        return
    }

    const node = this.getNode(index - 1)
    node.next = node.next.next
    if(index === this._size - 1) {
        this._tail = node
    }
    this._size--
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
myLinkedList.get(1);              // 返回 2
myLinkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
myLinkedList.get(1);              // 返回 3
console.log(myLinkedList);