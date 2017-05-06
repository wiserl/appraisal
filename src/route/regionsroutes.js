import {Router} from 'express';
import {regions} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';
import Region from '../data/region.js';


const getAllRegions = async() => {
  const regions = await getCollection('regions');

  return await ( await regions.find({active: true})).toArray();
}
const getRegion = async(name) => {
  name = (name);
  const regionCollection = await getCollection('regions');
  const value = await ( await regionCollection.find({ name }) ).toArray();
  return value;
}

router.get ('/', (req, res) => {

  return getAllRegions()
    .then(regions => {
        console.log(regions);
        return res.json(regions);
    })
});
router.get ( '/:regions', (req,res) => {

  let region = regions.filter( regions => regions.name === req.params.name);
  return res.json(regions);

});
    
  router.post('/', (req,res)=>  {
    let region = new Region(
       
        req.body.name,
        req.body.turnTime,
        req.body.cost
    );
    storeRegion(region);
    return res.json(region);
});

const storeRegion = async(region) => {
    const regionCollection = await getCollection ('regions');
    regionCollection.insertOne(region);
}  
    

           router.delete( '/:name', (req,res) => {
   deleteRegion(req.params.name);
   console.log(req.params.name);
  return res.send( `regions ${req.params.name} has been deleted` );
});

    
  
 const removeRegion = async(name) => {
  const appraisalCollection = await getCollection('regions');
  appraisalCollection.updateOne(
    { _name: (name) },
    {
      $set: { "active": false }
    }
  );
}

 const deleteRegion = async(name) => {
   const appraisalCollection = await getCollection('regions');
   appraisalCollection.deleteOne(
     { _name: (name) }
    
   );
  
 }
export default router; 