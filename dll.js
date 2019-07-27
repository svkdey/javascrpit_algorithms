// each node has 2to property 1.next and prev
//  1<-->2<-->3<-->4

//more flexible====>but more memory require

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(value){
        var newNode=new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
           this.tail=newNode
        }
        this.length++;
        return this;

    }
    pop(){
        if (!this.head) return "no nodes";
        else{
            var removeNode=this.tail;
            if(this.length===1){
                this.head=null;
                this.tail = null;
            }   else{
                this.tail = removeNode.prev;
                this.tail.next = null;
                removeNode.prev=null;
                }
            }
            
        
        this.length--;
        return removeNode;
    }
    unshift(value){
        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            // var oldHead=this.head;
            this.head.prev= newNode;
            newNode.next = this.head;
            this.head=newNode;
            // oldHead.prev=newNode;
        }
        this.length++;
        return this;

    }
   shift(){
       if (!this.head) return "no nodes";
       else {
           var removeNode = this.head;
           if (this.length === 1) {
               this.head = null;
               this.tail = null;
           } else {
               this.head = removeNode.next;
               this.head.prev = null;
               removeNode.prev = null;
           }
       }


       this.length--;
       return removeNode;
    }
    traverse(){

    }
    findByValue(value){

    }
    findByIndex(){

    }
    remove(index){

    }
    insert(value,index){

    }
    reverse(){

    }
}

var d=new DoublyLinkList();
d.push(10);
d.push(20);
d.push(30);
d.push(40);
console.log("at d", d.pop())
d.shift()
d.unshift(50);
console.log(d);
// console.log(d)