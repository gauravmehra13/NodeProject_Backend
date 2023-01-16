const express = require('express')
const bolly = require('./Page/Bollywood');
const food = require('./Page/Food')
const fitness = require('./Page/Fitness')
const holly = require('./Page/Hollywood')
const sport = require('./Page/Sport')
const tech = require('./Page/Technology')
const app = express();
const cors = require('cors')

app.use(cors());

app.use("/", bolly);
app.use("/", food);
app.use("/", fitness);
app.use("/", holly);
app.use("/", sport);
app.use("/", tech);

app.listen(4500,() =>{
    console.log("App is Running");
})