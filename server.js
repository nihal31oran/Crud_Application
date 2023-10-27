const express = require('express');
const app = express();
const PORT = process.env.PORT//njiboh ml fichier .dev.env variable denvirenement
const server  = app.listen(PORT,()=>{
    console.log('Server is up and lestning on port :'+PORT);
})