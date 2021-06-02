const fs = require("fs")
// const readlineSync = require("readline-sync")
function readline(){
    fs.readFile("./userDetails.json","utf8",(err ,data) => {
        if(err){
            err()
        }
        else{
            jdata = JSON.parse(data)
            // console.log(typeof(jdata))
        }
    let user = {
        "Id": 1,
        "name":"shanti",
        "Hobby":"butterfly"
    }
    jdata.push(user)
    fs.writeFile("./userDetails.json",JSON.stringify(jdata),err => {
        if (err){
            console.log(err)
        }
        console.log(jdata)
    })
    })
}
readline()