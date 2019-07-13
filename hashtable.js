// basic hash function by string
// function hash(key,arrLen){
//     let total=0;
//     let prime=31;
//     // prime will make the function less prone to collision.
//     for(let i=0;i<key.length;i++){

//         let value=key.charCodeAt(i)-96;
//         total=(total*prime+value)%arrLen;
//     }
//     return total;
// }

//to avoid collision we use=>separate chaining
//for separate chaining we use same  hash pushed to the array[index]
//liner probing=>it push the array index to next position and move others to next indexs


// ???? ------GET/SET------????
//accepts key and a value
//hash the key
//stores the key-value pair in the hash table array via separate chaining

// set => accepts a key and a value
//hash the key
//stores the key-value pair in the hash table arr via separate chaining

//get=>accepts key,
//has the key
//retrive the key-value pair in the hash table 
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size)
    }

    _hash(key) {
        let total = 0;
        let prime = 31;
        // prime will make the function less prone to collision.
        for (let i = 0; i < key.length; i++) {

            let value = key.charCodeAt(i) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }


    set(key, value) {
        var hashkeyIndex = this._hash(key);
        // console.log(hashkeyIndex)
        if (!this.keyMap[hashkeyIndex]) {
            this.keyMap[hashkeyIndex] = [[key, value]];
        }
        else {
            this.keyMap[hashkeyIndex].push([key, value])
        }
    }
    get(key) {
        // console.log("invoked")
        var hashkeyIndex = this._hash(key);
        
        if (!this.keyMap[hashkeyIndex]) {
            return ("does not have this");
        }

        else {
            var arr = this.keyMap[hashkeyIndex];
            var ans;
            arr.forEach(item => {
                // console.log(item[0])
                if (item[0] === key) {
                    ans=(item[1])
            }}
             
         )
         return ans;
        }

    }
    keys(){
        var arr=[];
        for(var i=0;i<this.keyMap.length;i++){
            if(this.keyMap[i]){
                var item = this.keyMap[i]
                for (var j = 0; j < item.length; j++){
                    arr.push(item[j][0])
                } 
            }
        }
        return arr;
    }
    values(){
        var arr = [];
        for (var i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                var item = this.keyMap[i]
                for (var j = 0; j < item.length; j++) {
                    arr.push(item[j][1])
                } 
            }}
        return arr;
    }
}
let ht = new HashTable();
ht.set("i am souvik", "i love adventure sports")
ht.set("my suname is dey", "i am a webdeveloper")
ht.set("i work for tcs", "i dont like working there")
ht.set("i work for tcs", "ibal bitch")
ht.set("i work for cts", "emp id is")

console.log(ht);
// console.log(ht.get("hi"))
console.log(ht.get("i work for cts"))
console.log(ht.get("i work for tcs"))
console.log(ht.keys())
console.log(ht.values())
ht.values().forEach(item=>console.log(item))

//insertion:o(1)
//deletion:0(1)
//access:0(1)