/**
 * @desc: 单向链表
 * @author: tankm
 * @since: 2021-05-23 23:03:20
 */
// import CreateNode from './common';

/**
 * 单向链表
 */
function LinkList() {
	/**
	 * 链表头部指针
	 */
	this.head = null;
	/**
	 * 链表长度
	 */
	this.length = 0;
}

/**
 * 链表子节点构造函数
 * @param {object} data
 */
function CreateNode(data) {
  this.data = data;
  this.next = null;
}

/**
 * 增加链表子节点
 * @param {object} data 
 */
function append(data) {
	const node = new CreateNode(data);
	if (!this.head) {
		this.head = node;
		this.length += 1;
	} else {
		let point = this.head;
		while(point.next) {
			point = point.next
		}
		point.next = node;
		this.length += 1;
	}
}

/**
 * 链表序列化
 */
function toString() {
	let str = '';
	let current = this.head;
	while(current) {
		str += `${current.data} `;
		current = current.next
	}
	return str;
}

LinkList.prototype.append = append;
LinkList.prototype.toString = toString;

const linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);
console.log(linkList.length)
console.log(linkList.toString())
