// var express = require('express');
// var app = express();
// var things = require('./things.js')

// app.use ('/things',things)

// app.listen(5000,()=>{
//     console.log("********start listening port ********")
// })
// app.get('/hello/:id([0-9]{3})/:name',function(req,res){
//    console.log(req.params)
//     res.send(`The id's is ${req.params.id} and name  is ${req.params.name}`)
// })
// app.listen(5000)


// var express = require('express');
// var app = express();

// app.get('/things/:id([0-9]{5})', function(req, res){
//    res.send('id: ' + req.params.id);
// });
// const knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         host: 'localhost',
//         user: 'root',
//         password: 'Shanti123#@!',
//         database: 'db_name'
//     }
// });
// app.get('/getdata', function (req, res, knex) {
//     knex.select().from('users').then((mes) => {
//         console.log(mes).catch((err) => {
//             console.log(err)
//         })
//     })
// })
// app.listen(8000)
// console.log("sever start**********")

