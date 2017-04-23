import {Router} from 'Express';
import {appraisalType} from '../data/data.js';
import {getCollection} from '../db.js';
import AppraisalType from '../data/appraisaltype.js'

const router = new Router();

const getAllAppraisalTypes = async() => {
  const appraisalTypes = await getCollection('appraisalTypes');

  return await ( await appraisalTypes.find({})).toArray();
}
const getAppraisalType = async(type) => {
  name = parseInt(type);
  const appraisalTypeCollection = await getCollection('appraisalTypes');
  const value = await ( await appraisalTypeCollection.find({ type }) ).toArray();
  return value;
}

router.get ('/', (req, res) => {

  return getAllAppraisalTypes()
    .then(appraisalTypes => {
        console.log(appraisalTypes);
        return res.json(appraisalTypes);
    })
});

 router.post('/', (req,res)=>  {
    let appraisalTypes = new AppraisalType(
        req.body.type,
        req.body.cost,
        req.body.turnTime,
        req.body.region,
        
    );
    storeAppraisalType(appraisalTypes);
    return res.json(appraisalTypes);
});

const storeAppraisalType = async(appraisalTypes) => {
    const appraisalTypeCollection = await getCollection ('appraisalTypes');
    appraisalTypeCollection.insertOne(appraisalTypes);
}  

export default router;



