const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const examples = require('./examples');
const companyExample = require('./companyExample');
const nodemailer = require('nodemailer');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public', {
    setHeaders: function(res, path) { res.set("Cache-Control", "no-cache"); }
}));

app.post('/businesses', (req,res)=>{
    console.log(req.body);
    // will have to search req.body.businessType to find data stored in database
    console.log(examples)
    res.json(examples)
})

app.post('/company', (req,res)=>{
    console.log(req.body.companyName);
    res.json(companyExample)
})

app.post('/location',(req,res)=>{
  console.log(req)
  res.json(examples)
})

app.post('/booking', (req,res)=>{
      let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
          user: 'david.gleason.portfolio@gmail.com',
          pass: ';LpJ/8NFLD8qn[]_'
        },
        tls:{
          rejectUnauthrized: false
        }
      });
      let mailOptions={
        from: 'david.gleason.portfolio@gmail.com',
        to: 'dgleason1990@gmail.com',
        subject: 'A booking request from ' + req.body.clientName,
        text: 'This client is looking to book an appointment with ' + req.body.employeeName + 'at' + req.body.booking
      };
      transporter.sendMail(mailOptions, (err, info)=>{
        if (err){
          return console.log(err)
        }
        console.log('Message was Sent');
        console.log(info)
      })
      res.send('Message has been sent')
  })

app.listen(8080, () => {
    console.log('you are connected to port 8080')
})