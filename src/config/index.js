import * as dotenv from 'dotenv';

dotenv.config();
export const port = process.env.PORT;
export const db_uri = process.env.MONGO_URI;
//export const openai = process.env.OPENAI;




//////////////////////////////////////
//import { Configuration, OpenAIApi } from 'openai';
//import dotenv from 'dotenv';
//dotenv.config();

//const configuration = new Configuration({
//  apiKey: process.env.OPENAI_API_KEY,
//});

//const openai = new OpenAIApi(configuration);

//export default openai;
