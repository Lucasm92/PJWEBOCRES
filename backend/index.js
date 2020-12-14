const express = require('express')
const body = require('body-parser')
var logger= require('morgan');
const mongoose = require('mongoose')

 
mongoose.connect('mongodb://localhost:27017/Home', {useNewUrlParser: true});

let app = express();
let port = 4000;


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})
  
app.use(logger('dev'));

app.listen(port, () =>  { 
    console.log('le serveur fonctionne')
})

app.use(body())

///SCHEMA Data
const dataschema= mongoose.Schema({

    type : String,
    value : Number,
    room : String

})

var Data = mongoose.model("Data",dataschema)
////



app.post('/data', async (req, res) => {
    const type = req.body.type; 
    const value = req.body.value
    const room = req.body.room
 
    if (!type || !value || !room) { 
        res.send('Il manque un argument')
        return
    }
 
    const new_data = new Data({ 
    type : type,
    value : value,
    room : room
    })
     
    await new_data.save() 
    res.json(new_data)
    return
 
})

app.get('/tempdata', async (req, res) => {

    let aggr = await Data.aggregate(
        [
            { $match: { type: "Temperature" } },
            {
              $group:
                {       
                  _id: {type : '$type', room:'$room'},
                  value: { $last: "$value" }
                }
            }
          ] 
    )

    await res.json(aggr)
})

app.get('/humidata', async (req, res) => {

    let aggr = await Data.aggregate(
        [
            { $match: { type: "Humidity" } },
            {
              $group:
                {       
                  _id: {type : '$type', room:'$room'},
                  value: { $last: "$value" }
                }
            }
          ] 
    )
    await res.json(aggr)
})

app.get('/airdata', async (req, res) => {

    let aggr = await Data.aggregate(
        [
            { $match: { type: "Airpollution" } },
            {
              $group:
                {       
                  _id: {type : '$type', room:'$room'},
                  value: { $last: "$value" }
                }
            }
          ] 
    )
    await res.json(aggr)
})

app.get('/data', async (req, res) => {
    let data = await Data.find() 
    await res.json(data)
})

app.delete('/:id', async(req, res) => {
    const id = req.params.id
    const suppr = await Data.deleteOne({_id : id})
    res.json(suppr)
     
})

app.patch('/:id', async(req, res) => {
    const id = req.params.id
    const data = await Data.findOne({_id : id})
     

    const type = req.body.type;
    const room = req.body.room
    const value  = req.body.value;
     

     
    if (type) {
        data.type = type
    }
    if (room) {
        data.room = room
    }
    if (value) {
        data.value = value
    }
     
    await data.save() // on sauvegarde les modifications
     
    res.json(data)
     
     
     
})


