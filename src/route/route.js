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
  type = parseInt(type);
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

  router.delete( '/:appraisalTypesType', (req,res) => {
  removeAppraisalType(req.params.appraisalTypesType);
  return res.send( `appraisalTypes ${req.params.appraisalTypesType} has been deleted` );
});

    
    const removeAppraisalTypes = async(appraisalTypesType) => {
  const appraisalTypeCollection = await getCollection('appraisalTypes');
  appraisalTypeCollection.updateOne(
    { email: parseInt(appraisalTypesType) },
   
  );
}
    
    
    const deleteAppraisalType = async(appraisalTypesType) => {
   const appraisalTypeCollection = await getCollection('appraisalTypes');
   appraisaTypelCollection.deleteOne(
     { email: parseInt(appraisalTypesType) }
   );
 }





export default router;



