
const Stack = require("./stack")

function areBracketsBalanced(string){

    let isBalanced = false
    let stack = new Stack()
    let array = string.split("")

    if(!array.length){
        return isBalanced = true
    }

    array.forEach(el =>{
        let popEl
        switch(el){
            case "(":
            case "[":
            case "{":
                stack.data.push(el)
                break
            case ")":
                popEl = stack.data.pop()
                if(popEl == "("){
                    if(stack.data.length == 0){
                        isBalanced = true
                    }
                    break
                }
            case "]":
                popEl = stack.data.pop()
                if(popEl == "["){
                    if(stack.data.length == 0){
                        isBalanced = true
                    }
                    break
                }
            case "}":
                popEl = stack.data.pop()
                if(popEl == "{"){
                    if(stack.data.length == 0){
                        isBalanced = true
                    }
                    break
                }
            default:
                break
        }
    })
    return isBalanced
}

let result = areBracketsBalanced("")

console.log(result)




