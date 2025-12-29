import express from 'express'

const app = express();

app.use(express.json())

app.get('/' ,(req,res,) =>{
    res.send(`hello`)
})
app.post('/' ,(req,res) =>{
    const name = req.body.name
    res.json({name:`${name}`})
    console.log(`New created ${name}` )
})

app.listen(3000,() => {
    console.log("this server http://localhost:3000")
})