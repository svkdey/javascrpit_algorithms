//searching is very easy in BST;
// ||compare and if > go right or if < go left

class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        const newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }else{
            var current=this.root;
            while(true){
                if (value === current.value) return "Duplicate value can't be insertedd";
                if(value<current.value){
                    if(current.left===null){
                        current.left=newNode;
                        return this;
                    }else{
                        current=current.left;
                    }
                }
                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                 else {
                    current = current.right;
                }
            }
            }
        }
    }
    find(value){
        if(!this.root) return null;
        else{
            var current=this.root;
            var found=false;
            while(current && !found){
                if(value<current.value){
                    current=current.left;
                }
                else if (value > current.value) {
                    current = current.right;
                }
                else{
                    found=true;
                }
            }
            return current;
        }
        
    }
}

//      10
//  5       13  
//2   s4   11  16

const tree=new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(10);
tree.insert(2);
tree.insert(4);
// tree.insert(13);
console.log(tree.find(10))

//description: insertion=>O(log n)
//             search => O(log n)