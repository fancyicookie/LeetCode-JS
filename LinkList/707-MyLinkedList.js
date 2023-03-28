/*
 * @Date: 2023-03-28 20:36:40
 * @Author: Fancyicookie
 */

// 设计链表，这里的链表是从一个节点慢慢增加的

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