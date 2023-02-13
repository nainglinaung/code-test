import { connect } from 'mongoose';
export default async function run() {
  await connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/`,
  );
}
