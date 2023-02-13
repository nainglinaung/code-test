import { connect } from 'mongoose';

export default async function run() {
  await connect(
    'mongodb://root:rootpassword@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
  );
}
