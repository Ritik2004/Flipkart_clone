import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from './default.js'
import Router from "./routes/route.js";

const app = express();
dotenv.config();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
Connection();

app.use('/', Router);

const Port = 8000;



app.listen(Port, ()=> console.log("Sever running"));

DefaultData();