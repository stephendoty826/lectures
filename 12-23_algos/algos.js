
/**
 * 
Given an array of integers, return indices of the two numbers such that they add up to a specific target

Example:
Given nums = [2, 7, 11, 15]
target = 9

[0, 1]

{
  2: 0,
  7: 1,
  11: 2,
  15: 3 
}

current element 2

target = 2 + x

x = target - 2 
7 = 9 - 2 MATCH
11 = 9 - 2 NO MATCH


current element 7

target = 7 + 2

x = target - 7
2 = 9 - 7 MATCH

 */


const twoSum = (target, arr) => {
  
  let cache = {}
  let result = []

  for(let index = 0; index < arr.length; index++){
    // arr[i]
    let currentVal = arr[index]

    cache[currentVal] = currentVal
  }
  console.log(cache)

  for(let i = 0; i < arr.length; i++) {
    
    let match = target - arr[i]

    console.log("cache[match]", cache[match])

    if(cache[match] === match ){

      console.log("inside", cache[match])

      result.push(i)

      console.log("result", result)
    }

  }

  return result
}

twoSum(9, [4, 1, 2, 7, 11, 15])



// /*
// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order by the first element.  

// If no three numbers sum up to the target sum, the function should return an empty array.

// Sample input:
// array = [12, 3, 1, 2, -6, 5, -8, 6] 

// target sum = 0
// Sample output:
// [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
// */


// // HOW IT WORKS
// //ts=0
// //sort arr
// //[-8, -6, 1, 2, 3, 5, 6, 12]
// //  |   
// //               l                 
// //                  r

// //cs = arr[i] + arr[i + 1] + arr[arr.length - 1]
// //cs = -8 + 3 + 5 = 0 

// array = [12, 3, 1, 2, -6, 5, -8, 6] 

// const threeSum = (targetSum, arr) => {

//   arr.sort((a, b) => a - b) // nlog(n)

//   let results = []

//   for(let i = 0; i < arr.length; i++){
//     let leftIdx = i + 1; // left index pointer
//     let rightIdx = arr.length - 1 // right index pointer

//     while(leftIdx < rightIdx){
//       let currentSum = arr[i] + arr[leftIdx] + arr[rightIdx]

//       if(currentSum === targetSum){
//         //triplet found, push to results array
//         results.push([arr[i], arr[leftIdx], arr[rightIdx]])
//         leftIdx++
//         rightIdx--
//       }
//       else if(currentSum < targetSum){
//         leftIdx++
//       }
//       else{
//         // currentSum greater than target
//         rightIdx--
//       }
//     }
//   }
//   return results
// }

// console.log(threeSum(0, array))



