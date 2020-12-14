
var express = require('express'),
bodyParser = require('body-parser');
mongoose = require('mongoose'),
port = process.env.PORT ||3000,
app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(bodyParser());

mongoose.connect('mongodb://localhost:27017/Dasboard_project')

/*var userSchema = mongoose.Schema({
//userID: Number,
location: String,
personInHouse: Number,
houseSize: String

});*/

var userSchema = mongoose.Schema;

//var User = mongoose.model('User',userSchema);

var User = mongoose.model('User',new userSchema({location: String, personInHouse:Number, houseSize:String}),
 'User'); // collection name

var router = express.Router();

router.route('/')
.get(function(req, res){
    User.find(function(err,user){
        if(err){
            res.send(err);
        }
        res.send(user);
    });   
})

.post(function(req,res){
var user= new User();
//user.userID= req.body.userID;
user.location= req.body.location;
user.personInHouse = req.body.personInHouse;
user.houseSize = req.body.houseSize;
body.save(function(err){
    if(err){
        res.send(err);
    }
    res.send({message: 'user created'});

});

});

app.use('/api',router);



app.listen(port,function(){
console.log('Listening on port' + port);
})