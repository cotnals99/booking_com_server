import  express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router()

// router.get('/', (req, res)=>{
//     res.send("Test")
// })

//Create
router.post('/', async (req, res)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
        
    } catch (error) {
        res.status(500).json(error)
    }

})

//Update


//Delete


//Get


//Get All


export default router;