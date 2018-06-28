// Set up
var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

// Configuration
mongoose.connect('mongodb://admin:admin@blockbusterdb-shard-00-00-gucko.mongodb.net:27017,blockbusterdb-shard-00-01-gucko.mongodb.net:27017,blockbusterdb-shard-00-02-gucko.mongodb.net:27017/blockbusterDB?ssl=true&replicaSet=blockbusterDB-shard-0&authSource=admin&retryWrites=true');

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Models
var Movie = mongoose.model('Movie', {
    Peak: String,
    Title: String,
    WorldwideGross: Number,
    Year: Number
});

// Routes

    // Get reviews
    app.get('/api/movies', function(req, res) {

        console.log("fetching movies");

        // use mongoose to get all reviews in the database
        Movie.find(function(err, movies) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(movies); // return all reviews in JSON format
        });
    });

    app.post('/api/movies', function(req, res) {

        Movie.find(req.body, function(err, movies){
            if(err){
                res.send(err);
            } else {
                res.json(movies);
            }
        });

    });


    // create review and send back all reviews after creation
    app.post('/api/publishMovie', function(req, res) {

        console.log("creating movie");

        // create a review, information comes from request from Ionic
        Movie.create({
            Peak : req.body.peak,
            Title : req.body.title,
            WorldwideGross: req.body.gross,
            Year: req.body.year,
            done : false
        }, function(err, movie) {
            if (err)
                res.send(err);

            // get and return all the reviews after you create another
            Movie.find(function(err, movies) {
                if (err)
                    res.send(err)
                res.json(movies);
            });
        });

    });

    // delete a review
    app.delete('/api/movies/:movie_id', function(req, res) {
        Movie.remove({
            _id : req.params.movie_id
        }, function(err, movie) {

        });
    });


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
