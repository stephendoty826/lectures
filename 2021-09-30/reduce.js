// Create a function sumPlusMinus() that takes an array and sums separately positive and negative numbers. It should return an object like this:
// {
//     plus: 74, // sum of all positive numbers
//     minus: -54 // sum of all negative numbers
// }

// let arr = [1, -5, -2, 8, 4, -7, 2, -3]

// function sumPlusMinus(arr){
//     let plusMinus = arr.reduce((acc, current)=> {
//         if (current >= 0) {
//             acc.plus += current
//         }
//         else{
//             acc.minus += current
//         }
//         return acc
//     }, {plus: 0, minus: 0})
//     return plusMinus
// }

// console.log(sumPlusMinus(arr))



// Without using .flat(), create a function to flatten an array 

const exampleArray = [1,2,[3,4, [5,6,7], 8], 9, 10]
// flatten(exampleArray) [1,2,3,4,5,6,7,8,9,10]

// use recursion...step into array if array.length > 1 and step into next level of array if that array.length > 1 and so on. Use reduce to gather the values into a single array. 

// ??????
function flatten(arr){
    let flattenedArray = arr.reduce((acc, val)=>{
        if(val.length > 1){
            console.log(`val.length > 1 ${val.length}: ${val}`)
            return flatten(val)
        }
        return acc.push(val) // console is saying acc.push is not a function
    }, []) // [1, 2, ] --- [3, 4, ] --- [5, 6, 7]
    return flattenedArray
}

console.log(flatten(exampleArray))




