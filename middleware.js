import express from 'express'
const app = express();

app.use('/adhi',(req,res,next) => {     //router middleware
    console.log("Middleware worked");
    next();
})

app.use('/adithya',(req,res,next) => {        //router middleware
    console.log("Middleware worked");
    next();
})

app.get('/',(req,res)  => {             //application middleware
    res.end("The sever is running 3000")
})

app.get('/adhi',(req,res)  => {
    res.end("The sever adhi")
})

app.get('/adithya',(req,res)  => {
    res.end("The sever adithya")
})

app.listen(3000, () => {
    console.log("The server is running http://localhost:3000");
})