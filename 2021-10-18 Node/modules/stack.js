
class Stack {

    constructor() {
        this.data = []
    }

    pop = () => {
        
        return this.data.pop()
    }

    push = (val) => {
        this.data.push(val)
    } 

    peek = () => {
        return this.data[this.data.length - 1]
    }

}

module.exports = Stack