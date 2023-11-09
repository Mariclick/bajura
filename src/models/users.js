import {Schema, model} from 'mongoose'

const miModelo = new Schema({

  nombre: {
    type: String,
    require: true,
    
  },
  personaje: {
    type: String,
    require: true
  },
  motivo: { 
    type: String,
  },
  
});

export default model('User', miModelo);

 
