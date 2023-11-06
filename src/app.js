import express from 'express';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
console.log(port);


const app= express(); 
dbConnection()

app.get('/',(request, response, error)=> {
    response.send('status: ok' )

} )

app.listen(port, (error)=>{
    if (error){
        console.log('sErVeR error: failed');
        process.exit(1)
    }


    console.log(`server litening in por ${port}`);
})
console.log("hola");




 





