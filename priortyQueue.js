//PriortyQueue=>(its a concept implemented by HEAPS mainly,but can be implemented by arry,ssl etc)
// ds where every element has a priorty.elements with higher priorty 
// are served before elements with lower priorty
//big o notation for priort queue is o(ln n)
class Node {
    constructor(val, priorty) {
        this.val = val;
        this.priorty = priorty;
    }
}
class PriortyQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val,priorty) {
        let newNode=new Node(val,priorty)
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        var idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {

            let parentIdx = Math.floor((idx - 1) / 2);
            var parent = this.values[parentIdx];
            if (element.priorty <= parent.priorty) break;
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
    dequeue() {
        //edge case comeback this
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        //tickeldown
        this.skinDown();
        return max;
    }
    skinDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priorty > element.priorty) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priorty > element.priorty) || (swap !== null && rightChild.priorty > leftChild.priorty)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}


let ER=new PriortyQueue();
ER.enqueue("common cold",1);
ER.enqueue("Gun shot", 5);
ER.enqueue("headache", 2);
ER.enqueue("heartache", 2);
ER.enqueue("broken arm", 3)
console.log(ER.values.length)
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())
console.log(ER.dequeue())