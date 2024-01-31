var nums = [2, -78, 45,4,-7,-6,-10, 26, 30, 8]
var numsP = 0
var numsSum = 0
function summer (array){
    for (var i = 0; i < nums.length; i++){
        if (array[i] > 0){
            numsP += array[i]
            numsSum++
        }
    }
    const numsS = numsP / numsSum
    console.log(numsS)

}
summer(nums)



// function nums(arr){
//     var sum = 0
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//           sum += arr[i] * arr[i]
//         }
//     }
//     return sum
// }
//
// console.log(nums([1,3,4,5,6,7]))


// function arrMain(arrWords){var result = []
//     for (var i = 0; i < arrWords.length; i++){
//         if (arrWords[i].toLowerCase().includes("t") && arrWords[i].toLowerCase().includes("a")){
//             result.push(arrWords[i])
//         }
//     }    return result
// }
// console.log(arrMain( ['frontend', 'apple', 'tax']))



