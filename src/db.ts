import { connect } from 'mongoose';

export default async function run() {
  await connect('mongodb://root:rootpassword@localhost:27017/');
}
