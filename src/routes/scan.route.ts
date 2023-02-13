import express from 'express';
import scanController from '../controllers/scan.controller';
const router = express.Router();

router.get('/', scanController.getList);
router.post('/', scanController.create);

export default router;
