import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
const app = express();
import Routes from './routes/route.js';
import bodyParser from 'body-parser';
const PORT = 8000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
// app.use(bodyParser.urlencoded({ extended : true}));
app.use('/', Routes);
Connection();


app.listen(PORT , () => {
    console.log(`Your server is running successfully on PORT ${PORT}`);
});