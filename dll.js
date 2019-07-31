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
        if (index === 0) {
            this.shift(value)
        }
        if (index === this.length - 1) {
            this.pop(value)
        }
        // var newNode = new Node(value);
       else{var beforenode = this.get(index-1);
        var node = this.get(index);
        var afterNode=this.get(index+1);
        beforenode.next=node.next;
        afterNode.prev=node.prev;}
        node.next=null;
        node.prev=null;
        this.length--;
        return this;

        
    }
    insert(value, index){
        if(index===0){
            this.unshift(value)
            return this;
        }
        if(index===this.length-1){
            this.push(value)
            return this;
        }else{
            var newNode = new Node(value);
            var node = this.get(index-1);
            var afternode = this.get(index);
            newNode.next = node.next;
            node.next = newNode;
            newNode.prev = node;
            afternode.prev = newNode;
        }
   
    this.length++;
    return this;
    }
    set(value,index){
        // var newNode = new Node(value);
        var node = this.get(index);
       
        node.value=value;
        return this;
    }
    reverse(){

    }
    get(index){
        var count;
        if(this.length<=index||index<0) return "not valid index";
        if(index>Math.floor(this.length/2)){
            console.log("greater mid")
            var current = this.tail;
            count = this.length-1;
            while (count !== index) {
                current = current.prev;
                --count;
            }
            return current;
        }
        else if (index === 0){

            return this.head
        }else{
            console.log("lesser mid")
            var current=this.head;
            count = 0;
            while (count!==index){
                current=current.next;
                count++;
            }
            return current;
        }

    }
}

var d=new DoublyLinkList();
d.push(10);
d.push(20);
d.push(30);
d.push(40);
d.push(5);
d.push(4);
d.push(355);
d.push(454);
// console.log("at d", d.pop())
// d.shift()
// d.unshift(50);
console.log(d.insert(55,0));
d.remove(3)
console.log(d)
// for(var i=0;i<9;i++){
//     console.log(d.get(i),i)
// }


// o(N)==>
// insert-o(1)
// removal-o(1)
//searching -o(n/2) =>o(n)
// access-o(n)