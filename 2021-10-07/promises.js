console.log('state 1');
let promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        let isError = false
        if(!isError){
            console.log('state 2');
            resolve('foo')
        }
        else{
            reject('there was an error')
        }
    }, 2000)
})
.then(resultOfPromise=>{
    console.log('state 4', resultOfPromise);
    return "here is your data"
})
.then(receiveDataFromAbove =>{
    console.log("state 5", receiveDataFromAbove);
})
.catch(err =>{
    console.log('state 4', err);
})

console.log('state 3');