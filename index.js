// const http=require('http')

// const hostname = '127.0.0.1'
// const port = 3000
//     const nombre= "Leslie Gómez"

// const server= http.createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/plain');
//     res.end(`Mi nombre es:${nombre} `)
// })

// server.listen(port,hostname, ()=>{
//     console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`)
//  console.log(nombre)
// })

// EXPRESS


// const express=require('express')

// const app = express()
// const port = 3000
// const resta=100-80


// app.get('/',(req,res)=>{
//     res.send(`La Resta es ${resta} en express`)
// })

// app.listen(port,() =>{
//     console.log(`El servidor se está ejecutando en http://localhost:${port}/`)
//     console.log(`La Resta es ${resta} `)

// })

// CORS

var express = require('express')
var cors = require('cors')
var app = express()

let users = [
    {nombre:"Javier", apellido: "Pacheco", correo: "javier@mail.com"},
    {nombre:"Andres", apellido: "Polanco", correo: "andres@mail.com"},
    {nombre:"Julian", apellido: "Mattos", correo: "julian@mail.com"},
    {nombre:"Andrea", apellido: "Sarmiento", correo: "andrea@mail.com"},
    {nombre:"Jazmin", apellido: "Gonzales", correo: "jazmin@mail.com"},
]


app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})