const express = require("express");
const cors = require('cors');
const app = express();
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');
// //middlewares

app.use(bodyParser.json());
app.use(cors());

//import routes
const blogsRoute = require('./routes/blogs')
app.use('/blogs', blogsRoute)
//routes:


app.get('/', (req,res) =>{
    res.send('we are on home');
});



mongoose.connect(process.env.DB_CONNECTION123, function(err) {
    console.log(err)
});

app.listen(8000);
