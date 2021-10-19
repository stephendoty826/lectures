
// importing fs core module from node to read/write from file on disk
const fs = require("fs")


// // reading a file
// fs.readFile("preamble.txt", (error, contentsOfFile)=>{
//     if(error){
//         console.log(error.message);
//         return
//     }

//     console.log(`File Contents: ${contentsOfFile}`);
// })



// // writing to a file --- NOTE: this overwrites the content of the file. 
// fs.writeFile("preamble.txt", "I love Node", function(error){
//     if(error) {
//         console.error(error.message)
//         return
//     }
//     console.log("File Save: ", "preamble.txt")
// })



// // deleting a file
// fs.unlink("preamble.txt", (error)=>{
//     if(error) throw error
//     console.log("successfully deleted preamble.txt");
// })




