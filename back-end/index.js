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
          timestamps: false,
          underscored: true
      }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.post('/businesses', async (req,res) => {
  let industryId;
  await db.Industry.findAll({
    where:{
      industry: req.body.genre
    }
  })
  .then( data => {
    industryId = data[0].dataValues.id;
    })
  db.Company.findAll({
    where:{
      industryId: industryId
    }
  })
  .then( data => {
    companyArr = [];
    data.forEach( company => companyArr.push(company.dataValues));
    res.json(companyArr)
  })
})

app.post('/company', async (req,res)=>{
    let companyName = req.body.companyName;
    let companyInfo;
    await db.Company.findAll({
      where:{ 
        businessName: companyName
      }
    })
    .then( data => {
      companyInfo = data[0].dataValues
    })

    let employeeInformation = []
    await db.Employee.findAll({
      where:{
        companyId: companyInfo.id
      }
    }).then( data => { 
      employeeInformation = data;
      companyInfo.employee = data
    })
    
    employeeIds = [];
    employeeInformation.forEach( result => employeeIds.push(result.id))
    await db.Service.findAll({
      where: {
        employeeId : employeeIds
      }
    }).then( data => { companyInfo.services = data });

    res.json(companyInfo)
})

app.post('/clientlocation', async (req,res)=>{
  let clientAddress = req.body.address + ' ' + req.body.city + ' ' + req.body.province;
  let result = await axios('https://maps.googleapis.com/maps/api/geocode/json?address=' + clientAddress + '&key=' + geolocation);
  let clientLocation = result.data.results[0].geometry.location;
  res.json(clientLocation)
});

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
    console.log('You are connected to port 8080')
})