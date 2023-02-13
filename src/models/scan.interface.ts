import { Types } from 'mongoose';

export interface IBegin {
  line: number;
}

export interface IPosition {
  begin: IBegin;
}

export interface ILocation {
  path: string;
  positions: IPosition;
}

export interface IFinding {
  type: string;
  location: ILocation;
}

export interface IScan {
  findings: IFinding[];
  _id: Types.ObjectId;
  scan_key: number;
}
