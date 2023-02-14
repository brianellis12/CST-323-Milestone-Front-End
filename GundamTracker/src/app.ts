import express from 'express';
import gundamRouter from './gundam/gundam.routes';
import logger from './middleware/logger.middleware';
import helmet from 'helmet';
import cors from 'cors';

require('dotenv').config();

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localHost:${port}`)
});

if(process.env.NODE_ENV == 'development') {
  // add logger middleware
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode')
}

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Enable all CORS request.
// needs to be installed:
// npm install cors
app.use(cors());

// Adding set of security middleware
// needs to be installed:
// npm install helmet
app.use(helmet());

app.use('/', [gundamRouter]);