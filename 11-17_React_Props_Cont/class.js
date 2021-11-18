
// this.props cannot be changed. They are immutable
const add = (num1, num2) => {
    num1 = num1 * 2 // Can't do this is num1 was a prop
    return num1 + num2
}