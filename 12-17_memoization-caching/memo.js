
// put code from lecture after lunch on 12-17




// // Victoria's solution to first problem
// let arr = [4,2,2,3,2,2,2];


// const uniqSort = (arr) => {
//     let cache = {};
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if(!cache[arr[i]]) {
//             newArr.push(arr[i])
//             cache[arr[i]] = true;
//         }
//     }

//     return newArr.sort((a, b) => a - b);
// };

// console.log(uniqSort(arr));



// // cache
// let cache = {

// }

// const times10 = (n) => {
  
//   if (n in cache){
//     console.log(`Fetching from cache: ${n}`)

//     return cache[n]
//   }
//   else{
//     console.log("calculating result")
//     cache[n] = n * 10

//     return cache[n]
//   }

// }

// console.log("times10 returns", times10(9))
// console.log("times10 returns", times10(9))
// console.log("times10 returns", times10(9))
// console.log("times10 returns", times10(4))
// console.log("times10 returns", times10(4))
// console.log("times10 returns", times10(4))
// console.log("times10 returns", times10(5))
// console.log("times10 returns", times10(5))
// console.log("times10 returns", times10(5))




// Write a function that takes in an array of strings and groups anagrams together.
// Anagrams are strings made up of exactly the same letters, where order doesn't matter. For example, cinema and iceman are anagrams; similarly foo and ofo are anagrams.
// Your function should return a list of anagram groups in no particular order.
// Sample Input
// ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]
// Sample Output
// [["yo", "oy"], ["flop", "olfp"], ["act", "tac", "cat"], ["foo"]]
// Note: Watch your runtime.  Make sure you're not creating a n^3 runtime. Would sorting first actually be beneficial in this problem?

// "oy"

// {
//     "oy" : ['yo', 'oy'],
//     "act": ['act', 'tac', cat],
//     "flop": ['flop', 'olfp'],
//     "foo": ["foo"]
// }

// sorting characters in each word alphabetically
// ['oy', 'act', 'flop', 'act', 'foo', 'act', 'oy', 'flop']

const anagrams = (arr) => {
  
  let cache = {}
  let finalArray = []

  for (let i = 0; i < arr.length; i++) {
    
    let word = arr[i].split("").sort().join("")
    
    if(cache[word]){ // checking if sorted word is in array
      // word IS in cache
      cache[word].push(arr[i])
    }
    else{
      // NOT in cache
      cache[word] = [arr[i]]
    }
  }
  console.log(cache)

  for(let key in cache){
    finalArray.push(cache[key])
  }

  console.log(finalArray)

}

// sort: n*log(n) nested loop = n^2

let result = anagrams(["tac", "yo", "act", "flop", "yo", "cat", "tac", "foo", "cat", "oy", "olfp", "ofo", "plof", "oy", "oof"])


// this solution is n (linear) if the words inside the array are not super long (thousands or millions of characters long)


