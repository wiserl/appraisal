import {Router} from 'express';
import {appraisalType} from '../data/data.js';
import {getCollection} from '../db.js';
import AppraisalType from '../data/appraisaltype.js'


const router = new Router();

const getAllAppraisalTypes = async() => {
  const appraisalTypes = await getCollection('appraisalTypes');

  return await ( await appraisalTypes.find({active: true})).toArray();
}
const getAppraisalType = async(_region) => {
  
  const appraisalTypeCollection = await getCollection('appraisalTypes');
  const value = await ( await appraisalTypeCollection.find({ _region }) ).toArray();
  return value;
}

router.get ('/', (req, res) => {

  return getAllAppraisalTypes()
    .then(appraisalTypes => {
        console.log(appraisalTypes);
        return res.json(appraisalTypes);
    })
});


  router.get( '/:appraisalTypes', (req,res) => {
  getAppraisalType(req.params.appraisalTypes) .then(
    appraisalTypes => {
      console.log(appraisalTypes);
      return res.json(appraisalTypes)
    }
  );
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

  router.delete( '/:region', (req,res) => {
  deleteAppraisalType(req.params.region);
  return res.send( `appraisalTypes ${req.params.region} has been deleted` );
});

    
    const removeAppraisalTypes = async(region) => {
  const appraisalTypeCollection = await getCollection('appraisalTypes');
  appraisalTypeCollection.updateOne(
    { _region: (region) },
     { $set: { "active": false }
   }
   
  );
}
    
    
    const deleteAppraisalType = async(region) => {
   const appraisalTypeCollection = await getCollection('appraisalTypes');
   appraisalTypeCollection.deleteOne(
     { _region: (region) }
   );
 }





export default router;



