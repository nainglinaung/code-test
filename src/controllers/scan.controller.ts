import scanModel from '../models/scan.model';
import Agenda from '../agenda';
import eventModel from '../models/event.model';
import { Request, Response } from 'express';

export default {
  getList: async (req: Request, res: Response) => {
    // const data = await scanModel.find().lean();
    const data = 20;
    return res.json({ data });
  },

  create: async (req: Request, res: Response) => {
    const data = req.body;
    await Agenda.start();

    const newEvent = new eventModel({
      queue_time: new Date(),
      status: 'Queued',
    });

    const result = await newEvent.save();

    const job = Agenda.create('CREATE CONTACT', {
      ...data,
      queue_id: result._id,
    });

    await job.save();
    return res.json({ job });
  },
};
