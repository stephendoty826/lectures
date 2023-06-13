
// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
//         s
//            e
//         0  1  2  3   4  5  6  7  8
// Output: [2.2, 2.8, 2.4, 3.6, 2.8]

const average = (K, arr) => {
  
  let results = []
  let range = arr.length - K + 1

  for(let start = 0; start < range; start++){
    let sum = 0
    let end = start + K
    for(let i = start; i < end; i++){
      sum += arr[i]
    }

    let average = sum / K
    results.push(average)
  }

  return results
}

let result = average(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
// [ 2.2, 2.8, 2.4, 3.6, 2.8 ]

// console.log(result)
// BigO of this is n^2. 


// now using sliding window technique

// [1, 3, 2, 6, -1, 4, 1, 8, 2]
//  s
//  e

const average2 = (K, arr) => {

  let results = []
  let windowSum = 0
  let windowStart = 0

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){

    windowSum += arr[windowEnd] // sum of first 4 elements

    if(windowEnd >= K - 1){
      // calculate the average and push to results
      results.push(windowSum/K) // 2.2
      
      windowSum -= arr[windowStart] 

      windowStart++ 
    }

  }

  return results

}

let result2 = average2(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
// [ 2.2, 2.8, 2.4, 3.6, 2.8 ]

// console.log(result2)
// BigO of this is linear




// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
//   Example 1:
//   Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].
// Example 2:
// Input: [2, 1, 5, 2, 8], S=7
//         s
//            e
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [8].
// Example 3:
// Input: [3, 4, 1, 1, 6], S=8
// Output: 3
// Explanation: Smallest subarrays with a sum greater than or equal to ‘8’ are [3, 4, 1]
// or [1, 1, 6].


// use sliding window

// todo MY ATTEMPT
// const arr = [2, 1, 5, 2, 3, 2]

// const smallestSubarr = (S, arr) => {
//   let smallestLength = 0
//   let windowSum = 0 
//   let windowStart = 0

//   for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){

//     windowSum += arr[windowEnd]

//     if(windowSum >= S){

//       smallestLength = (windowEnd + 1) - windowStart

//       windowSum = 0 

//       windowStart++

//       windowEnd = windowStart + 1

//     }

//   }

//   return smallestLength

// }

// console.log(smallestSubarr(7, arr))

// ? Veronica's Solution

const arr = [2, 1, 5, 2, 3, 2]

const smallestSub = (S, arr) => {
  let windowSum = 0
  let minLength = Infinity
  let windowStart = 0

  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    
    windowSum += arr[windowEnd]

    while(windowSum >= S){

      // calculate minLength
      minLength = Math.min(minLength, windowEnd - windowStart + 1) // 3

      // recalculate sum
      windowSum -= arr[windowStart] // 6
      
      // decrease window
      windowStart++ // 1

    }

  }

  return minLength === Infinity ? 0 : minLength

}

// console.log(smallestSub(8, arr))



// Given a string, find the length of the longest substring in it with no more than K distinct characters.
//   Example 1
//   Input: String=“araaci”, K=2
// Output: 4
// Explanation: The longest substring with no more than ‘2’ distinct characters is “araa”.
//   Example 2
//   Input: String=“araaci”, K=1
// Output: 2
// Explanation: The longest substring with no more than ‘1’ distinct characters is “aa”.
//   Example 3
//   Input: String=“cbbebi”, K=3
// Output: 5
// Explanation: The longest substrings with no more than ‘3’ distinct characters are “cbbeb” & “bbebi”.
//   Example 4
//   Input: String=“cbbebi”, K=10
// Output: 6
// Explanation: The longest substring with no more than ‘10’ distinct characters is “cbbebi”.


// use caching and sliding window

// k = 2
// 1 2 3 4 5 6
// a r a a c i
// s
//         e

const longest_sub = (str, k) => {
  
  let windowStart = 0
  let maxLength = 0
  let charFrequency = {}

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    
    let rightChar = str[windowEnd] // a: 3, r: 1, c: 1

    if(rightChar in charFrequency){ // increment count of character
      charFrequency[rightChar]++
    }
    else{
      charFrequency[rightChar] = 1
    }

    while(Object.keys(charFrequency).length > k){
      
      let leftChar = str[windowStart] // a

      charFrequency[leftChar] -= 1

      if(charFrequency[leftChar] === 0){
        delete charFrequency[leftChar]
      } 
      // shrink window
      windowStart++

    }

    maxLength = Math.max(maxLength, (windowEnd - windowStart + 1))
    
  }
  return maxLength
}

console.log(longest_sub("hellooollo", 2))

