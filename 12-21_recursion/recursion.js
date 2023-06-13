
// // Write a function called power which accepts a base and an exponent.
// // The function should return the power of the base to the exponent.

// // recursion must have a base case to ensure the function does not run forever


// // 2 * 2 * 2 * 2
// // 2^4 

// const power = (base, exponent) => {
//   // if(exponent === 1){
//   //   return base
//   // }

//   if(exponent === 0){
//     return 1 
//   }

//   return base * power(base, exponent-1)
// }

// // power(2, 1) returns 2
// // 2 * power(2, 1)
// // 2 * power(2, 2)
// // 2 * power(2, 3)
// // power(2, 4)

// console.log(power(2, 4))




// Write a recursive function called isPalindrome which returns
// true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise returns false.
// isPalindrome(‘awesome’) // false
// isPalindrome(‘foobar’) // false
// isPalindrome(‘tacocat’) // true
// isPalindrome(‘amanaplanacanalpanama’) // true
// isPalindrome(‘amanaplanacanalpandemonium’) // false

// const isPalindrome = (str) => {

//   // base case
//   if(str.length === 0) return true
//   if(str.length === 1) return true
  
//   if(str[0] === str.slice(-1)){
//     return isPalindrome(str.slice(1, -1))
//   }
//   return false
// }




// Product Sum 
// Write a function that takes in a "special" array and returns its product sum.

// A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of a "special" array its elements ,where "special" arrays inside it re summed themselves and then multiplied by their level of depth.

// The depth of a "special" array is how far nested it is.  For instance, the depth of [] is 1; the depth of the inner array in [[]] is 2. The depth of the innermost array in [[[]]] is 3.

// Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z);  the product sum of [x, [y, [z]]] is x + 2 * (y + 3z)

// Sample input

// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// Sample Output

// 12 // calculated as: 5 + 2 + 2 * (7 - 1) + 3 + 2 * (6 + 3 * (-13 + 8) + 4)


// NOTE: every line is 1 * the value at least
// const productSum = (arr) => {

//   // base case 
//   if(arr.length === 0) return 1

// }




// Without using .flat(), create a function to flatten an array 

// const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10]
// flatten(exampleArray) //[1,2,3,4,5,6,7,8,9,10]

let array = [1,2,[3,4, [5,6,7], 8], 9, 10]
//           |
const flatten = (arr) => {

  return arr.reduce((acc, val)=>{
    
    if(Array.isArray(val)){
      return acc.concat(flatten(val))
    }
    else{
      acc.push(val)
      return acc
    }
  }, [])

}

console.log(flatten(array))

/** How it works
 * first acc = [1, 2] and then we recurse
 * second acc = [3, 4] and then we recurse again
 * third acc = [5, 6, 7]
 * then we concat third acc to second acc 
 * then we concat second acc to first acc
 * and then we push 9, 10 to the first acc and the result of the reduce loop is returned 
 */