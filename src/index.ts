import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import db from './db';
import routes from './routes/index.route';

dotenv.config();

db()
  .then(() => {
    const app: Express = express();
    const port = process.env.PORT;

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());

    app.use('/api', routes);
    app.all('*', (req: Request, res: Response) => {
      console.log(req.url);
      throw new Error('Resource not found on this server');
    });

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('database error');
  });
