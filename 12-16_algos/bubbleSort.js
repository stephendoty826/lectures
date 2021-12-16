
const arr = [4, 7, 2, 8, 0, 2, -1, -7]

// bubble sort algorithm using 2x for-loops
const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++){ // for-loop to iterate through array
    for(let j = 0; j < arr.length - 1 - i; j++){ // for-loop to swap variables 
      if(arr[j] > arr[j+1]){ // comparison of current value to next value
        let temp = arr[j] // temp variable for higher value
        arr[j] = arr[j+1] // swapping values 
        arr[j+1] = temp // swapping higher value with temp variable
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))


// same type of sorting algorithm by using while-loop (this one is more optimized)
const bubbleSort2 = (arr) => {
  let len = arr.length
  let swapped

  do {
    swapped = false
    for(let i = 0; i < len; i++){ // for-loop to swap variables 
      if(arr[i] > arr[i+1]){ // comparison of current value to next value
        // let temp = arr[i] // temp variable for higher value // old way of swapping with temp variable
        // arr[i] = arr[i+1] // swapping values
        // arr[i+1] = temp // swapping higher value with temp variable
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]; // new way with EJS 6 
        swapped = true
      }
    }
  } while(swapped)
  return arr
}

console.log(bubbleSort2(arr))