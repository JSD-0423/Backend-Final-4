import express, {
  Application,
  Request,
  Response,
  json,
  urlencoded
} from 'express';
import { connect } from './connection/connect';
import { productsRouter, categoriesRouter, brandsRouter } from './routers';
import cors from 'cors';
import passport from 'passport';
import { errorHandler } from './middlewares/errorHandler.middleware';
import fileUpload from 'express-fileupload';
import authRouter from './routers/auth.router';
import cartsRouter from './routers/carts.router';
import cookieParser from 'cookie-parser';

const app: Application = express();

// Middlewares
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors({ origin: '*' }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp'
  })
);
app.use(passport.initialize());
app.use(cookieParser());

require('./auth/passport');

// Database Connection
connect();

// 🚀 Welcoming endpoint
app.get('/', (req: Request, res: Response) => {
  res.json({
    msg: 'Welcome to our API 🚀'
  });
});

// Routes
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);
app.use('/brands', brandsRouter);
app.use('/auth', authRouter);
app.use('/carts', cartsRouter);

// Post Middlewares
app.use(errorHandler);

export default app;
