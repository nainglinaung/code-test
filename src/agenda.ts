import Agenda, { Job, JobAttributesData } from 'agenda';
import axios from 'axios';
import {
  IFinding,
  ILocation,
  IPosition,
  IBegin,
} from './models/scan.interface';
import { faker } from '@faker-js/faker';
import scanModel from './models/scan.model';
import eventModel from './models/event.model';
import { Types } from 'mongoose';
const mongoConnectionString = 'mongodb://root:rootpassword@localhost:27017/';
const agenda = new Agenda({ db: { address: mongoConnectionString } });

function delay(second: number) {
  if (second != 0) {
    return new Promise((resolve) => setTimeout(resolve, second * 1000));
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface StartScan extends JobAttributesData {
  name: string;
  scan_key: string;
  queue_id: Types.ObjectId;
}

agenda.define<StartScan>('CREATE CONTACT', async (job: Job<StartScan>) => {

  const scanData = job.attrs.data;

  await eventModel.findByIdAndUpdate(scanData.queue_id, {
    $set: {
      status: 'In Progress',
      scan_start_time: new Date(),
    },
  });

  const vulnerabilities = getRandomInt(5);

  const delaySeconds = getRandomInt(10);
  const { data } = await axios.get(
    'https://names.drycodes.com/20?nameOptions=funnyWords',
  );

  await delay(delaySeconds);
  const findings: IFinding[] = [];

  for (let i = 0; i < vulnerabilities; i++) {
    const randomNameIndex = getRandomInt(20);

    const finding = {} as IFinding;
    const location = {} as ILocation;
    const positions = {} as IPosition;
    const begin = {} as IBegin;
    try {
      begin.line = faker.datatype.number();
      positions.begin = begin;
      location.positions = positions;
      location.path = data[randomNameIndex];
      finding.type = 'sast';
      finding.location = location;
      findings.push(finding);
    } catch (error) {
      console.error(error);
    }
  }
  try {
    const newScan = new scanModel({ scan_key: 100, findings });
    await newScan.save();

    const status = vulnerabilities > 0 ? 'Failure' : 'Success';
    await eventModel.findByIdAndUpdate(scanData.queue_id, {
      $set: {
        status,
        scan_end_time: new Date(),
      },
    });
  } catch (error) {
    console.error(error);
  }
});

export default agenda;
