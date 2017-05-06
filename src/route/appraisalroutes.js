import {Router} from 'express';
import {appraisals} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';
import Appraisal from '../data/appraisal.js'



const getAllAppraisals = async() => {
  const appraisals = await getCollection('appraisals');

  return await ( await appraisals.find({active: true})).toArray();
}

const getAppraisal = async(address) => {
  address = (address);
  const appraisalCollection = await getCollection('appraisals');
  const value = await ( await appraisalCollection.find({ address }) ).toArray();
  return value;
}

router.get( '/', (req, res) => {
  return getAllAppraisals().then(
    appraisals => {
      return res.json(appraisals);
    });
});

router.get( '/:appraisals', (req,res) => {
  return getAppraisals( req.params.appraisals ).then(
    appraisals => {
      console.log(appraisals);
      return res.json(appraisals);
    }
  );
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
    
    
    router.delete( '/:address', (req,res) => {
   deleteAppraisal(req.params.address);
   console.log(req.params.address);
  return res.send( `appraisals ${req.params.address} has been deleted` );
});

    
  
 const removeAppraisal = async(address) => {
  const appraisalCollection = await getCollection('appraisals');
  appraisalCollection.updateOne(
    { _address: (address) },
    {
      $set: { "active": false }
    }
  );
}

 const deleteAppraisal = async(address) => {
   const appraisalCollection = await getCollection('appraisals');
   appraisalCollection.deleteOne(
     { _address: (address) }
    
   );
  
 }

  router.put( '/:address', (req,res) => {
    console.log(req.body);
   updateAppraisal(req.body).then( appraisal => {
   return res.send( `appraisals ${req.params.address} has been updated` );
   })
   .catch(err => {console.log(err)
     res.send( `error` );
   })
});

    
 
    
    
    const updateAppraisal = async(address) => {
   const appraisalCollection = await getCollection('appraisals');
   await appraisalCollection.updateOne(
    {$set: { _address: (address) }}
   );
 }
    
    export default router; 



    