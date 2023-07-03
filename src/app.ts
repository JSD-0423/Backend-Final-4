require("dotenv").config();
import express, { Application, json, urlencoded } from "express";
import { connect } from "./connection/connect";
import { testRouter } from "./routers/test.router";
import cors from "cors";

const app: Application = express();

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors({ origin: '*' }));

// Database Connection
connect();

// Routes
app.use('/test', testRouter);

export default app;