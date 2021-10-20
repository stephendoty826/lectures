"// Create a variable called num that is an integer. If num is divisible by 3 then print “Fizz”, if num is divisible by 5 then print “Buzz”. If num is divisible by 3 and 5 then print “Fizz Buzz”.

// var num = 3

// if (num % 3 == 0 && num % 5 == 0){
//     console.log("Fizz Buzz")
// }
// else if (num % 3 == 0){
//     console.log("Fizz")
// }
// else if (num % 5 == 0){
//     console.log("Buzz")
// }



// var firstName = "Stephen"

// var lastName = "Doty"

// console.log(`My name is ${firstName} ${lastName}`);


// var arr = ["Mon", "Tues", "Wed"]

// var first = arr.shift()

// console.log(arr, first);

// for (var index = 0; index < arr.length, index++){
//     console.log(arr[index]);
// }

// var nums = [1, 2, 3, 4, 5, 6, 7]

// console.log(nums);

// nums.splice(2, 3)

// console.log(nums);



// var newNumSet = nums.slice(1, 5)

// console.log(newNumSet);

// console.log(nums);

// var str = "3"

// var newStr = parseInt(str)
// console.log(typeof(str));
// console.log(typeof(newStr));

// var num = 3

// var newNum = num.toString()

// console.log(newNum);

// var team = "Green Bay Packers is from Wisconsin"

// console.log(teamArr);

// var team = "Green Bay Packers is from Wisconsin"

// var teamArr = team.split(' ')

// console.log(teamArr);

// for (var char = 0; char < team.length; char ++) {
//     console.log(team[char]);    
// }

// for (var wordIdx = 0; wordIdx < teamArr.length; wordIdx++){
//     console.log(teamArr[wordIdx]);
// }

// var teamWord = teamArr.join(" ")

// console.log(teamWord);

// var team = "Green Bay Packers is from Wisconsin"

// var reverseTeam = team.split(" ").reverse().join(" ")

// console.log(reverseTeam);


// var charSheet = {
//     name : "tim berners-lee", 
//     title: "sir", 
//     powers: "invent the web"
// }
// charSheet["age"] = 99

// console.log(charSheet);

// charSheet["name"] = "Tim Berners-Lee"

// console.log(charSheet);

// console.log(charSheet.powers)

// delete charSheet.title

// console.log(charSheet);

// var fName = "Matt"

// for (let x of fName) {
//     console.log(x)
// }


// var charSheet = {
//     name : "tim berners-lee", 
//     title: "sir", 
//     powers: "invent the web"
// }

// for (var key in charSheet){
//     console.log(key, charSheet[key]);
// }

function add(num1, num2){
    return num1 + num2
}

var sum = add(4, 6)

console.log(sum);