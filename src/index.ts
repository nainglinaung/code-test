import express, { Express } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import db from './db';
// import routes from './routes/index.route';
import scanController from './controllers/scan.controller';
dotenv.config();

db()
  .then(() => {
    const app: Express = express();
    const port = process.env.PORT;
    // app.use('/api', routes);
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    app.get('/', scanController.getList);

    app.post('/', scanController.create);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('database error');
  });
