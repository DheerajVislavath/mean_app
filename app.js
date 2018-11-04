var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var body_parser = require('body-parser');
var path = require('path');
var route = require('./routes/route');


var app = express();
    
//connecting to mongo database
mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to the database mongodb @27017');
});

mongoose.connection.on('error', (err) => {

    if(err) {
        console.log('Error in Database connection: ' + err);
    }

})

const port = 3000;

//middleware
app.use(cors());

app.use(body_parser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//use route.js for endpoint starting with /api
app.use('/api', route);

//Routes connecting the server
app.get('/', (req, res) => {
  res.send('Home page');
})

//listening to the server
app.listen(port, () => {
    console.log('Server started at port: ' + port);
})      