import { Schema, model, connect, Types } from 'mongoose';
import {
  IBegin,
  IPosition,
  ILocation,
  IFinding,
  IScan,
} from './scan.interface';

const beginSchema = new Schema<IBegin>(
  {
    line: { type: Number, required: true },
  },
  { _id: false },
);

const positionSchema = new Schema<IPosition>(
  {
    begin: { type: beginSchema, required: true },
  },
  { _id: false },
);

const locationSchema = new Schema<ILocation>(
  {
    path: { type: String, required: true },
    positions: { type: positionSchema, required: true },
  },
  { _id: false },
);

const findingSchema = new Schema<IFinding>(
  {
    type: { type: String, required: true },
    location: { type: locationSchema, required: true },
  },
  { _id: false },
);

const scanSchema = new Schema<IScan>({
  findings: [findingSchema],
  scan_key: { type: Number },
});

const ScanModel = model<IScan>('Scan', scanSchema);

export default ScanModel;
