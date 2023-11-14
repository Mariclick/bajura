import express from 'express';
import { port } from './config/index.js';
import dbConnection from './config/db.js';
import userRoutes from  './routes/user.js';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path';




const swaggerSpect ={
    definition: {
        openapi: '3.1.0',
        info: {
          title: 'grupo 3 js',
          version: '1.0.1',
        },
        servers:[
          {
          url:'http://localhost:3000'
          }
        ],
      },
      apis: [
        `${path.join('./routes/*.js')}`

       ], 
    
}
export { swaggerJsDoc as default }


const app= express(); 
dbConnection()



//swagger
/*app.use(
  '/api-doc',swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(swaggerSpect)))*/
app.use('/api-doc', swaggerUI.serve);
app.use('/api-doc', swaggerUI.setup(swaggerSpect));




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




 





