import { Schema, model, connect, Types } from 'mongoose';

interface IBegin {
  line: bigint;
}

interface IPosition {
  begin: IBegin;
}

interface ILocation {
  path: string;
  position: IPosition;
}

interface IFinding {
  type: string;
  location: ILocation;
}

interface IScan {
  findings: IFinding[];
  _id: Types.ObjectId;
  scan_key: string;
}

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
    position: { type: positionSchema, required: true },
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
  scan_key: { type: String },
});

const ScanModel = model<IScan>('Scan', scanSchema);

export default ScanModel;
