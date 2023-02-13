import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import db from './db';
// import routes from './routes/index.route';
import scanController from './controllers/scan.controller';
dotenv.config();

db()
  .then(() => {
    const app: Express = express();
    const port = process.env.PORT;
    // app.use('/api', routes);
    app.get('/', scanController.getList);

    app.post('/', scanController.create);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('database error');
  });
