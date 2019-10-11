class node{ //节点(健)类
    constructor(key){
        this.key = key; // 节点值
        this.left = null;// 左侧子节点引用
        this.right = null; // 右侧子节点引用
    }
}
class binarySearchTree{
    constructor(){
        this.root = null;
    }
    // 插入树
    insert(key){
        if(this.root==null){  // 如果插入的是根节点，第一个节点，就新建一个节点
            this.root = new node(key);
        }else{
            this.insertNode(this.root,new node(key));
        }
    }
    insertNode(node,newnode){
        if(newnode.key<node.key){ //二叉搜索树，左侧叶子节点小于根节点，根节点小于右侧叶子节点
            if(node.left==null){//使用递归创建树更简单
                node.left = newnode;
            }else{
                this.insertNode(node.left,newnode);
            }
        }else{
            if(node.right==null){
                node.right = newnode;
            }else{
                this.insertNode(node.right,newnode);
            }
        }
    }
    // 中序遍历  先左后根最后右
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root,callback);
    }
    inOrderTraverseNode(node,callback){
        if(node!=null){
            this.inOrderTraverseNode(node.left,callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right,callback);
        }
    }
    // 前序遍历 先根 同级先左后又
    preOrderTraverse(callback){
        this.inOrderTraverseNode(this.root,callback);
    }
    preOrderTraverseNode(node,callback){
        if(node!=null){
            callback(node.key);
            this.preOrderTraverseNode(node.left,callback);
            this.preOrderTraverseNode(node.right,callback);
        }
    }
    // 后序遍历 先左后右最后跟
    beOrderTraverse(callback){
        this.beOrderTraverseNode(this.root,callback);
    }
    beOrderTraverseNode(node,callback){
        if(node!=null){
            this.beOrderTraverseNode(node.left,callback);
            this.beOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    }
}
let tree = new binarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
const printNode = (value)=>{console.log(value)};
tree.inOrderTraverse(printNode); // 中序遍历
// tree.preOrderTraverse(printNode); // 前序遍历
// tree.beOrderTraverse(printNode); //后序遍历
// 前中后序遍历就是根的位置，前序就是先根，永远都是先左后右，中序就是先左 根 右 ， 后序就是左 右 根