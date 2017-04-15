import { MongoClient } from 'mongodb';

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/appraisalProject';
//const mongoUri1 = process.env.MONGO_URI || 'mongodb://localhost:27017/regions';

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async (collectionIWant) => {
  const db = await connect();
  return db.collection(collectionIWant);
};
