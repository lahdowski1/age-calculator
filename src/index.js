import express from 'express';
import config from "./config.js";

const app = express();
config(app);
