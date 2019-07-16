// define BinaryHeap: binary heap is tree with some rule.
// compare max and min heaps:in max Binaryheap value of(PARENT) >value of(Child)
                            // in min Binaryheap value of(PARENT) < value of(Child)
// implemet heaps,
//why we use binary heap.
//****/when we insert in heap.left is filled 1st then right is filled
//***for any index of an array naiveSearch=>1.left child is stored at 2n+1;
//                                          2.right child is at 2n+2


//for any child node at index n, its parents is at index =>=> Math.floor((n-1)/2)
//process to insert==> add at the end; compare and bubble up


//remove the max value form the heap
// remove root
//replace with most recently added
//adjust (sink down)
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        var idx=this.values.length-1;
        const element=this.values[idx];
        while (idx > 0){
           
            let parentIdx=Math.floor((idx-1)/2);
            // var parent = this.values[parentIdx];
            if (this.values[idx] <= this.values[parentIdx]) break;
            else {
                   
                    // swapping
                    var temp = this.values[idx];
                    this.values[idx] = this.values[parentIdx]
                    this.values[parentIdx] = temp;
                    //swapping node number
                    idx = parentIdx;
                // console.log(this.values[idx], this.values[parentIdx],temp, idx, parentIdx)
              
              
            }
        }
    }
    extractMax(){
        //edge case comeback this
        const max=this.values[0];
        const end=this.values.pop();
        this.values[0]=end;
        //tickeldown
        this.skinDown();
        return max;
    }
    skinDown(){
        let idx=0;
        const length=this.values.length;
        const element=this.values[0];
        while(true){
            let leftChildIdx=2*idx+1;
            let rightChildIdx=2*idx+2;
            let leftChild,rightChild;
            let swap=null;
            if(leftChildIdx<length){
                leftChild=this.values[leftChildIdx];
                if(leftChild>element){
                    swap=leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if((swap===null&&rightChild > element)||(swap!==null&&rightChild>leftChild)) {
                    swap = rightChildIdx;
                }
            }
            if(swap===null) break;
            this.values[idx]=this.values[swap];
            this.values[swap]=element;
            idx=swap;
        }
    }
}

const mbh=new MaxBinaryHeap();
arr = [41, 27, 39, 33, 18, 8,100, 12, 55]
arr.forEach(item=>mbh.insert(item));
console.log(mbh.values)
console.log(mbh.extractMax());
console.log(mbh.values)
console.log(mbh.extractMax());
console.log(mbh.values)
console.log(mbh.extractMax());
console.log(mbh.values)
