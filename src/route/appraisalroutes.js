import {Router} from 'Express';
import {appraisals} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';
import Appraisal from '../data/appraisal.js'



const getAllAppraisals = async() => {
  const appraisals = await getCollection('appraisals');

  return await ( await appraisals.find({})).toArray();
}

const getAppraisal = async(address) => {
  name = parseInt(address);
  const appraisalCollection = await getCollection('appraisals');
  const value = await ( await appraisalCollection.find({ address }) ).toArray();
  return value;
}

router.get ('/', (req, res) => {

  return getAllAppraisals()
    .then(appraisals => {
        console.log(appraisals);
        return res.json(appraisals);
    })
});
router.get ( '/:types', (req,res) => {

  let appraisal = appraisals.filter( appraisals => appraisals.type === req.params.type);
  return res.json(appraisals);

});

  router.post('/', (req,res)=>  {
    let appraisal = new Appraisal(
        req.body.email,
        req.body.type,
        req.body.start,
        req.body.end,
        req.body.address
    );
    storeAppraisal(appraisal);
    return res.json(appraisal);
});

const storeAppraisal = async(appraisal) => {
    const appraisalCollection = await getCollection ('appraisals');
    appraisalCollection.insertOne(appraisal);
}  
    export default router; 



    