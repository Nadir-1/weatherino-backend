const PORT=8000;
const express=require('express');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors({
    origin: process.env.frontendURL
}));
  
app.get('/weather',(req,res)=>{
   const { city } = req.query;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res => {
        if (!res.ok) {
            throw new Error('Could not fetch data from the server');
        }
        return res.json();
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err.message)
    })
})

app.listen(PORT);


