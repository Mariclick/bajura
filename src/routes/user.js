import express, { request } from "express";   // llamo a expres 
const router = express.Router()  // crear un enrutador, retorna un objeto router constructor

import  miModelo from "../models/users.js";



// CREAR USUARIO 
router.post('/users', (req, res) => { // funcion recibe el objeto de la peticion y obj de la resp 

  const user= miModelo(req.body);  //esto nos va a crear unusuario, con los datos q llegan del cuerpo de la peticion
   user
  .save() //guarda bd
  .then((data) => res.json(data)) //responde mostrando los datos
  .catch((error) => res.json({message:error})) // msj de error *7/
})

// OBTENER todos los USUARIOS

router.get('/users', (req, res) => { 
   const user= miModelo(req.body);   
   miModelo
   .find() 
   .then((data) => res.json(data)) 
   .catch((error) => res.json({message:error})) 
 })


export { router as default }

