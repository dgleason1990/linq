const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/businesses', (req,res)=>{
    console.log(req.body);
    res.json('received')
})

app.listen(8080, () => {
    console.log('you are connected to port 8080')
   })