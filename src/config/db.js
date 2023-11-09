
//const uri = `mongodb+srv://MOTHERSHIP:${password}@cluster0.ibgqjjw.mongodb.net/${dbname} `
//const dbname = ''
//const password = 'HkMd30Z3LFBEYANZ'


import {connect} from 'mongoose';
import {db_uri} from './index.js'

//Database connection
const dbConnection = async () =>{
    try {
      const db = await connect(db_uri);
      console.log('Database connection se conecto', db.connection.name);
    } catch(error){
      console.error('Database connection error no se conecto', error)
    }
  };
  
  export { dbConnection as default }