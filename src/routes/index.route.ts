import express from 'express';
import scanRouter from './scan.route';
import eventRouter from './event.route';

const router = express.Router();

router.use('/scan', scanRouter);
router.use('/event', eventRouter);
export default router;
