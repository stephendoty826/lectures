
// // TERNARY OPERATOR
// let age = 18

// // if(age < 18){
// //     console.log("too young")
// // }
// // else{
// //     console.log("old enough")
// // }

// let votable = age < 18 ? "too young" : "old enough"

// console.log(votable);


// // SPREAD OPERATOR (make copy of object or array)

// let arrA = [1, 2, 3, 4, 5]
// let arrC = [8, 9, 10]

// // let arrB = arrA // passed by reference

// // let arrB = [...arrA] // makes actual copy of arrA

// // arrB.push(99) // therefore 99 is pushed to both arrA and arrB

// // console.log(arrA, arrB);

// let result = [...arrA, 6, 7, ...arrC]

// console.log(result);


// DESTRUCTURING 

// const student = {
//     ID: '21',
//     name: 'John',
//     GPA: '3.0',
// };

// // const id = student.ID // desctructuring is faster
// // const name = student.name

// const {ID, name:n, GPA} = student

// console.log(ID, n, GPA);

// let arr = [56, 7, 89, 34, 56]

// let [val1, val2, val3] = arr

// console.log(val1, val2, val3);



// // MAP VS FOREACH ARRAY METHOD

// let arr = [1, 2, 3, 4, 5, 6, 7]

// let newArr = arr.map(el => el * 2)

// console.log(newArr);



// // FILTER ARRAY METHOD

// let filterNum = arr.filter(el => {
//     return el !== 4 // return works on a condition; if true, el is returned; if false el not returned
// })

// console.log(filterNum);




// CLASSES & OBJECTS

class Car { // class construct
    constructor(name) {
        this.name = name // instance variable

        // console.log("just created");
    }

    printCarName(){
        console.log(this.name);
    }

}

class Hybrid extends Car { // inherits from Car class
    constructor(gasMilage, name){
        super(name) // calling base/parent class constructor
        this.gasMilage = gasMilage
    }

    printCarDetails(){
        console.log(this.name, this.gasMilage);
    }
}

let prius = new Hybrid(40, "prius")
let turtle = new Hybrid(50, "turtle")

prius.printCarDetails()
turtle.printCarDetails()

// let car = new Car("prius")

// car.printCarName()