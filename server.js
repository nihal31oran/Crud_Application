require("custom-env").env("dev");//from custonenv in npm website npm install custom-env in terminal
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const MONGOBDURL = process.env.MONGOBDURL
mongoose.connect(MONGOBDURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('database connected')
}).catch((error)=>{
    console.log(error)
});
const PORT = process.env.PORT || 5000;//njiboh ml fichier .dev.env variable denvirenement
const server  = app.listen(PORT,()=>{
    console.log('Server is up and lestning on port :'+PORT);
})