
const sum = (...args)=>{
    let s = 0
    args.forEach(arg => {
        s += arg
    })
    return s
}

module.exports = sum