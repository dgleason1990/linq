const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const examples = require('./examples');
const companyExample = require('./companyExample');
const nodemailer = require('nodemailer');
const {geolocation} = require('./headers');
const axios = require('axios');
const Sequelize = require('sequelize');
const db = require('./models')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public', {
    setHeaders: function(res, path) { res.set("Cache-Control", "no-cache"); }
}));

const sequelize = new Sequelize('linq','root', 'root',
  {
      "host": "localhost",
      "dialect": "mysql",
      "dialectOptions": {
              "socketPath": "/Applications/MAMP/tmp/mysql/mysql.sock"
      },
      define: {
          underscored: true
      }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.post('/businesses', (req,res)=>{
  console.log(req.body.genre)
  console.log(db.Industries)
  let industry = req.body.genre;
  // db.Industries.findAll({
	// 	// where: { 
  //   //   industry: 'Eyebrows'
  //   // }
  // })
  // .then(data=>console.log(data));
  res.json(examples)
})

app.post('/company', (req,res)=>{
    console.log(req.body.companyName);
    res.json(companyExample)
})

app.post('/clientlocation', async (req,res)=>{
  let clientAddress = req.body.address + ' ' + req.body.city + ' ' + req.body.province;
  let result = await axios('https://maps.googleapis.com/maps/api/geocode/json?address=' + clientAddress + '&key=' + geolocation);
  let clientLocation = result.data.results[0].geometry.location;
  res.json(clientLocation)
});

app.post('/location', (req,res)=>{
  console.log(req.body)
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