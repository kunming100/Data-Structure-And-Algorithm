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
 * @param {any} data
 */
function CreateNode(data) {
	/**
	 * 链表节点的数据
	 */
  this.data = data;
	/**
	 * 链表节点的下一个节点的指针
	 */
  this.next = null;
}

/**
 * 增加链表子节点
 * @param {any} data
 */
function append(data) {
  const node = new CreateNode(data);
  if (!this.head) {
    this.head = node;
    this.length += 1;
  } else {
    let point = this.head;
    while (point.next) {
      point = point.next;
    }
    point.next = node;
    this.length += 1;
  }
}

/**
 * 插入链表子节点
 * @param {any} data
 * @param {number} position
 */
function insert(data, position) {
  if (position > this.length || position < 0) return false;
  const node = new CreateNode(data);
  let current = this.head;
  if (position === 0) {
    this.head = node;
    node.next = current;
  } else {
    let prev = null;
    let index = 0;
    while (index <= position) {
      if (index === position) {
        prev.next = node;
        node.next = current;
        this.length += 1;
      } else {
        prev = current;
        current = current.next;
      }
      index += 1;
    }
  }
}

/**
 * 根据节点值移除链表子节点
 * @param {any} data 
 * @returns {any}
 */
function remove(data) {
  // 链表为空
	if (!this.head) return null;
  // 链表第一项即是目标值
	if (this.head.data === data) {
    const temp = this.head;
		this.head = this.head.next;
		return temp;
	}

  let prev = this.head;
	let current = this.head.next;
	while(current) {
		if (current.data === data) {
			prev.next = current.next;
      this.length -= 1;
			return current;
		} else {
			prev = current;
			current = current.next;
		}
	}
	return current;
}

/**
 * 根据index移除链表子节点
 * @param {number} position 
 * @returns {any}
 */
function removeAt(position) {
  if (position < 0 || position >= this.length) return null;
  if (position === 0) {
    const temp = this.head;
    this.head = this.head.next;
    return temp;
  }
  let index = 1;
  let prev = this.head;
  let current = this.head.next;
  while(index <= position) {
    if (position === index) {
      prev.next = current.next;
      this.length -= 1;
      return current;
    }
    prev = current;
    current = current.next;
    index += 1;
  }
}

/**
 * 获取链表子节点
 * @param {number} position
 * @returns {number}
 */
function getNode(position) {
  let result = null;
  if (position < 0 || position >= this.length) return result;
  if (position === 0) {
    result = this.head;
  } else {
    let index = 0;
    let current = this.head;
    while (index <= position) {
      if (index === position) {
        result = current;
      }
      current = current.next;
      index += 1;
    }
  }
  return result;
}

/**
 * 更新链表子节点
 * @param {number} position
 * @param {any} data
 */
function update(position, data) {
  const target = this.getNode(position);
  target.data = data;
}

/**
 * 链表的indexOf方法
 * @param {any} data
 * @returns {number}
 */
function indexOf(data) {
  let index = 0;
  let current = this.head;
  while (current) {
    if (current.data === data) {
      return index;
    }
    current = current.next;
    index += 1;
  }
  return -1;
}

/**
 * 链表序列化
 * @returns {string}
 */
function toString() {
  let str = "";
  let current = this.head;
  while (current) {
    str += `${current.data} `;
    current = current.next;
  }
  return str;
}

LinkList.prototype = {
  ...LinkList.prototype,
  append,
  insert,
  remove,
  removeAt,
  getNode,
  update,
  indexOf,
  toString,
};

const linkList = new LinkList();
linkList.append("abc");
linkList.append("def");
linkList.append("ghi");
linkList.append("jkl");
console.log(linkList.length);
console.log(linkList.toString());
linkList.insert("xyz", 2);
console.log(linkList.length);
console.log(linkList.toString());
console.log(linkList.getNode(1));
console.log(linkList.indexOf("xyz"));
linkList.update(1, "uvw")
console.log(linkList.toString());
console.log(linkList.remove('uvw'));
console.log(linkList.removeAt(3));
console.log(linkList.toString());
