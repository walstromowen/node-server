const express = require('express');
const app = express();
const fileSystem = require('fs');

const bodyParser = require('body-parser')
app.use( bodyParser.json() );      
app.use(bodyParser.urlencoded({  extended: true }));

let user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}

let id = 2;

app.get('/listUsers', (req, res)=>{
    fileSystem.readFile(__dirname + '/' + 'users.json', 'utf8', (err, data)=>{ //./users.json' This works to __dirname is a sepecial node variable that tells of specific absolute path
        console.log(data);
        res.end(data); 
    })
})

app.post('/addUser', (req, res)=>{
    fileSystem.readFile( __dirname + "/" + "users.json", 'utf8', (err, data)=>{
       let users = JSON.parse(data);
       users["user4"] = user["user4"]
       console.log(users);
       res.end(JSON.stringify(users));
    });
 })

 app.get('/:id', (req, res)=>{
    fileSystem.readFile( __dirname + "/" + "users.json", 'utf8', (err, data)=>{
        let users = JSON.parse( data );
        let user = users["user" + req.params.id] ;
        console.log(user)
        res.end(JSON.stringify(user));
    });
 })

 app.delete('/deleteUser', (req, res)=>{
    fileSystem.readFile( __dirname + "/" + "users.json", 'utf8',  (err, data)=>{
       data = JSON.parse( data );
       delete data[ "user" + 2];
       console.log(data);
       res.end( JSON.stringify(data));
    });
 })

const server = app.listen(8081, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("Example app listenening at http://%s:%s", host, port)
    console.log(__dirname);
})


//app.listen(3000)
        //res.json("message": 'hello'); //send json code to user
        //res.statusCode(500)//sends error code to user this can be chained with .send() for a message

/*
var express = require('express');
var app = express();
var fs = require("fs");

app.get('listUsers', function (req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    })
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listenening at http://%s:%s", host, port)
})
    */