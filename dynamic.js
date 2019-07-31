
// carrying
const curriedSum = (a) => (b) => { return a + b };

// curriedSum(5)(3)

const curriedBY5always = (num) => curriedSum(5)(num)

// curriedBY5always(10)
//dynamic programing

const fibonacciSequence = (num) => {
    if (num <= 2) return 1;
    return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
}
// fibonacciSequence(5)
//O of this program is O(2^N)

const fibonacciSequenceDynamic = (num, memo = []) => {
    // console.log(memo)
    if (memo[num] !== undefined) return memo[num];
    if (num <= 2) {
        memo[num] = 1;
        return 1;
    }
    var result = fibonacciSequenceDynamic(num - 2, memo) +fibonacciSequenceDynamic(num - 1, memo);
    memo[num] = result;
    console.log(memo);
    
    return result;
}
fibonacciSequenceDynamic(6)
//O of this program is O()

const fibTabular=(num)=>{
    if(num<=2) return 1;
    var ans=[0,1,1];
    for(var i=3;i<num;i++){
        ans[i]=ans[i-1]+ans[i-2];
    }
    console.log(ans);
    return ans[num-1];
}
// console.log(fibTabular(10))

const fact=(num,memo=[])=>{
    if(memo[num]!==undefined) return memo[num];
    if(num===1) {
        memo[num]=1;
        return 1;
    }
    var result=num*fact(num-1,memo);
    memo[num] = result;
    console.log(memo);
    return result;
}
// fact(5);