function power(num1,num2) {
    var ans = 1;
    if(num2===0) return 1;
    else if(num2===1) return num1;
    else{
            ans=num1*power(num1,--num2)
        }
    

    return ans;
}
// console.log(power(4,2))
function power(num1, num2) {
    var ans = 1;
    if (num2 === 0) return 1;
    else if (num2 === 1) return num1;
    else {
        ans = num1 * power(num1, --num2)
    }


    return ans;
}
// console.log(power(4,2))




function factorial(num) {
    var answer = 1;
    if (num === 1 || num === 0) return 1;
    answer = num * factorial(--num);
    return answer;
}


// console.log(factorial(1))// 1
// console.log(factorial(2))// 2
// console.log(factorial(4))// 24
// console.log(factorial(7))// 5040



const productOfArray = (arr) => {
    var answer = 0;
    if (arr.length === 1) return arr[0];
    console.log(arr)
    answer = arr[0] * productOfArray(arr.slice(1));
    return answer;
}
// console.log(productOfArray([4, 2, 3,10]))




function factorial(num) {
    var answer=1;
    if(num===1 ||num===0) return 1;
    answer=num*factorial(--num);
    return answer;
}


// console.log(factorial(1))// 1
// console.log(factorial(2))// 2
// console.log(factorial(4))// 24
// console.log(factorial(7))// 5040



const productOfArray=(arr)=>{
    var answer=0;
    if(arr.length===1) return arr[0];
    console.log(arr)
    answer=arr[0]*productOfArray(arr.slice(1));
    return answer;
}
// console.log(productOfArray([4, 2, 3,10]))
function binarySearch(arr, num) {
    //sorting arr
    arr = arr.sort((a, b) => a - b);
    //setting start,end variable;
    // console.log(arr)
    var start = 0, end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    //start loop if we are not getting the index.
    while (arr[middle] !== num && end >= start) {

        if (arr[middle] > num) end = middle - 1; //-1 with middle is important,bcz otherwise it wont reach the end>=start condition
        else start = middle + 1; //+1 with middle is important,bcz otherwise it wont reach the end>=start condition
        middle = Math.floor((start + end) / 2);
        console.log(start, middle, end)
    }
    return arr[middle] === num ? middle : -1;

}

const naiveSearch=(short,long)=>{
    var k, count=0;
    for(var i=0;i<long.length;i++){
        for (var j = 0; j < short.length; j++){
            // console.log(long[k], short[j])
            if (long[i + j] !== short[j]) break;   
                // console.log("BREAK")
            if (j === short.length - 1) count++;
                // console.log("found")
             
    
        }
    }
    console.log(count) ;
}
// naiveSearch("omg","wowomg")

const bubbleSort=(arr)=>{
    var temp,noswap=true;
    for(var i=1;i<arr.length;i++){
        // console.log("loop I",i)
        for (var j = 0; j < arr.length-1;j++){
            // console.log("loop J", j)
            console.log(arr,arr[j] ,arr[j + 1])
            
            if(arr[j]>arr[j+1]){
                noswap=false;
                swapNum(arr,j ,j+1)
               
                // console.log("swapper:",arr[j], arr[j + 1])
            }
        }
        if (!noswap){console.log("break");break;}
    }
    console.log(arr)
}
function swapNum(arr,idx1,idx2) {
    // temp = arr1;
    // arr1 = arr2;
    // arr2 = temp;
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
// bubbleSort([2, 7,5, 6, 9, 10, 11, 11])

const selectionSort = (arr) => {
    var minimum;
    for(var i=0;i<arr.length;i++){
        minimum=i;
        //we have to move with array index of the lowerst
        for (var j =i+1;j < arr.length; j++){
            console.log("loop number", j, arr[j], arr[minimum])
            if (arr[j] < arr[minimum]) {
                minimum = j;
            };
            
        }
        //additional addition
        if (i !== minimum){
            swapNum(arr, i, minimum)
        } 
        console.log("arr after swap",arr)
    }
    console.log(arr)
}
// selectionSort([2, 7,3, 5,4, 6, 9, 11, 11])


//insertion sort

function insertionSort(arr) {
    for(var i=1;i<arr.length;i++){
        var currentEle=arr[i];
        for (var j = i - 1; j >= 0 && currentEle < arr[j]; j--) {
            console.log(arr[j + 1], arr[j],currentEle)
            arr[j+1]=arr[j]
            // console.log(arr)
        }
        arr[j+1]=currentEle;
        console.log(arr)
        // for (var j =1 ; j < i; j++){
            
        // }
    }
    // console.log(arr)
}

insertionSort([5,4,1,3,9])




const naiveSearch = (short, long) => {
    var k, count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            // console.log(long[k], short[j])
            if (long[i + j] !== short[j]) break;
            // console.log("BREAK")
            if (j === short.length - 1) count++;
            // console.log("found")


        }
    }
    console.log(count);
}
// naiveSearch("omg","wowomg")

const bubbleSort = (arr) => {
    var temp, noswap = true;
    for (var i = 1; i < arr.length; i++) {
        // console.log("loop I",i)
        for (var j = 0; j < arr.length - 1; j++) {
            // console.log("loop J", j)
            console.log(arr, arr[j], arr[j + 1])

            if (arr[j] > arr[j + 1]) {
                noswap = false;
                swapNum(arr, j, j + 1)

                // console.log("swapper:",arr[j], arr[j + 1])
            }
        }
        if (!noswap) {
            console.log("break");
            break;
        }
    }
    console.log(arr)
}

function swapNum(arr, idx1, idx2) {
    // temp = arr1;
    // arr1 = arr2;
    // arr2 = temp;
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
// bubbleSort([2, 7,5, 6, 9, 10, 11, 11])

const selectionSort = (arr) => {
    var minimum;
    for (var i = 0; i < arr.length; i++) {
        minimum = i;
        //we have to move with array index of the lowerst
        for (var j = i + 1; j < arr.length; j++) {
            console.log("loop number", j, arr[j], arr[minimum])
            if (arr[j] < arr[minimum]) {
                minimum = j;
            };

        }
        //additional addition
        if (i !== minimum) {
            swapNum(arr, i, minimum)
        }
        console.log("arr after swap", arr)
    }
    console.log(arr)
}
// selectionSort([2, 7,3, 5,4, 6, 9, 11, 11])


function merge(arr1, arr2) {
    let results = [];
    let i = 0,
        j = 0;


    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i])
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// console.log(merge([25],[2,14,44,100]))


//break up thearr into halver until you have arr that are empty or have one element

//once youhave smaller arrys ,merge those arrays with other sorted arrays merge those arrays with other sorted arrays until
//you back at the full length of the array.
//once arr has been merged back together,return the merge one.


function mergeSort(arr) {
    //when arr contains o/1 element it returns the arr
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    console.log(left, right)
    return merge(left, right);
}


// console.log(mergeSort([10,2,5,4,14,44,100]))

// time complexity (best/avg/worst)=>O(nlogn)
//space complexity (O(n))


//quick sort:
//make arr of 0/1 element
//works by selecting one element (Called the "pivot") and finding the index where the pivot
// should  end up in the shoted array
//repeat the method

// PIVOT HELPER
// ---------------------
//1. Given an Array,this func should designate an element as the pivot
//2.it should then rearrange elements in the array sp that all values less that the pivot
//are moved to the left of the pivot,and all the values greater than the 
// pivot are moved to the right of the pivot
//3.order of the element either side of the pivot does not matter.
//4.the helper should do this in place that is it should not create a new arr
//5.when complete,the helper should return the index of the pivot


//PseudoCode..
//1.it will take 3 arg-arr,start index,end index.
//2.grab the pivot from the start of the arr
//3.store the current pivot index in a variable
//4.loop through ar from start till end 
// ->if pivot >currentElemnt,increment the pivot index variable and then swap the current element with 
// element at the pivot index.

//5.swap the starting elemt with pivot index.
//6.return pivot index

//**remember just anything less that pivot should be in left and anything greater than pivot should be in right */
function pivot(arr, start = 0, end = arr.length + 1) {
    var pivot = arr[start];
    var swapIndex = start;
    for (var i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swapNum(arr, swapIndex, i)
        }
    }
    swapNum(arr, start, swapIndex)
    return swapIndex;
}
// pivot([4, 3, 8, 1])
// **-----how it flows----**
//swapindex=0,pivot 4
// 4>3
// [4,3,8,1] ->swapindex-1 ,i=1 //noswapNum as i=indexnum
// 4<8
// 4,3,8,1->swapidex-1,i=2,
// 4>1
// 4,3,1,8->swap btw  8,1--swapindex=2,i=3
// ---->put pivot at swapindex
// final outcome=>1,3,4,8
// return swapIndex
// *** 1.call pivot helper on arr
// 2.when helper returns to you the update pivot indexedDB,recursicely call the pivot helper 
// on sub arr on left and right of that indes***
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left side
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;

}

// console.log(quickSort([2,4,3,5,1,9,6,7,10]))

// time complexity===>avg/best =O(nlog n) worst =>O(n^2)
//space complexity===>O(log n)


// Radis Sort:

// ***We dont compare 2 entity***
// it exploits the fact that information about the size of a number is encoded in the number of digit
//more digit  means bigger number.
// 1.make getDigit(num,place)-returns the digit in num at the given place value
//getDigit(7025,3)=>7
//getDigit(1212/1)=>1
function getDigit(num, place) {

    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
// console.log(getDigit(7025,1))
// 2.how many time the loop will run
function digitCount(num) {
    let a = String(Math.abs(num));
    return a.length;
}

// given an array of numbers returns the number of digits in the largest number in the list
function mostDigits(nums) {
    //passing array to a inbuild function
    var max = Math.max(...nums);
    let a = String(Math.abs(max));
    return a.length;
}
// console.log(mostDigits([-111,11,1]))

//method to inplement 
//1.figure out how many digit the largest no. of digit  has
//2.loop k=0  to largest digit->create buckets for each digit(0 to 9)
// ->place each number in the corresponding kth dight
//replace our existing array with values in our buckets starting with 0 to going up to 9
//return list at the end


function radixSort(arr) {
    let mostDigitCount = mostDigits(arr);
    // console.log(mostDigitCount)
    for (var k = 0; k < mostDigitCount; k++) {
        //make to empty bucket
        let digitBuckets = Array.from({
            length: 10
        }, () => [])
        //  console.log(digitBuckets)
        for (let i = 0; i < arr.length; i++) {
            digitBuckets[getDigit(arr[i], k)].push(arr[i]);

        }
        arr = [].concat(...digitBuckets);
        console.log(arr)
    }
    console.log(arr)
}

radixSort([100, 22, 1456, 3])


//timecomplexity (best/avg/worst) =>O(nk);  n=length of array. k number of digit of element(avg)
//spaceComplex O(n+k)