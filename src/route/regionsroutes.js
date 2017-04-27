import {Router} from 'Express';
import {regions} from '../data/data.js';
const router = new Router();
import {getCollection} from '../db.js';
import Region from '../data/region.js';


const getAllRegions = async() => {
  const regions = await getCollection('regions');

  return await ( await regions.find({})).toArray();
}
const getRegion = async(name) => {
  name = parseInt(name);
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
    

        router.delete( '/:regionsName', (req,res) => {
  removeRegion(req.params.regionsName);
  return res.send( `regions ${req.params.regionsName} has been deleted` );
});

    
    const removeRegion = async(regionsName) => {
  const regionCollection = await getCollection('regions');
  regionCollection.updateOne(
    { name: parseInt(regionName) },
   
  );
}
    
    
    const deleteRegion = async(regionsName) => {
   const regionCollection = await getCollection('regions');
   regionCollection.deleteOne(
     { email: parseInt(regionsName) }
   );
 }
export default router; 