import eventModel from '../models/event.model';

import { Request, Response } from 'express';

export default {
  getList: async (req: Request, res: Response) => {
    const data = await eventModel.find().lean();
    return res.json({ data });
  },
};
