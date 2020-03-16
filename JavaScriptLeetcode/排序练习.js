var quickSort = function(arr){
    _quickSort(arr,0,arr.length-1);
    return arr;
}
var _quickSort = function(arr,left,right){
    let low = left;
    let high = right;
    let base = left;
    if(low>=high){
        return arr;
    }
    while(low<high){
        while(high>base && arr[high]>=arr[base]){
            high--;
        }
        while(low<high && arr[low]<=arr[base]){
            low++;
        }
        [arr[base],arr[high],arr[low]] = [arr[high],arr[low],arr[base]];
        base = low;
    }
    _quickSort(arr,left,base-1);
    _quickSort(arr,base+1,right);
    return arr;
}
var insertSort = function(arr){
    let preIndex=0;
    let current = 0;
    for(let i=1;i<arr.length;i++){
        preIndex = i-1;
        current = arr[i];
        while(preIndex>=0 && arr[preIndex]>=current){
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
var mergeSort = function(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return _mergeSort(mergeSort(left),mergeSort(right));
}
var _mergeSort = function(left,right){
    let arr = [];
    while(left.length&&right.length){
        if(left[0]>right[0]){
            arr.push(right.shift());
        }else{  
            arr.push(left.shift());
        }
    }
    while(left.length){
        arr.push(left.shift());
    }
    while(right.length){
        arr.push(right.shift());
    }
    return arr;
}
var selectSort = function(arr){
    for(let i=0;i<arr.length-1;i++){
        let max = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[max]){
                max = j;
            }
        }
        if(max!=i){
            [arr[max],arr[i]] = [arr[i],arr[max]];
        }
    }
    return arr;
}
class HeapSort{
    constructor(arr){
        this.data = [...arr];
        this.size = this.data.length;
    }
    sort(){
        this.rebuildMaxHeap();
        for(let i=this.size-1;i>=0;i--){
            [this.data[0],this.data[i]] = [this.data[i],this.data[0]];
            this.size--;
            this.maxHeapify(0);
        }
    }
    rebuildMaxHeap(){
        for(let i=Math.floor(this.size/2);i>=0;i--){
            this.maxHeapify(i);
        }
    }
    maxHeapify(i){
        let max = i;
        if(max>=this.size){
            return;
        }
        let leftNode = 2*i+1;
        let rightNode = 2*i+2;
        if(leftNode<this.size && this.data[leftNode]>this.data[max]){
            max = leftNode;
        }
        if(rightNode<this.size && this.data[rightNode]>this.data[max]){
            max = rightNode;
        }
        if(max!=i){
            [this.data[i],this.data[max]] = [this.data[max],this.data[i]];
            this.maxHeapify(max);
        }
    }
}
var nums = [2, 3, 1, 5, 6, 99, 0, -9, -6, 8];
console.log(quickSort(nums));
console.log(insertSort(nums));
console.log(mergeSort(nums));
console.log(selectSort(nums));
var heap = new HeapSort(nums);
heap.sort();
console.log(heap.data);
// console.log(heapSort(nums));