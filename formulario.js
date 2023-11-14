//import { openai } from "./src/config/?";

console.log('hola');

const formulario = document.querySelector('#formulario');



// funcion para extraer todos los datos del formulario y convertirlo en formato json

const procesaTodo= (event) => { //evento submit 
  /*para una accion predeterminada del evento */
  event.preventDefault();
  /*constructor que crea un objero de tipo formData  */
const datos= new FormData(event.target) /* varible crea objeto de tido fD, new xq crea objeto y un parametro event target q nos da acceeso al formulario */
console.log(datos);
const datosCompletos = Object.fromEntries(datos.entries());
console.log(datosCompletos);
console.log(JSON.stringify(datosCompletos));

}
formulario.addEventListener('submit', procesaTodo);





///////////////////////////////////////////////////////////////////
/*const API_KEY='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' // ruta de donde sacamos informacion

async function getCompletion(prompt) {
    const response = await fetch(`https://api.openai.com/v1/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 20,
      }),
    });
    //console.log(data)
    
    return await res.json();
  
   
  }

getCompletion()

const prompt = document.querySelector("#prompt");
const button = document.querySelector("#generate");
const output = document.querySelector("#output");

button.addEventListener("click", async () => {
    console.log(prompt.value);
  
    if (!prompt.value) window.alert("Please enter a prompt");
  
    const response = await getCompletion(prompt.value);
    console.log(response);
    output.innerHTML = response.choices[0].text;
  });
  
  
  
 * @swagger
 * /users:
 *   get:
 *    summary: return all users
 *    tags: [User]
 *    responses:
 *      200:
 *        description: all users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#components/schema/User'
 *      500:
 *        description: Internal Server Error
 */




