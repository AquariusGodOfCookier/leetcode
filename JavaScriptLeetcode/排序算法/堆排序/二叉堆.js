// 二叉堆是一个特殊的二叉树，他是一颗完全二叉树，即除了最后一层，每一层都有左子节点与右子节点，并且最后一层的叶节点尽可能都是左侧子节点

// 堆特性，二叉堆不是最大堆就是最小堆
// 最大堆 父节点的键值大于等于它每个子节点的键值
// 最小堆 父节点的键值小于等于它每个子节点的键值
// 二叉堆首先要了解一个知识点，由于是用数组表示，获取当前索引的左侧子节点(如果存在)2*index+1
// 获取当前索引的右侧子节点(如果存在)2*index+2
// 获取当前索引的父节点 index/2;
// 序号>=floor(N/2)的都是叶子节点

// 二叉堆就是一种用数组表示二叉树的方法
// 堆数据解构的主要操作
// insert 插入节点
// delete 删除节点
// max-heapify: 调节分支节点堆性质
// rebuildHeap: 重新构建整个二叉堆
// sort: 排序
class Heap{
    constructor(arr){
        this.data = [...arr];
        this.size = this.data.length;
    }
    rebuildHeap(){
        // 由于堆特性，序号>=floor(size/2)的都是叶子节点,so
        for(let i=Math.floor(this.size/2)-1;i>=0;i--){
            this.maxHeapify(i)
        }
    }
    maxHeapify(i){
        // 用于调节当前分支的堆特性
        // 默认当前节点为最大值
        // 构建最大堆
        let max = i;
        if(i>=this.size){
            return;
        }
        // 获取当前节点的左子节点与右子节点
        let leftNode = 2*i+1;
        let rightNode = 2*i+2;
       // 求当前节点与左右两节点中的最大值
       if(leftNode<this.size && this.data[leftNode]>this.data[max]){
           max = leftNode;
       }
       if(rightNode<this.size && this.data[rightNode]>this.data[max]){
           max = rightNode;
       }
       if(max!=i){
           this.swap(this.data,i,max);
           return this.maxHeapify(max);
       }
    }
    sort(){
        this.rebuildHeap();
        for(let i=this.size-1;i>0;i--){
            this.swap(this.data,0,i);
            this.size--;
            this.maxHeapify(0);
        }
    }
    swap(arr,i,j){
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
}
// var num = [3,15,2,8,12,5,2,3,4,7];
// var buildHeap = new Heap(num);
// console.log(buildHeap)
// buildHeap.sort();
// console.log(buildHeap)
var num = [3,15,2,8,12,5,2,3,4,7];
var buildHeap = new Heap(num);
console.log(buildHeap)
buildHeap.rebuildHeap();
console.log(buildHeap)
// console.log(buildHeap);
// buildHeap.sort();
// console.log(buildHeap);