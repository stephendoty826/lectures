
// Matt's solution
const Stack = require("./stack");

// inputs: string; output: boolean
function balanced_brackets(codeString) {
    const stack = new Stack();

    if (!codeString.length) {
        return true;
    }

    const opening = {
        "(": true,
        "{": true,
        "[": true,
    };

    const closing = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let i = 0; i < codeString.length; i++) {
        const char = codeString[i];

    // char = '{'
    // opening[char] = undefined

        if (opening[char]) {
            stack.push(char);
        }

    // char = ']'
    //

        if (char in closing) {
        // stack = ['{','(', '{', '(', '[']
            const lastChar = stack.pop();

        // char = '['
        // closing[char] = "["
            if (lastChar !== closing[char]) {
                return false;
            }
        }
    }
    return stack.length() === 0 ? true : false;
}

console.log(balanced_brackets("{age(cz{gge(gea[aa]gadz)}gea)}")); // True
console.log(balanced_brackets("{age(cz{gge(gea[aa]gadz)gea)}")); // False
console.log(balanced_brackets("{age(cz{gge(gea[aa]gadz)}gea)}}")); // False
console.log(balanced_brackets("[{()[()]}]")); // True
console.log(balanced_brackets("[{()[(]}]")); // False
console.log(balanced_brackets("[}")); // False
console.log(balanced_brackets("")); // True