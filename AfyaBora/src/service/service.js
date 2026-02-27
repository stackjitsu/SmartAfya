import dotenv from 'dotenv';
dotenv.config(); 
import { AiInterface } from '../utils/googleAi.js';


const diagnosis =async (prompt) => {
  
   try { 
    const response =  await AiInterface.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `${prompt} recommend a diagnosis and cause of action`,
    });
    return response.text
} catch (error ) {
    console.error(error.message)
}
}

export default diagnosis;