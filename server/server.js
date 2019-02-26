const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

const PublicPath = path.join(__dirname, '../public')

//middlewares
app.use(express.static(PublicPath));

// routes
app.get('/', (req,res)=>{
    res.sendFile('index.html');
})

app.listen(port, ()=>{
    console.log(`Server is Up on port ${port}`);
});