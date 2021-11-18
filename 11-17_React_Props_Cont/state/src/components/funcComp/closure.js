
// const add = () => {
//     let x = 1
//     let y = 2

//     const sum = () => {
//         setTimeout(()=>{
//             console.log(x + y)
//         }, 5000)
//     }

//     sum()
//     console.log("add function has completed");

//     return
// }

// add()




let $ = (()=>{
    
    const pi = 3.14
    const val = 567

    const add = (x) => {
        return x + val
    }

    const multPi = (multiplier) => {
        return pi * multiplier
    }

    let jQuery = {
        pi: multPi,
        add: add
    }

    return jQuery // allows access to the functions long after the main function is off the callstack.

})()

let result = $.add(45)

console.log(result);