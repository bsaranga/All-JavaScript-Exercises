import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import template from './../template';
import { MongoClient } from 'mongodb';
import devBundle from './devBundle'; // only in development mode

// Load environment variables
dotenv.config({path: './config.env'});

const app = express();
devBundle.compile(app); // only in development mode

const CURRENT_WORKING_DIR = process.cwd();
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

app.get('/', (req, res) => {
    res.status(200).send(template())
});

const url = process.env.MONGO_URI;
MongoClient.connect(url, (err, db) => {
    if(!err){
        console.log("Connected successfully to mongodb server");
    }else{
        console.log(err.message);
    }
    db.close();
})

let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info("Server started on port %s.", port);
})