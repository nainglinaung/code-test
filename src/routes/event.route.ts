import express from 'express';
import eventController from '../controllers/event.controller';
const router = express.Router();

router.get('/', eventController.getList);

export default router;
