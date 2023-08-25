import express from "express";
import dotenv from 'dotenv';

import Connection from "./database/db.js";
import DefaultData from './default.js'

const app = express();
dotenv.config();

const Port = 8000;

Connection();

app.listen(Port, ()=> console.log("Sever running"));

DefaultData();