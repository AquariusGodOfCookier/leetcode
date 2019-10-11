class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(key) {
        if (this.root == null) {
            this.root = new Node(key);
        } else {
            this._insert(this.root, new Node(key));
        }
    }
    _insert(root, node) {
        if (root.key > node.key) {
            if (root.left == null) {
                root.left = node;
            } else {
                this._insert(root.left, node);
            }
        } else {
            if (root.right == null) {
                root.right = node;
            } else {
                this._insert(root.right, node);
            }
        }
    }
    min(){
        return this._min(this.root);
    }
    _min(node){
        let current = node;
        while(current && current.left){
            current = current.left;
        }
        return current;
    }
    max(){
        return this._max(this.root);
    }
    _max(node){
        let current = node;
        while(current && current.right){
            current = current.right;
        }
        return current;
    }
    search(key){
        return this._search(this.root,key);
    }
    _search(node,key){
        if(node==null){
            return false;
        }
        if(node.key>key){
            return this._search(node.left,key);
        }else if(node.key<key){
            return this._search(node.right,key);
        }else{
            return true;
        }
    }
    remove(key){
       this.root =  this._remove(this.root,key);
    }
    _remove(node,key){
        if(node == null){
            return null;
        }
        if(node.key>key){
            node.left = this._remove(node.left,key);
            return node;
        }else if(node.key<key){
            node.right = this._remove(node.right,key);
            return node;
        }else{
            if(node.left==null && node.right==null){
                node = null;
                return node;
            }
            if(node.left==null){
               node = node.right;
               return node;
            }
            if(node.right==null){
                node = node.left;
                return node;
            }
            if(node.left && node.right){
                let minKey = this._min(node.right);
                node.key = minKey.key;
                this._remove(node.right,minKey.key);
                return node;
            }
        }

    }
}
class BinaryHeapSort {
    constructor(data) {
        this.data = [...data];
        this.size = this.data.length;
    }
    sort() {
        this.rebuildMaxHeap();
        for (let i = this.size - 1; i >= 0; i--) {
            [this.data[0], this.data[i]] = [this.data[i], this.data[0]];
            this.size--;
            this.maxHeapify(0);
        }
        return this.data;
    }
    rebuildMaxHeap() {
        for (let i = Math.floor(this.size / 2); i >= 0; i--) {
            this.maxHeapify(i);
        }
    }
    maxHeapify(i) {
        let max = i;
        if (max >= this.size) {
            return;
        }
        let leftNode = 2 * i + 1;
        let rightNode = 2 * i + 2;
        if (leftNode < this.size && this.data[leftNode] >= this.data[max]) {
            max = leftNode;
        }
        if (rightNode < this.size && this.data[rightNode] >= this.data[max]) {
            max = rightNode;
        }
        if (max != i) {
            [this.data[max], this.data[i]] = [this.data[i], this.data[max]];
            this.maxHeapify(max);
        }
    }
}
let tree = new BinarySearchTree();
// let arr = [11,15,10,14,8,18];
// let BinaryHeapArr = new BinaryHeapSort(arr);
// console.log(BinaryHeapArr.sort());
tree.insert(11);
tree.insert(15);
tree.insert(10);
tree.insert(14);
tree.insert(8);
tree.insert(18);
// tree.remove(18);
console.log(tree)