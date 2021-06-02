const express = require("express");
const app = express();
const fs = require('fs')
app.use(express.json())

app.get('/getdata', (req, res) => {
    fs.readFile(__dirname + "/api.json", (err, data) => {
        // console.log(data,".........")
        res.send(data)
    })
})

app.get('/getdata/:id', (req, res) => {
    console.log(req.params)
    var id = req.params.id
    var list = []
    fs.readFile(__dirname + "/api.json", (err, data) => {
        data = JSON.parse(data)
        for (i of data) {
            console.log(i,"**")
            if (i['id'] == id) {
                list.push(i)
                
            }
        }
        res.send(list)
        // console.log(list)
    })
})

app.listen(8000)
    console.log("server start.........")
