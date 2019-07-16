//what is data structure?
// DSs are collections of values,and relationship btw them,
// and functions and operation can be applied on them.

// Differrent DS excel at diff things.some are highly specialized and some can be general.
//just u need to know when and how to use them

//singly link list
// =>it has 3 element head,tail,length
// 0->4->7->33->1
// head=0 tail=1 length=5 link is called as next

class Node{
    constructor(val){
        this.val=val;
        this.next=null
    }
}

// var first=new Node("hi");
// first.next=new Node("Souvik");
class SinglyLiskList{
    constructor(){
        this.head=null,
        this.tail=null,
        this.length=0
    }
    push(val){
        var newNode=new Node(val)
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
           
        }
        else{
            this.tail.next = newNode;
            this.tail=newNode
         
        }
        this.length++;
        return this;
    }
    traverse(){
        var current=this.head;
        while(current){
            console.log(current.val);
            current=current.next
        }
    }
    pop(){
        var current=this.head;
        if(!current) return null;
        var newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
    //deleting at begining
    shift(){
        var current = this.head;
        if (!current) return null;
        var newHeadtoBeRemoved=current;
        this.head=current.next;
        this.length--;
        return newHeadtoBeRemoved;
    }
    //adding at begining
    unshift(val){
        var newNode=new Node(val)
        var current=this.head;
        if(!current){
            this.head=newNode;
            this.tail=this.tail;
            this.length++
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
            this.length++;
        }
    }
    getIndex(val){
        var count=0;
        if(val>0){
            var current = this.head;
            while (current) {
                
               if(current.val===val){
                   break;
               };
                count++;
               current=current.next;
               

            }
        }
        return count < this.length ?`index number is ${count}`:"not found"
    }
    getByindex(val){
        if(val<0||val>this.length) return null;
        else{
            var current = this.head;
            for(var i=0;i<this.length;i++){
                if(i===val){
                    return current
                }
                current=current.next;
            }
        }
    }
    //updating value
    set(index,value){
        if(!this.getByindex(index)) return false;
        else{
            //method 1:
            var foundOne = this.getByindex(index)
            // console.log(foundOne)
            foundOne.val=value;
            //method 2:
            // var current = this.head;
            // for (var i = 0; i < this.length; i++) {
            //     if (i === index) {
            //          current.val=value
            //     }
            //     current = current.next;
            // }
            return true
        }
    }
    insert(index,value){
        if(index<0||index>this.length) return false;
        //              !!"hi" ==>converting to boolean true
        if(index===this.length) return !!(this.push(value));
        if(index===0) return !!(this.unshift(value));

        var newNode=new Node(value);
        var pre = this.getByindex(index-1);
        var temp=pre.next;
        pre.next=newNode;
        newNode.next=temp;
        this.length++;
        return true;

    }
    remove(index){
        if (index < 0 || index >= this.length) return false;
        if (index === this.length-1) return !!this.pop()
        if (index === 0) return !!this.shift();
        else{
            var pre = this.getByindex(index - 1);
            // method 1
            // pre.next = pre.next.next;
            //method 2
            var removeNode=pre.next;
            pre.next=removeNode.next;
            this.length--;
            return true;
        }
        
    }
    // reverse(){

    // }
}

let list = new SinglyLiskList();
list.push(10);
list.push(20);
list.push(30);
list.unshift(40);
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.set(1,"hello world"))
// console.log(list.insert(1,"hello"))
list.traverse();
console.log(list.remove(2))

console.log("*******")
list.traverse();

// console.log(list.getByindex(2))