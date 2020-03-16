class node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(key) {
        if (this.root == null) {
            this.root = new node(key);
        } else {
            this.insertNode(this.root, new node(key));
        }
    }
    insertNode(node, newnode) {
        if (newnode.key < node.key) {
            if (node.left == null) {
                node.left = newnode;
            } else {
                this.insertNode(node.left, newnode);
            }
        } else {
            if (node.right == null) {
                node.right = newnode;
            } else {
                this.insertNode(node.right, newnode);
            }
        }
    }
    // 搜索树中的值
    // 搜索树中的最小值 ,在二叉搜索树中，最小值就是最左侧，叶子节点
    min() {
        return this.minNode(this.root);
    }
    minNode(node) {
        let current = node;
        while (node != null && current.left != null) {
            current = current.left;
        }
        return current;
    }
    // 搜索树中的最大值，最大值就是最右侧叶子节点
    max() {
        return this.maxNode(this.root);
    }
    maxNode(node) {
        let current = node;
        while (current != null && current.right != null) {
            current = current.right;
        }
        return current;
    }
    // 前序遍历
    preOrder(callback){
        this.preOrderNode(this.root,callback);
    }
    preOrderNode(node,callback){
        if(node!=null){
            callback(node.key);
            this.preOrderNode(node.left,callback);
            this.preOrderNode(node.right,callback);
        }
    }
    // 搜索树中的特定值
    search(key) {
        return this.searchNode(this.root, key);
    }
    searchNode(node, key) {
        if (node == null) {
            return false;
        }
        if (node.key > key) {//如果要搜索的key在当前节点的左侧
            return this.searchNode(node.left, key)
        } else if (node.key < key) { // 如果要搜索的key在当前节点的右侧
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }
    // 移除树中一个节点
    remove(key) {
        this.root = this.removeNode(this.root, key);
    }
    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        if (node.key > key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (node.key < key) {
            node.right  = this.removeNode(node.right, key);
            return node;
        } else {
            //找到这个对应的健与key相等
            // 第一种情况，我们要删除的这个节点是个外部节点，也就是他的left与right都为null
            if (node.left == null && node.right == null){
                node = null;
                return node; //我们把这个值定义为null，但是还得处理指针，所以返回null让他的父节点引用为null,这也是为什么前面那几个内容全部return node
            }
            // 第二种情况，我们要删除的这个节点有一个左侧或者右侧的节点
            if(node.left==null){ // 如果他有一个右侧的节点
                node = node.right;
                return node; //那就让他的父节点直接指向他的右侧子叶
            }else if(node.right==null){
                node =  node.left;//
                return node; // 让他的父节点直接指向他的左侧子叶
            }
            // 第三中情况，我们要删除的这个节点有两个子节点
            if(node.left !=null && node.right!=null){
                // 因为二叉搜索树的特性是根节点的key值永远比左侧大，比右侧小
                // 所以我们删掉这个节点，它如果既有左子树，又有右子树，我把这个节点删掉，我就得在右侧中寻找一个最小的点来替代这个节点
                // 先找到这个节点右子树中最小的点
                let minKey = this.minNode(node.right);
                node.key = minKey.key;
                // 我把这个最小的点拿出来替换成这个根节点，所以需要把这个点删除掉
                node.right = this.removeNode(node.right,minKey.key);
                return node;
            }
        }
    }
}
let tree = new binarySearchTree();
tree.insert(11);
tree.insert(15);
tree.insert(10);
tree.insert(14);
tree.insert(8);
// console.log(tree.min().key);
// console.log(tree.max().key);
tree.preOrder((value)=>{console.log(value)});
console.log(tree.search(11))
tree.remove(11);
console.log(tree.search(11));
tree.preOrder((value)=>{console.log(value)});
