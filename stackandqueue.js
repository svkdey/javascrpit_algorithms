// stack and queues:these are concept to do the thing.
// define stack => abstract data  collection .principal by LIFO(last in first out) ie last enter 1st enter.
// example:washing dishes
// use case =>call stack is a example;undo/redo ,routing history,use tree,graphs
// operation =>

// implement by array:

// var stack=[];
// stack.push("google.com");
// stack.push("instagram");
// stack.push("youtube");


// //the flow is stack.

// var stack=[];
// stack.unshift("create new file");
// stack.unshift("resized file");
// stack.unshift("clone");
// console.log(stack);
// stack.shift()
// console.log(stack);

//push and pop =>adding in the end and removing from the end;
//unshift and shift =>adding in the beginnig and removing at the beginning.
// removing form begining recreates indexing ,that causes low performance
// that makes O(N^2)

// implementation by SSL

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.size=0;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.first){
            this.first=newNode;
            this.last=newNode
        }else{
            var temp=this.first;
            this.first=newNode;
            this.first.next=temp;
           
        }
         this.size++;
        return this.size;

    }
    pop(){
        if(!this.first) return null;
        var temp=this.first;
        if(this.first===this.last){
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return temp.value;
    }
}
// const stack=new Stack();
// stack.push(1000);
// stack.push(2000);
// stack.push(1500);
// console.log(stack.pop());
// console.log(stack)

// Big O of stack=>O(1) in insertion and removal


// queue=>define stack => abstract data  collection .principal by FIFO(FIRST in first out) 
// ie 1st enter 1st enter.
// example:waiting in ticket counter
//printing queues.
//downloading in chrome

//array method:
// entering in queue=>enqueue;
// exiting queue=>dequeue

// var q=[];
// adding at end
// q.push(1);
// console.log(q);
// q.push(2);
// console.log(q);
// q.push(3);
// console.log(q);
// q.shift();
// console.log(q)
// q.shift();
// console.log(q)
//we have to remove from begining and that makes array reindexing.low performance
//another method can be unshift-pop combination that adds the queue from beginning and pops from end

// class Node{
//     constructor(){
//         this.value=value;
//         this.next=null;
//     }
// }
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    enqueue(val){
        const newNode=new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last=newNode;
        }else{
            var temp = this.first;
            this.first=newNode;
            newNode.next=temp;
        }
        this.length++;
        return this.length;

    }
    dequeue(){
        if(!this.first) return null;
        var temp=this.first;
        if (this.first===this.last) {
            this.last=null;
        }
        this.first=this.first.next;
        --this.length;
        return temp.value;

    }
}
const q=new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(10)
console.log(q.enqueue(15))
console.log(q)
console.log(q.dequeue())
console.log(q)
//discussion: insertion and removal=> O(1)