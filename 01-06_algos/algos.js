
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// // My attempt 
// const fib = (n) => {
//   let result = [0, 1]
  
//   //base case n < 2
//   if(n < 2){
//     return result
//   }

//   for (let i = 0; i <= n - 3; i++) {  
//     result.push(result[i] + result[i + 1])
//   }
//   return result
// }

// // Hunter's answer
// const fib = (n) => {
//   let result = [0, 1]
  
//   //base case n < 2
//   if(n < 2){
//     return result
//   }

//   for (let i = 2; i <= n; i++) { 
//     let first = result[i - 1]

//     let second = result[i - 2]

//     let sum = first + second
    
//     result.push(sum)
//   }
//   return result
// }


// const fib = (n) => {
//   //base case
//   if(n < 2) return n // 0 or 1

//   return fib(n-1) + fib(n-2)
// }

// fib(5)

// fib(4) + fib(3)

// [ fib(3) + fib(2) ] + [ fib(2) + fib(1) ]

// [ { fib(2) + fib(1) } + { fib(1) + fib(0) } ] + [ { fib(1) + fib(0) } + { fib(0) } ]

// [ { ( fib(1) + fib(0) ) + fib(1) } + { fib(1) + fib(0) } ] + [ { fib(1) + fib(0) } + { fib(0) } ]




// Andrew's method to use recursion and return a list of the fibonacci sequence
const fibLoop = (n) => {
  let result = [0, 1]
  
  //base case n < 2
  if(n < 2){
    return result
  }

  for (let i = 2; i <= n; i++) { 
    
    result.push(fib(i))
  }
  return result
}

//David's method to use recursion and return a list of the fibonacci sequence
// function fib (n) {
//   if (n < 2) {
//       return [1];   
//   }
//   if (n < 3) {
//       return [1, 1];
//   }

//   var answer = fib(n - 1);
//   answer.push(answer[n - 2] + answer[n - 3]);
//   return answer;
// };

// console.log(fibLoop(5))



// You are climbing a staircase that has n steps. You can take the steps either one or two at a time. Calculate how many distinct ways you can climb to the top of the staircase.

// Break it down into tables

/**
 * steps | ways
 *   1   |  1
 *   2   |  2
 *   3   |  3
 *   4   |  5
 *   5   |  8
 */

// If you have a staircase with 8 steps it's the same as having a staircase with 3 steps + one with 5 steps...it's a fibonacci sequence



// Using Memoization

// Andrew's solution using Memoization
const fib = (n, cache) => {
  cache = cache || {}
  if (cache[n]) return cache[n];
  if(n<=1) return 1
  return cache[n] = fib(n - 1, cache) + fib(n - 2, cache)
}
// 

// console.log(fib(5))

const fibArray = (num) => {
  let result = [0,1]
  for(let i = 1; i<num;i++){
      result.push(fib(i))
  }
  return result
}

console.log(fibArray(5))
// console.log(fibArray(100))



// function getPermutations(array) {
  
// 	if (array.length === 0) return array;
	
// 	let foundPermutations = [];  //diff perms will be stored here
	
  
// 	function perm(subArr, currentPerm ){
		
// 		//base case, push to permutations
// 		if(subArr.length === 0){
// 			foundPermutations.push(currentPerm);
//       console.log(foundPermutations)
// 		}
		
// 		for(let i = 0; i< subArr.length; i++){
// 			//parse out the sub array and recurse
// 			const newSubArr = subArr.slice(0,i).concat(subArr.slice(i+1)) 
//       console.log(newSubArr);
// 			// when i = 0, slice(0,0) = nothing, so concatenate on
// 			// array starting at 1 (i + 1) to the end
			
// 			//add the current value at this index to the currentPerm
// 			const newCurrentPerm = currentPerm.concat(subArr[i])
// 			console.log(newCurrentPerm)
// 			//recurse
			
// 			perm(newSubArr, newCurrentPerm)
// 		}//end of for loop
		
// 	}//end of perm function
	
// 	perm(array, []) //initial subArray is full array, permArr is empty
// 	return foundPermutations;
// }

// getPermutations([1, 2, 3])
