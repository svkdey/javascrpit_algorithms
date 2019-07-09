function hurdleRace(height,k ) {
    var heightArr=height.split(" ")
    var newHeightarr=[];
    heightArr.forEach(element=>{
        newHeightarr.push(parseInt(element))
    })
    var arr=[]
   var maxHeight=Math.max(...newHeightarr)
    console.log(maxHeight-k)
   
   

}
// hurdleRace("86 4 83 20 6 81 58 59 53 2 54 62 25 35 79 64 27 49 32 95 100 20 58 39 92 30 67 89 58 81 100 66 73 29 75 81 70 55 18 28 7 35 98 52 30 11 69 48 84 54 13 14 15 86 34 82 92 26 8 53 62 57 50 31 61 85 88 5 80 64 90 52 47 43 40 93 69 70 16 43 7 25 99 12 63 99 71 76 55 17 90 43 27 20 42 84 39 96 75 1",53)
function angryProfessor(k, a) {
    
    var newarr=[];
    for (var i = 0; i < a.length; i++) {
        // console.log(i )
        if (newarr[i] < 1) {
            newarr.push(a[i])
        }
    }
    // console.log(a, k)
    if (newarr.length >= k) return "NO";
    else return "YES";
}
console.log(angryProfessor(2, [0, -1, 1, 1]))

