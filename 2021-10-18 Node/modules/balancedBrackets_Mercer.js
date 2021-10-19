
// Mercer's solution
const Stack = require('./stack');

function balancedBrackets(string) {
    let newStack = new Stack();
    let isError = false;
    for (char of string){
        switch (char) {
            case '(':
                newStack.push(char)
                break;
            case '{':
                newStack.push(char)
                break;
            case '[':
                newStack.push(char)
                break;
            case ')':
                
                if (newStack.peek() === '('){
                    newStack.pop();
                }
                else{
                    isError = true;
                }
                break;
            case '}':
                if (newStack.peek() === '{'){
                    newStack.pop();
                }
                else{
                    isError = true;
                }
                break;
            case ']':
                if (newStack.peek() === '['){
                    newStack.pop();
                }
                else{
                    isError = true;
                }
                break;
        
            default:
                break;
        }
    }
    console.log("error:", isError);
}

balancedBrackets('')