import { MongoClient } from 'mongodb';

const schema= 'appraisalproject';
 const mongoUri = process.env.MONGO_URI || 
 'mongodb://wiserl:nmwrestler90@ds129651.mlab.com:29651/appraisalproject';

//const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/appraisalProject';

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async (collectionIWant) => {
  const db = await connect();
  return db.collection(collectionIWant);
};

//'mongodb://localhost:27017/appraisalProject';