import express from "express";
import diagnosis from "./service/service.js";

const app = express();
app.use(express.json());

app.get('/', (req, res)=> {
    res.send("hello world")
})
app.post('/ai',async (req, res) => {
   try { 
    const  { prompt }  = req.body.message;
    if (!prompt) {
        return res.status(400).json({ success: false, error: "Prompt is required" });
    }
    const rawData = await diagnosis(prompt)
    const data = JSON.parse(rawData)
    res.json({ success: true, data }); 

    res.send("the data isn", data)
} catch (error){
    console.error(error);
    if (!res.headersSent) {
        res.status(500).json({ success: false, error: error.message });
    }
}

})

app.listen(4000, ()=> {
    console.log("the server is running ", 4000)
})
