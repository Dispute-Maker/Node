const fs = require("fs");

// ..sync
// fs.writeFileSync("./test.txt","hello there!!")

// ..async
// fs.writeFile("./test.txt","my name is ",(err)=>{})

// const result = fs.readFileSync("./contact.txt", "utf-8")
// console.log(result)

// fs.readFile("./contact.txt", "utf-8",(err,result)=>{
//   console.log(result)
// })

// fs.appendFileSync('./contact.txt','\nmahi : +919987654321')

fs.cpSync('./test.txt','copy.txt')

fs.unlinkSync('./copy.txt')

// console.log(fs.statSync('./test.txt'));

const os= require('os')
console.log(os.cpus().);


