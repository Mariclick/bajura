//import { openai } from "./src/config/?";

console.log('hola');


const formulario= document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')
///////////////////////////////////////////////////////////////////
const apy_key=''

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




