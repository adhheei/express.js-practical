import express from 'express'
// import router from './route.js';

const app = express();

// app.use('/user',router)

app.post('/user',express.json(),(req,res) => {
    const {name,email} =req.body
    res.json({
        message:`user ${name} with email ${email} created successfully`
    })
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");  
})