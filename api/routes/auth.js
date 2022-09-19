import  express from "express";

const router = express.Router()


router.get('/', (req, res)=>{
    res.send('This is Auth Page')
})

router.get('/register', (req, res)=>{
    res.send('This is Register Page')
})

export default router;