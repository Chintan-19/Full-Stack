const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require ('colors');
const mongoose = require ("mongoose");
//config dot env file
dotenv.config();

//rest object
const app = express();
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("connected to database");
})
.catch((error)=> {
    console.log(`not connected, ${error}`);
});

//middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//routes
app.get('/', (_req,res) => {
    res.send('<h1>Hello from Chintan</h1>');
});

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
});



