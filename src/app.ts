import express, { Application, json, urlencoded } from 'express';
import { connect } from './connection/connect';
import productsRouter from './routers/products.router';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.middleware';
import fileUpload from 'express-fileupload';

const app: Application = express();

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors({ origin: '*' }));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp',
}));

// Database Connection
connect();

// Routes
app.use('/products', productsRouter);

// Post Middlewares
app.use(errorHandler);

export default app;