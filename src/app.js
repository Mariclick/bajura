import express from 'express';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
import userRoutes from  './routes/user.js';

const app= express(); 
dbConnection()


//middleware 
app.use(express.json())
app.use('/api', userRoutes);



app.get('/',(request, response, error)=> {
    response.send('status: ok, Esta todo biennn!!' )

} )

app.listen(port, (error)=>{
    if (error){
        console.log('sErVeR error: failed');
        process.exit(1)
    }


    console.log(`server litening in por ${port}`);
})

console.log("hola");




 





