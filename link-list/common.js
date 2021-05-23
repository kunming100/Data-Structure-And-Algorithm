/**
 * @desc: 链表公共模块
 * @author: tankm
 * @since: 2021-05-23 23:14:53
 */

/**
 * 链表子节点构造函数
 * @param {object} data
 */
export default function CreateNode(data) {
  this.data = data;
  this.next = null;
}
