import scanModel from '../models/scan.model';
import { Request, Response } from 'express';

export default {
  getList: async (req: Request, res: Response) => {
    const data = await scanModel.find().lean();
    return res.json({ data });
  },

  create: async (req: Request, res: Response) => {
    const data = req.body;
    const newScan = new scanModel(data);
    const result = await newScan.save();
    return res.json({ result });
  },
};
