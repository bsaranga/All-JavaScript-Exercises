import config from './../config/config';
import mongoose, { mongo } from 'mongoose';
import Template from './../template';
import app from './express';

mongoose.Promise = global.Promise;

mongoose.connect(config.MongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connection.on('error', () => {
    throw new Error(`Unable to connect to database: ${mongoUri}`);
})

app.listen(config.port, (err) => {
    if(err){
        console.log(err);
    }
    console.info('Server has started on port %s', config.port);
})

app.get('/', (req, res) => {
    res.status(200).send(Template());
})