
const jwt = require('jwt-simple');

let userInfo = {
  id: "1234",
  userName: "stephendoty826",
  email: "me@me.com"
}

const secret = "asdfgwarvslkjqweproiumnzxcv"

const token = (user) => {
  
  let timestamp = new Date().getTime()

  return jwt.encode({sub: user.id, name: user.userName, iat: timestamp}, secret)
}

let tokenID = token(userInfo)

console.log(tokenID)

let decode = jwt.decode(tokenID, secret)

console.log(decode)


