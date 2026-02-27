import express from "express";
const router = express.Router();
import diagnosis from "../service/service";

router.post('/ai', async (req, res) => {
    try { 
        const { message } = req.body; 
        if (!message) {
            return res.status(400).json({ success: false, error: "Prompt is required" });
        }
        const rawData = await diagnosis(message); 
        let data;
        try {
            data = JSON.parse(rawData);
        } catch (error) {
            data = rawData;
        }
        res.json({ success: true, data }); 
    } catch (error) {
        console.error(error);
        if (!res.headersSent) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
});

export default router;