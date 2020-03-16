//  对称二叉树
// 给定一个二叉树，检查它是否是镜像对称的。
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// 说明:
// 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val){
    this.val = val;
    this.left = null;
    this.right = null;
}
var isSymmetric = function(root) {
    return _isSymmetric(root,root);
};
var _isSymmetric = function(leftNode,rightNode){
    if(leftNode == null && rightNode == null){
        return true;
    }
    if(leftNode == null || rightNode == null){
        return false;
    }
    if(leftNode.val == rightNode.val){
        return _isSymmetric(leftNode.left,rightNode.right) && _isSymmetric(leftNode.right,rightNode.left);
    }else{
        return false;
    }
}
var root = [1,2,2,3,4,4,3];
var root2 = [1,2,2,null,3,null,3];
console.log(isSymmetric(root2));