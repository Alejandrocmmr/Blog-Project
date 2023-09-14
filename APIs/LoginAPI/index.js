import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from 'express';
const server = express()
const logins = require('./src/logins.json' )

let patern

// server.get('/Login',(req,res)=>{
//     patern = req.body.patern
//     if (patern/2!=0 || patern >=1000 ){
//         return res.json(logins)
//     }

// })
 
server.post('/',(req,res)=>{



} )




server.listen(5100, ()=>{
    console.log('api on')
})


var cors = require('cors');
server.use(cors())