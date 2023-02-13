import { Schema, model, connect, Types } from 'mongoose';

interface IEvent {
  name: string;
  _id: Types.ObjectId;
  status: string;
  queue_time: Date;
  scan_start_time: Date;
  scan_end_time: Date;
}

const EventSchema = new Schema<IEvent>({
  name: { type: String },
  status: { type: String },
  queue_time: { type: Date },
  scan_end_time: { type: Date },
  scan_start_time: { type: Date },
});

const ScanModel = model<IEvent>('Event', EventSchema);

export default ScanModel;
