
const crypto = require("crypto") // used to create a salt
const pbkdf2 = require("pbkdf2") // allow us to hash a string

// req.body.password
// password + salt 
let password = "some user password"

let salt = crypto.randomBytes(20).toString("hex")

// console.log(salt);

// password
// salt
// number of iterations
// 256
// SHA256
let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, "sha256") // encrypted and hashed

let hash = key.toString("hex") 

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}` // store in db

// if we split on the "*", we will get an array [pbkdf2_sha256, 3600, salt, hash]

// console.log(hash);

// login with password
// re-encrypt password
// compare to the hash in our db

//!-------------------------------------------------------------------------------------

let loginPassword = "some user password"
// figure out if the loginPassword matches original password

// retrieve password from db based on username
let pass_parts = stored_pass.split("*")

let keyNewLogin = pbkdf2.pbkdf2Sync(
        loginPassword, 
        pass_parts[2], 
        parseInt(pass_parts[1]), 
        256, 
        "sha256"
    )

let hashLoginPassword = keyNewLogin.toString("hex")

if(hashLoginPassword === pass_parts[3]){
    console.log("password match");
}
else {
    console.log("incorrect password");
}

