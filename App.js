const express=require('express');

const app=express();

const port=8000;

app.get('/',(req,res)=>{

    res.send('Helllooo')
})

app.get('/contact',(req,res)=>{

res.send("Hello from Contact Page ")

})

app.listen(port,()=>{
    console.log('listening at port 8000')
})