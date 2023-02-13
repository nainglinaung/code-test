// const Router = require("express").Router();
import express, { Router, Request, Response } from 'express';
import scanRouter from './scan.route';

const router = express.Router();

router.use('/scan', scanRouter);
router.use('/test', (req: Request, res: Response) => {
  return res.json({ aaa: 'hello' });
});
export default Router;
